
import { useState } from "react";
import { ColorList } from "./ColorList";
import { Form } from "./Form";
import Values from "values.js";
import { ToastContainer,toast } from "react-toastify";



 const App = () => {
  const [colors, setColors] = useState(new Values('#f15025').all(10));

  const addColor = (color)=>{
    try {
      const newColors = new Values(color).all(10);
      setColors(newColors);
      toast.success('The colors have been displayed')
    } catch (error) {
      toast.error('Please enter a valid color code');
    }
  };

  return <main>
    <h4 style={{textAlign:"center", padding:"10px",marginTop:"20px",fontWeight:"500"}}>Color Palette Generator</h4>
    <Form addColor={addColor}/>
    <ToastContainer position="top-center"/>
    <ColorList colors={colors}/>

  </main>;
};
export default App;
