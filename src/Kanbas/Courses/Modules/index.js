import ModulesList from "./ModulesList";
import ModulesButtons from "./ModulesButtons";

function Modules() {
  return (
    <div>
      <div className="row">
        <div className="col-10">
          </div>
          </div>
        <div className="row">
      <div className="col-10">
      <ModulesButtons/>
      <hr/>
      <ModulesList />
      </div>
      </div>
    </div>
  );
}

export default Modules;