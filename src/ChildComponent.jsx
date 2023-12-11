import React from "react";

const ChildComponent = ({ data }) => {
  return (
    <div className="Shailesh">
      <h1>Child Component</h1>
      <p>Name: {data.name}</p>
      <p>Age: {data.age}</p>
      <p>Contact: {data.contact}</p>
      <p>Gmail:{data.gmail}</p>
    </div>
  );
};

export default ChildComponent;
