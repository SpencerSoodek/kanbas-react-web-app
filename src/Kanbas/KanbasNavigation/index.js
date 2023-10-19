import { Link, useLocation } from "react-router-dom";
import {AiOutlineUser} from "react-icons/ai";
import { AiOutlineDashboard } from "react-icons/ai";
import { BsBook } from "react-icons/bs";
import { AiOutlineCalendar } from "react-icons/ai";
import './index.css';

function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar"];
  const icons = [AiOutlineUser, AiOutlineDashboard, BsBook, AiOutlineCalendar]
  const { pathname } = useLocation();
  return (
    <div className="wd-kanbas-navigation">
    <div className="list-group" style={{ width: 75 }}>
      <div className={`list-group-item wd-kanbas-navigation-logo d-flex justify-content-center`}>N</div>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item wd-kanbas-navigation  ${pathname.includes(link) && "active"}`}>
            <div className={"kanbas-navigation-icon"}kanbas-navigation-icon>{icons[index]()}</div>
            <div className="d-flex justify-content-center">{link}</div>
        </Link>
      ))}
    </div></div>
  );
}
export default KanbasNavigation;