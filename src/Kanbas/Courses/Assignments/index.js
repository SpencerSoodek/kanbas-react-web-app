import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css";
import { AiOutlinePlus } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiTwotoneFile } from "react-icons/ai";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <div>
        <div className="row">
            <div className="col-10">
      <div className="list-group">
      <div className="list-group-item wd-assignments-head">
        <div className="row">
            <div className="col-10">
                Assignments
            </div>
            <div className="col-2 d-flex justify-content-end">
            <p class="border border-dark rounded-3"> 40% of total </p>
            <AiOutlinePlus className="wd-icon-gray"/>
              <BsThreeDotsVertical className="wd-icon-gray"/>
                </div>
            </div>
            </div>
        {courseAssignments.map((assignment) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item">
                
                <div className="row">
                <div class="col-1 d-flex jusify-content-center">
                    <AiTwotoneFile className="wd-icon-green"/>
                </div>
                <div class="col-11">
                <h3>{assignment.title}</h3>
                <p>{assignment.course}</p></div></div>
          </Link>
        ))}
        </div>
        </div>
      </div>
    </div>
  );
}
export default Assignments;

/*
<p class="border border-dark rounded-3"> 40% of total </p>
                        <i class="fa fa-plus float-end wd-icon-grey wd-icon-grey"></i>
                        <i class="fa fa-ellipsis-v float-end wd-icon-grey wd-icon-grey"></i>
                        */