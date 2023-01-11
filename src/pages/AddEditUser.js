import React,{useState,useEffect} from 'react';
import { Input, Button, Form } from 'antd';
import '../App.css';
import { Link,useNavigate } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import { createUsersStart } from '../redux/actions';
import {toast} from 'react-toastify'

const initialState = {
  name:"",
  email:"",
  phone:"",
  address:""
}

export default function AddEditUser() {
  const [formValue,setFormValue] = useState(initialState);
  const {name,email,phone,address} = formValue;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    //e.preventDefault();
    if(name && email && phone && address) {
      dispatch(createUsersStart(formValue));
      toast.success("User Added Successfully");
      setTimeout(()=>navigate("/"),500)

    }
  };
  const onInputChange = (e) => {
    let {name,value} = e.target;
    setFormValue({...formValue,[name]:value})
  };
  return (
    <div className='Form'>
      <Form onSubmitCapture={handleSubmit}>
        <p>Add User Detail</p>
        <div className='Details'>
        <Input value={name} name="name" type='text' onChange={onInputChange} required aria-label='Name' placeholder='Enter Name'/>
        <Input value={email} name="email" type='email' onChange={onInputChange} required aria-label='Email' placeholder='Enter Email'/>
        <Input value={phone} name="phone" type='number' onChange={onInputChange} required aria-label='Phone' placeholder='Enter Mobile Number'/>
        <Input value={address} name="address" type='text' onChange={onInputChange} required aria-label='address' placeholder='Enter your address'/>
        <div className='Adduser'>
          <Button onClick={()=>handleSubmit()}>Add</Button>
          <Button onClick={()=>navigate("/")}>Go Back</Button>
        </div>
        </div>
      </Form>

    </div>
  )
}
