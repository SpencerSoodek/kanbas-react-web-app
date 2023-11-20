import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import { useState, useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";

// import "./index.css"; // optionally import CSS files as needed
function Kanbas() {
  const [courses, setCourses] = useState([]);
  const URL = "http://localhost:4000/api/courses";
  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };
  useEffect(() => {
    findAllCourses();
  }, []);

  const [course, setCourse] = useState({
    name: "New Course",      number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });
  const addNewCourse = async () => {
    const response = await axios.post(URL, course);
    setCourses([response.data, ...courses,]);
    setCourse({name: ""});
  };
  const deleteCourse = async (co) => {
    await axios.delete(
      `${URL}/${co._id.$oid}`);
    setCourses(courses.filter((c) => c._id !== (co._id)));
  };

  const updateCourse = async () => {
    await axios.put(`${URL}/${course._id.$oid}`, course);
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
    setCourse({name : ""});
  };

  return (
    <Provider store={store}>
      <div class="row">
        <div class="col col-1">
      <KanbasNavigation />
      </div>
      <div class= "col">
      <div>
      <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={            
          <Dashboard
              courses={courses}
              course={course}
              setCourse={setCourse}
              addNewCourse={addNewCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse}/>} />
          <Route path="Courses/:courseId/*" element={<Courses />} />
        </Routes>
        </div>
        </div>
      </div>
  </Provider>
  );
}
export default Kanbas;