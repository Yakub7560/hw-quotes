import { useState } from "react";
import "./task5.css";

const TodoList = () => {
   const [list, setList] = useState([]);
   const [inputValue, setInputValue] = useState("");

   const handleClick = () => {
      if (inputValue !== "") {
         setList([...list, { task: inputValue, isChecked: false }]);
         setInputValue("");
      }
   };

   const handleDelete = (index) => {
      const updatedList = [...list];
      updatedList.splice(index, 1);
      setList(updatedList);
   };

   const handleCheckboxClick = (index) => {
      const updatedList = [...list];
      updatedList[index].isChecked = !updatedList[index].isChecked;
      setList(updatedList);
   };

   const handleChange = (event) => {
      setInputValue(event.target.value);
   };

   return (
      <>
         <h1>Todo List</h1>

         <div>
            <div className="inputtask">
               <input type="text" value={inputValue} onChange={handleChange} />
               <button onClick={handleClick}>Add#{list.length + 1}</button>
            </div>
            <div className="mytask">
               {list.map((item, index) => (
                  <div
                     key={index}
                     className={`task ${item.isChecked ? "checked" : ""}`}
                  >
                     <div>
                        <input
                           type="checkbox"
                           checked={item.isChecked}
                           onChange={() => handleCheckboxClick(index)}
                        />
                     </div>
                     {item.task}
                     <button onClick={() => handleDelete(index)}>X</button>
                  </div>
               ))}
            </div>
         </div>
      </>
   );
};

export default TodoList;   




