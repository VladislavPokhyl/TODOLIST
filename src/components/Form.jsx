import React, { useState } from "react";
const InputVal = (props) => {
  const [val, setValue] = useState(props.text);
  const onTextChange = (e) => {
    setValue(e.target.value);
  };
  const onCreate=()=>{
    props.create(val);
    setValue("");
  }
 
  return (
    <>
      <input onChange={onTextChange} value={val} type="text" />
      <button onClick={onCreate}>save</button>
     
    </>
  );
};
export default InputVal;
