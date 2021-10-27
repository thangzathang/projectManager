import { useState, useEffect } from "react";
import { projectAuth, projectStorage } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (email, password, displayName, thumbnail) => {
    // 0. No problem so far but it is pending / loading.
    setError(null);
    setIsPending(true);

    try {
      // 1. Created the new user with firebase auth
      const res = await projectAuth.createUserWithEmailAndPassword(email, password);

      // 2. Sometimes not object ( e.g network connect ) - error handled at catch (err)
      if (!res) {
        throw new Error("Could not complete signup");
      }

      // Upload user thumbnail to fireStore storage bucket
      // a. The thumbnails folder won't initially exist but Firestore will create by itself.
      // b. every user will have their own user thumbnail folder with their own image. Thus the UID.
      const uploadPath = `thumbnails/${res.user.uid}/${thumbnail.name}`;
      const img = await projectStorage.ref(uploadPath).put(thumbnail);
      const imgUrl = await img.ref.getDownloadURL();

      // Add display name && user photo
      await res.user.updateProfile({ displayName, photoURL: imgUrl });

      // dispatch login action
      dispatch({ type: "LOGIN", payload: res.user });

      // No problem and No loading/ pending.
      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (err) {
      if (!isCancelled) {
        setError(err.message);
        setIsPending(false);
      }
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { signup, error, isPending };
};
