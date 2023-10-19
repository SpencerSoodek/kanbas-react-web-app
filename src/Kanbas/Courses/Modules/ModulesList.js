import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css";
import { AiFillCheckCircle } from "react-icons/ai";
import { AiOutlinePlus} from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";

function ModulesList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <div className="row">
        <div className="col-12">
    
    <ul className="list-group wd-modules-list">
      {
       modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
           <li key={index} className="list-group-item wd-modules-list">
            <div className = "row">
              <div className="col-10">
             <h3>{module.name}</h3>
             <p>{module.description}</p>
             </div>
             <div className = "col-2">
              <div className="float-end">
              <AiFillCheckCircle className="wd-icon-green"/>
              <AiOutlinePlus className="wd-icon-gray"/>
              <BsThreeDotsVertical className="wd-icon-gray"/></div>
              </div>
             </div>
           </li>
      ))
      }
    </ul>
    </div>
    </div>
  );
}
export default ModulesList;

// <li class="list-group-item wd-list-item-green-border"><p>LEARNING OBJECTIVES<i class="fa fa-ellipsis-v float-end wd-icon-grey"></i><i class="fa fa-check-circle float-end wd-green-check"></i></p></li>
/*
<li class="list-group-item">
                      <div class="row">
                        <div class="col-1 d-flex justify-content-center wd-margin-top-15px">
                          <i class="fa fa-file-contract fa-2x wd-green-check"></i>
                        </div>
                        <div class="col 9">
                      <h3 class="wd-assignment-title"><a class="wd-assignment-link" href="edit.html">A4 BOOTSTRAP</a></h3>
                      <p class="wd-assignment-description">Week 3 - Bootstrap - week starting on monday september 26th.</p>
                      <p class="wd-assignment-due">Due: Oct 10, 2022 at 11:59 PM | 100 pts</p>
                      </div>
                      </div>
                    </li>*/