import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import "./index.css";

function Breadcrumb() {
    const location = useLocation();

    let currentLink = '';
    const crumbs = location.pathname.split('/').filter(crumb => crumb !== '').map((crumb, index, array) => {
        currentLink = `${currentLink}/${crumb}`;

        
            if (index === array.length - 1) {
                return(
                    <div className="wd-crumb wd-breadcrumb-link-last" key ={crumb}>
                        {crumb}
                    </div>
                );
            }
            return(
            <div className="wd-crumb" key ={crumb}>
                <Link className="wd-breadcrumb-link" to={currentLink}> {crumb}</Link>
            </div>
                    );
        });

    return (
        <div className=" wd-breadcrumbs d-flex">
            {crumbs}
        </div>
    );


}
export default Breadcrumb;