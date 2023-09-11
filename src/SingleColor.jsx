import React from "react";
import { toast } from "react-toastify";
import {BsFillClipboardFill} from "react-icons/bs";


export const SingleColor = ({color,index}) => {
    const {hex,weight} = color;
    const saveToClipboard = async()=>{
      if(navigator.clipboard){
        try {
          await navigator.clipboard.writeText(`#${hex}`);
          toast.success('Hex value saved to clipboard');
        } catch (error) {
          toast.error(error);
        }
      }
      else{
        toast.error('Clipboard access is not available')
      }
    }
  return (
  <article 
          className={index>10? 'color color-light':'color'}
          style={{backgroundColor: `#${hex}`}}
          >
    <p className="color-value">
        {weight}%
        <span style={{float:"right"}} onClick={saveToClipboard}><BsFillClipboardFill/></span>
    </p>
    <p className="percent-value">#{hex}</p>
  </article>
  );
};
