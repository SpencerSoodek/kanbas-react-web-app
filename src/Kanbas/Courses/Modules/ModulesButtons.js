function ModulesButtons(){
    return(
        <div className="d-flex justify-content-end">
        <div className="btn-group" role="group">
            <button type="button" className="btn btn-secondary">Collapse All</button>
                    
            <button type="button" className="btn btn-secondary">View Progress</button>
              
            <select className="btn btn-secondary form-select wd-button-width" id="publishall">
                <option selected>Publish All</option>
                <option value="1">One</option>
                </select>
                 
                <button type="button" className="btn btn-danger">+ Module</button>
                
                <button type="button" className="block btn btn-secondary">
                    <i className="fa fa-ellipsis-v"></i>
                </button>
            </div>
            </div>
    );
}
export default ModulesButtons;