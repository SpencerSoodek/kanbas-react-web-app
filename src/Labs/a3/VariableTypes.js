function VariableTypes() {
    let numberVariable = 123;
    let floatingpointNumber = 234.345;
    let stringVariable = "Hello World!";
    let booleanVariable = true;
    let isNumber = typeof numberVariable
    let isString = typeof stringVariable;
    let isBoolean = typeof booleanVariable;
    return(
        <div>
            <h2>Variable Types</h2>
            numberVariable = {numberVariable}<br/>
            floatingpointNumber = {floatingpointNumber}<br/>
            stringVariable = {stringVariable}<br/>
            booleanVariable = {booleanVariable + ""}<br/>
            isNumber = {isNumber} <br/>
            isString = {isString} <br/>
            isBoolean = {isBoolean} <br/>
        </div>
    );
}
export default VariableTypes;