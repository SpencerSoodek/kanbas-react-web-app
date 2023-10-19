import { Link } from "react-router-dom";
import db from "../Database";
import {FaBullhorn} from "react-icons/fa";
import './index.css';

function Dashboard() {
  const courses = db.courses;
  return (
    <div>
      <h1>Dashboard</h1>
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
            </div>
          </Link>
        ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;