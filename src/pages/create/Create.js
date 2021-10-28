import { useEffect, useState } from "react";
import Select from "react-select";
import { useCollection } from "../../hooks/useCollection";

import "./Create.css";

export default function Create() {
  const { documents } = useCollection("users");
  const [users, setUsers] = useState([]);

  // State for the form fields
  const [projectName, setProjectName] = useState("");
  const [projectDetails, setProjectDetails] = useState("");
  const [projectDueDate, setProjectDueDate] = useState("");

  const [category, setCategory] = useState("");
  const [assignedUsers, setAssignedUsers] = useState([]);
  const [formError, setFormError] = useState(null);

  // These are the categories for the select field
  const categories = [
    { value: "development", label: "Development" },
    { value: "design", label: "Design" },
    { value: "sales", label: "Sales" },
    { value: "marketing", label: "Marketing" },
  ];

  //
  useEffect(() => {
    if (documents) {
      const options = documents.map((user) => {
        return { value: user, label: user.displayName };
      });
      setUsers(options);
    }
  }, [documents]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(null);

    if (!category) {
      setFormError("Please select a project category");
      return;
    }

    if (assignedUsers.length < 1) {
      setFormError("Please assign some users to the project");
      return;
    }

    console.log(projectName, projectDetails, projectDueDate);
  };

  return (
    <div className="create-form">
      <h2 className="page-title">Create a new Project</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Project name:</span>
          <input required type="text" onChange={(e) => setProjectName(e.target.value)} value={projectName} />
        </label>
        <label>
          <span>Project Details:</span>
          <textarea required onChange={(e) => setProjectDetails(e.target.value)} value={projectDetails}></textarea>
        </label>
        <label>
          <span>Set due date:</span>
          <input required type="date" onChange={(e) => setProjectDueDate(e.target.value)} value={projectDueDate} />
        </label>
        <label>
          <span>Project category:</span>
          <Select onChange={(option) => setCategory(option)} options={categories} />
        </label>
        <label>
          <span>Assign to:</span>
          {/* isMulti allows us to select multiple users */}
          <Select onChange={(option) => setAssignedUsers(option)} options={users} isMulti />
        </label>

        <button className="btn">Add Project</button>

        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  );
}
