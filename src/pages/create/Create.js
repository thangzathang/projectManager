import { useState } from "react";

// styles
import "./Create.css";

export default function Create() {
  // form field values
  const [projectName, setProjectName] = useState("");
  const [projectDetails, setProjectDetails] = useState("");
  const [projectDueDate, setProjectDueDate] = useState("");

  const [category, setCategory] = useState("");
  const [assignedUsers, setAssignedUsers] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

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
          {/* select here later */}
        </label>
        <label>
          <span>Assign to:</span>
          {/* select here later */}
        </label>

        <button className="btn">Add Project</button>
      </form>
    </div>
  );
}
