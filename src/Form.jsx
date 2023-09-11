import React, { useState } from "react";

export const Form = ({addColor}) => {
    const [color,setColor] = useState('');
    const handleSubmit = (e)=>{
        e.preventDefault();
        addColor(color);
    };
  return <div className="container">
    
    <form onSubmit={handleSubmit} className="color-form">
        <input 
                type="color" 
                name="color" 
                id="" 
                value={color}
                onChange={(e)=>setColor(e.target.value)}
            />
        <input 
                type="text" 
                name="" 
                id="" 
                value={color}
                onChange={(e)=>setColor(e.target.value)}
                placeholder="#ffffff"/>
        <button type="submit" className="btn" style={{background:color}}>
            Generate
        </button>
    </form>
  </div>;
};
