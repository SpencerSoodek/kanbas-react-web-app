import { Link } from "react-router-dom";
import {FaBullhorn} from "react-icons/fa";
import './index.css';
import {React} from "react";

function Dashboard(
  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse })
    {
  return (
    <div>
      <h1>Dashboard</h1>
      <div className = "row">
      <div className = "col-2">
      <h5>Course</h5>
      <input value={course.name} className="form-control"
             onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <input value={course.number} className="form-control"
             onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
      <input value={course.startDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
      <input value={course.endDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
      <button className = "btn btn-success" onClick={addNewCourse}>Add</button>
      <button className = "btn btn-primary"onClick={updateCourse} >
        Update
      </button>
      </div></div>

      <hr/>
      <h2>Published Courses ({courses.length})</h2>
      <hr/>

      <div className="card-deck wd-card-deck">
        <div className="row">
        {courses.map((course) => (
          <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="card wd-dashboard-card">
            
                <div className="card-img-top wd-card-image" src="..." alt="card image cap"/>
            <div className= "card-body">
                <h4 className="wd-card-link">{course.name}</h4>
                <p className="card-text">{course.number}</p>
                <p className="card-footer"><FaBullhorn/></p>
                <button className="btn btn-success"
                  onClick={(event) => {
                  event.preventDefault();
                  setCourse(course);}}>
                  Edit</button>

                <button className="btn btn-danger"
                  onClick={(event) => {
                  event.preventDefault();
                  deleteCourse(course._id);
                 }}>
                Delete
             </button>

            </div>
          </Link>
        ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;