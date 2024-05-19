import  Card  from "./card";
import "./bank.css";
import bank from "./bank.png";
import React from "react";

function Home() {
   
    return (
        <Card
            txtcolor="black"
            header="BadBank Landing Page"
            title="Welcome to the bank!"
            text="You can use this bank"
            body={(<img src={bank} className="homeImg img-fluid" alt="Responsive image"/>)}
        />
    //     <>
    //   <br />
    //   <hr className="solid"></hr>
    //   <br />
    //   <div className="home-card">
    //     <div className="row g-0">
    //       <div className="col-md-4">
    //         <img src={bank} className="img-fluid rounded-start" alt="..." />
    //       </div>
    //       <div className="col-md-6">
    //         <div className="card-body">
    //           <h5 className="card-title">Bad Bank</h5>
    //           <p className="card-text">Welcome to your own Bad Bank</p>
    //         </div>
            
    //       </div>
    //     </div>
    //   </div>
    //   <br />
    // </>
        
    );
}

export default Home;