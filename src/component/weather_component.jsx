import React from 'react';



const Weather = props => {
 return(
     
    <div className = "container">
        
        <div className="city">
        <h1>
            {props.city}
        </h1>
        </div>
        <div className = "icon">
            <h1>
                <i className= {`wi ${props.weatherIcon}`}></i>
            </h1>
        </div>
        
        <div className="temp">
        {props.temp_celsius? (<h1>{props.temp_celsius}&deg;</h1>):null}
            
            {minmaxTemp(props.temp_max, props.temp_min)}
            <h2 className="description">{props.description}</h2>
        </div>
    </div>
 );
};
function minmaxTemp(min,max){
    if(min && max){
        return(
            <h2>
                <span>{min}&deg;</span>
                <span>{max}&deg;</span>
            </h2>
        )
    }
    
}
export default Weather;