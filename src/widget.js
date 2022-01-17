import React from 'react'
import './App.css'

const Widget = ({city, icon, desc, temp}) => {

    const removeitem = (e) => {
        e.currentTarget.closest('.weather-container').remove()
    }
    
    return (
        <div className="weather-container">
            <h2 className="name">{city}</h2>
            <div className='div'>
                <img src={icon} alt="" />  
                <p className="desc">{desc}</p>
            </div>
            <h4 className="temp">{temp}</h4>
            <button className="trash-item" onClick={removeitem}>X</button>
        </div>
    )
} 


export default Widget
