import "./Project.css";

import { useDocument } from "../../hooks/useDocument";
import { useParams } from "react-router";
import ProjectSummary from "./ProjectSummary";
import ProjectComments from "./ProjectComments";

export default function Project() {
  const { id } = useParams();
  const { error, document } = useDocument("projects", id);

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!document) {
    return <div className="loading">Loading</div>;
  }

  return (
    <div className="project-details">
      <ProjectSummary project={document} />
      <ProjectComments project={document} />
    </div>
  );
}
