import React, { useState } from "react";
import "./task3.css"

const ListofStudents = () => {

   

   const [inputValue, setInputValue] = useState("");
   const [list, setList] = useState([]);


   const handleChange = (event) => {
      setInputValue(event.target.value);
   }
   const handleAdd = () => {
      if (inputValue != "") {
         setList([...list, inputValue]);
         setInputValue("");
      }
   };

   return (
      <div>
         <input type="text" placeholder="Добавить" value={inputValue} onChange={handleChange} />
         <button onClick={handleAdd}>Добавить</button>
         <ul>
            {list.map((item, index) => (
               <li key={index}>{item}</li>
            ))}
         </ul>

      </div>
   )

}

export default ListofStudents;