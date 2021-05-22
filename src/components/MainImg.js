 

function MainImg() {
  return (
    <>
  <div className="MainImgDiv">
    <div className="MainImg"> 
    </div>
  </div>
     <div className="loginPanal">
       <h1>Top Hills Resorts</h1>
       <div className="login">
         <h3>Email </h3>
         <input type="text" className="text" placeholder="Enter your email" />
         <br />
         <h3>Password</h3>
         <input type="text" className="text"  placeholder="Enter your password"/>
         <br />
       <div className="radio" >
         <input type="radio"  value="Remember my password"/>  
         <label>Remember my password</label> 
       </div>
       </div>
     </div>
    </>
  );
}

export default MainImg;