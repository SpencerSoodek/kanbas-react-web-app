import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import "./index.css";


function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId);


  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div>
      <div className="row">
        <div className="col-10">
      <h4>Assignment Name</h4>
      <hr/>
      <input value={assignment.title}
             className="form-control mb-2" />
      <div className="float-end">
      <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
            className="btn btn-secondary">
        Cancel
      </Link>
      <button onClick={handleSave} className="btn btn-danger me-2 wd-margin-left-5px">
        Save
      </button>
      </div>
      </div>
      </div>
    </div>
  );
}


export default AssignmentEditor;