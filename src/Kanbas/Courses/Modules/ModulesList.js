import React, {useEffect} from "react";
import {useParams} from "react-router-dom"
import "./index.css";
import { AiFillCheckCircle } from "react-icons/ai";
import { AiOutlinePlus} from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules
} from "./modulesReducer";

import {findModulesForCourse, createModule} from "./client";
import * as client from "./client";


function ModulesList() {

  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  const { courseId } = useParams();
  useEffect(() => {
    findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId, dispatch]);



  const handleUpdateModule = async () => {
    await client.updateModule(module);
    dispatch(updateModule(module));
  };


  const handleDeleteModule = async (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };


  const handleAddModule = async () => {
    createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  return (
    <div className="row">
        <div className="col-12">
    
    <ul className="list-group wd-modules-list">
    <li className="list-group-item wd-modules-list">
      <div className="row">
        <div className="col-2">
        <button className="btn btn-success" onClick={handleAddModule}>Add</button>
        <button className="btn btn-primary" 
        onClick={(event) => {
          event.preventDefault();
          handleUpdateModule()}}>
                Update
        </button></div>
        

        <div className="col-2">
        <input className = "form-control" value={module.name}
          onChange={(e) =>
            dispatch(setModule({ ...module, name: e.target.value }))}/>
            </div>
        <div className = "col-6">
        <textarea className= "form-control"value={module.description}
          onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))
        }
        />
        </div>
        </div>
      </li>

      {
       modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
           <li key={index} className="list-group-item wd-modules-list">
            <div className = "row">
              <div className="col-8">
             <h3>{module.name}</h3>
             <p>{module.description}</p>
             </div>
             <div className = "col-4">
              <div className="float-end">
              <button className="btn btn-success"
              onClick={() => dispatch(setModule(module))}>
              Edit
               </button>

              <button className="btn btn-danger"
              onClick={() => handleDeleteModule(module._id)}>
              Delete
             </button>

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