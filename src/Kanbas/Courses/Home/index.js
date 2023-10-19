import ModulesButtons from "../Modules/ModulesButtons";
import ModuleList from "../Modules/ModulesList";
import CourseStatus from "./CourseStatus";

function Home() {
    return (
      
      <div>

        <div class="col-12">
            </div>
        <div className="row">
            <div className="col-10">
                <ModulesButtons/>
                <hr/>
        <ModuleList />
        </div>
        <div className="col-2">
        <CourseStatus/>
        </div>
      </div>
      </div>
    );
  }
  export default Home;