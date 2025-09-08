import React from "react";

const Card = (props) => {
  const [num, setNum]=React.useState(0);
  const increment = ()=>{
    setNum(num+1);
    console.log(num);
  }
  return (
    // <div className="square-card">
    //   <img src={props.image} alt="Card" className="card-image" />
    //   <div className="card-content">
    //     <h2 className="card-title">{props.title}</h2>
    //     <p className="card-description">{props.description}</p>
    //   </div>
    // </div>


<div>
  <h1>10</h1>
  <button onClick={()=>increment()}>+</button>
  <button onClick={()=>setNum(num-1)}>-</button>
</div>
  );
};


export default Card;