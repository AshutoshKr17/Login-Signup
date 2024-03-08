import { useState } from 'react';
import {toast} from 'react-hot-toast'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function 
() {
  const navigate = useNavigate()
  const [data,setData] = useState({
    name:'',
    email:'',
    password:'',
  })

  const registerUser = async (e) => {
    //to stop the page from auto reloading
    e.preventDefault();
    const {name,email,password} = data
    try{
      const {data} = await axios.post('/register',{
        name,email,password
      })
      if(data.error){
        toast.error(data.error);
      }else{
        setData({})
        toast.success('Registred Successful.')
        navigate('/login')
      }
    }catch(err){
      console.log(err);
    }
  }
  return (
    <div>
        <form onSubmit={registerUser}>
          <label>Name</label>
          <input type = 'text' placeholder='enter name ..' value={data.name} onChange={(e) => setData({...data,name: e.target.value})}></input>
          <label>Email</label>
          <input type = 'email' placeholder='enter email ..'  value={data.email} onChange={(e) => setData({...data,email: e.target.value})}></input>
          <label>Password</label>
          <input type = 'password' placeholder='enter password ..' value={data.password} onChange={(e) => setData({...data,password: e.target.value})}></input>
          <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
