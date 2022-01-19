import React from 'react'
import "./SignUpIn.css";
function Signup2() {
    return (
        <div className="login">
        <div className="box_container">
            <div style={{display:"flex",flexDirection:"column",gap:"10",alignContent:"center", justifyContent:"center"}}>
            <h4>Your email isn't verified yet</h4>
            <p style={{textAlign:"center"}}>The email associated with your Tool account needs to be confirmed. We can send testemail@gmail.com a quick verification link.</p>
           
                <button style={{ backgroundColor: "#7cbe90" }} className='btn btn-lg btn-block'> Send Verification email</button>
        
                <button className='btn btn-lg btn-block' >Skip for now</button>
          
            </div>
           
        </div>
        </div>
    )
}

export default Signup2
