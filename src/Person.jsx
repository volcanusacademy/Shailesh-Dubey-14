import React from 'react';
import ChildComponent from './ChildComponent';

const Person = () => {

  const data = {
   
    name: "Shailesh Dubey",
    age: 31,
    city: 738473256 ,
    gmail:"sh@gmail.com"
  };

  return (
    <div className="Shailesh">
      <h1>Person Component</h1>
         
      <ChildComponent data={data} />
    </div>
  );
};

export default Person;