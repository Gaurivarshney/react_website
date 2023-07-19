import React, { useState } from 'react'
import Button from '@mui/material/Button';


function Contact() {
  
  const [data, submitData] =useState({
    fname:'',
    colname:'',
    phoneno:'',
    email:'',
    msg:'',
  });
  const InputEvent=(event)=>{
    const{name, value} =event.target;
    submitData((preVal)=>{
     return{
      ...preVal,
      [name]:value,
     }
    })
  }
  const submitForm=(e)=>{
    e.preventDefault();
    alert('Name : {data.fname} , phoneno: {data.phoneno} , email: {data.email}, colledge : {data.colname} , msg: {data.msg}')
  
  }
  return (
    <div>
    <div className="container-fluid d-flex align-items-center justify-content-center">
       <div className="row">
           <div className="col-10 mx-auto">
           <form onSubmit={submitForm}>
           <div className="row mt-4">
           <div class="mb-3">
           
  <label for="exampleFormControlInput1" class="form-label">Full Name</label>
  <input type="text" name = "fname" value= {data.fname} class="form-control" id="exampleFormControlInput1" placeholder="Enter your full name" onChange={InputEvent}/>
</div>
           <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Colledge Name</label>
  <input type="text" name = "colname" value= {data.colname}class="form-control" id="exampleFormControlInput1" placeholder="Write Your Colledge / University Name" onChange={InputEvent}/>
</div>
           <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Contact Number</label>
  <input type="number" name = "phoneno" value={data.phoneno}class="form-control" id="exampleFormControlInput1" placeholder="Write Your Phone number" onChange={InputEvent}/>
</div>
           <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" name = "email" value= {data.email} class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={InputEvent}/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label"> Drop Message</label>
  <textarea class="form-control" name = "msg" value= {data.msg}id="exampleFormControlTextarea1" rows="3" placeholder='Write Anything...' onChange={InputEvent}></textarea>
</div>
           </div>
</form>
 <Button variant="outlined" onClick={submitForm}>Submit</Button>
           </div>
       </div>
    </div>
   </div>
  )
}

export default Contact
