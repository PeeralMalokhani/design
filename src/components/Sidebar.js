import React, { useState } from "react";

export default function Sidebar(props) {
  const [mystyle, dark] = useState({
    color: "white",
    backgroundColor: "yellow"
  });

  // const [button,btnchange]=useState("Enable dark mode");

  const next = () => {
    if (mystyle.color === "white") {
      dark({
        color: "black",
        backgroundColor: "yellow",
        border: "1px solid white"
      });
      // btnchange("enable dark mode");
    } else {
      dark({
        color: "red",
        backgroundColor: "yellow"
      });
      // btnchange("enable light mode");
    }
  };

  return (
    <div className="sidebar">
      <div className="container">
        <a href="" style={mystyle} className="circle">
          1
        </a>
        <div className="rows">
          <p>STEP1</p>
          <h className="heading">YOUR INFO</h>
        </div>
      </div>
      <div className="container1 " line-height="">
        <a href="" style1={props.dark} className="circle">
          2
        </a>
        <div className="rows">
          <p>STEP2</p>
          <h className="heading">SELECT PLAN</h>
        </div>
      </div>
      <div className="container2">
        <a href="" className="circle">
          3
        </a>
        <div className="rows">
          <p>STEP3</p>
          <h className="heading">ADD-ONS</h>
        </div>
      </div>
      <div className="container3">
        <a href="" className="circle">
          4
        </a>
        <div className="rows">
          <p>STEP4</p>
          <h className="heading">SUMMARY</h>
        </div>
      </div>
      <div className="personal">
        <div className="personal-info">
          <h1>Personal info</h1>
          <p>Please provide your Name,Email address and phone number</p>
        </div>
        <form>
          <div className=" form mb-3 ">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail12"
              aria-describedby="emailHelp"
            />
          </div>
          <div className=" form mb-3">
            <label htmlFor="exampleInputEmail13" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className=" form mb-3">
            <label htmlFor="exampleInputEmail14" className="form-label">
              Phone:
            </label>
            <input
              type="phone"
              className="form-control"
              id="exampleInputEmail14"
              aria-describedby="emailHelp"
            />
          </div>
          <button type="submit" onClick={next} className="btn ">
            Next
          </button>
        </form>
      </div>
    </div>
  );
}
