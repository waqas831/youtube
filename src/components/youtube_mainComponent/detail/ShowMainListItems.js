import React from "react";
import Youtube from "../../../../src/youtube.png";
const ShowMainListItems = () => {
  return (
    <div style={{width:'100%',margin:'2% auto'}}>

    <div style={{ width: "30%" }}>
      <img src={Youtube} alt="youtube" />
      <div style={{ display: "flex" }}>
        <img
          src={Youtube}
          alt="youtube"
          width="50px"
          height="50px"
          style={{ border: "2px", borderRadius: "50px" }}
        />
        <div>
          <h3>asjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</h3>
          <h5>web 3</h5>
          <div style={{ display: "flex" }}>
            <h5>2M Views</h5>
            <h5>2 weeks Ago</h5>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ShowMainListItems;
