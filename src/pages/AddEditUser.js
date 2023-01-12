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
      <Form onSubmitCapture={handleSubmit} labelCol={{span:10}} wrapperCol={{span:14}} >
        <p>Add User Detail</p>
        <div className='Details'>
        <Form labelCol={{span:10}} wrapperCol={{span:14}}>
          <Form.Item name="name" label="Name" rules={[{required:true,message:'Please enter your name'},{whitespace:true},{min:3},{max:30}]} hasFeedback >
            <Input value={name} name="name" type='text' onChange={onInputChange} required aria-label='Name' placeholder='Enter Name'/>
          </Form.Item>
          <Form.Item name="email" label="Email" rules={[{required:true,message:'Please enter your email'},{type:'email',message:'Please Enter a Valid Email'}]}hasFeedback>
          <Input value={email} name="email" type='email' onChange={onInputChange} required aria-label='Email' placeholder='Enter Email'/>
          </Form.Item>
          <Form.Item name="phone" label="Mobile No." rules={[{require:true,message:"Please enter your mobile number"},{max:10}]} hasFeedback>
          <Input value={phone} name="phone" type='number' onChange={onInputChange} required aria-label='Phone' placeholder='Enter Mobile Number'/>
          </Form.Item>
          <Form.Item name='address' label="Address" rules={[{require:true,message:'Please enter your address'},{whitespace:true},{max:50}]}hasFeedback >
          <Input value={address} name="address" type='text' onChange={onInputChange} required aria-label='address' placeholder='Enter your address'/>
          </Form.Item>
          <Form.Item wrapperCol={{span:24}} labelCol={{span:10}}>
          <Button block type='primary' onClick={()=>handleSubmit()}>Add</Button>
          <Button block onClick={()=>navigate("/")}>Go Back</Button>
          </Form.Item>
        </Form>
        <div className='Adduser'>
         
        </div>
        </div>
      </Form>

    </div>
  )
}
