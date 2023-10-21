import React, { useState } from 'react';
import "./task4.css";


const EmployeesList = () => {
   const [name, setName] = useState('');
   const [phone, setPhone] = useState('');
   const [email, setEmail] = useState('');
   const [list, setList] = useState([]);

   const handleClick = () => {

      if (name && phone && email) {
         setList([...list, { name, phone, email }]);
      }

      setName('');
      setEmail('');
      setPhone('');
   };

   return (
      <>
         <div className="container">
            <div className="container__left">
               <h1>Добавить</h1>
               <p>Имя</p>
               <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
               <p>Номер</p>
               <input type="number" value={phone} onChange={(event) => setPhone(event.target.value)} />
               <p>Email</p>
               <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} />
               <button onClick={handleClick}>Добавить</button>
            </div>


            <div className="container__right">
               <h1>Список контактов</h1>
               <div className="mylist">
                  <div>Имя</div>
                  <div>Номер</div>
                  <div>Email</div>
               </div>
               <div >
                  {list.map((item, index) => (
                     <div key={index} className='mylist'>
                        <div>{item.name}</div>
                        <div>{item.phone}</div>
                        <div>{item.email}</div>
                     </div>
                  ))}
               </div>

            </div>
         </div>

      </>
   );
};

export default EmployeesList;
