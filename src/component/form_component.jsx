import React from 'react';
import "./form.css";

const Form =  props =>{
    return(
        <div className ="container">
            <div>
                {props.error? error():null}
            </div>
            <form onSubmit= {props.loadweather}>
            <input type="text" className ="form-control" name="city" placeholder="city"/>
            <input type="text" className ="form-control" name="country" placeholder="country"/>
            <button className="btn"><h3>Get Weather</h3></button>
            </form>
            
        </div>
    )
}
function error(){
    return(
        <div className="alert-message">
            Please Enter City and Country Properly!
        </div>
    )
}

export default Form;