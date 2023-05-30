import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginWithUser } from '../store/features/auth/authSlice'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const nav = useNavigate()
    
    const { user, error } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const [ formUserData, setFormUserData ] = useState({
        email: '',
        password: ''
    })

    const submitForm = e => {
        const { id, value } = e.target
        setFormUserData(formUserData => {
          return {
            ...formUserData,
            [id]: value
          }
        })
      }
    
      //Submits the form and redirects the user to the homepage when the user logs in
      const handleSubmit = async e => {
        e.preventDefault()
        await dispatch(loginWithUser(formUserData))
        nav('/')
      }


  return (
    <div className='login'>
        <div className='container'>
            <form noValidate onSubmit={handleSubmit}>
                <h1 className='text-center my-5'>Login</h1>

                <div className='mb-3'>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" className='form-control' value={formUserData.email} onChange={submitForm}/>
                </div>
                
                <div className='mb-3'>
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" className='form-control' value={formUserData.password} onChange={submitForm}/>
                </div>
                
                { error && <p> { error }</p>}
                <button className='submitBtn mt-3 btn btn-primary'>Login</button>
            </form>
        </div>
        <h3 className='mt-5'>Admin Konto</h3>
        <p>Email: aaa@gmail.com</p>
        <p>Password: test1234</p>
    </div>
  )
}

export default Login