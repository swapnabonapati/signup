// src/components/SignUp.js

import React, {useState} from 'react'
import '../App.css'
const SignUp = () => {
  const [formData, setFormData] = useState({
    user_firstname: '',
    user_email: '',
    user_password: '',
    user_phone: '',
  })

  const handleChange = e => {
    const {name, value} = e.target
    setFormData({...formData, [name]: value})
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const data = {
      ...formData,
      user_lastname: 'Doe',
      user_city: 'Hyderabad',
      user_zipcode: '500072',
    }

    const response = await fetch(
      'https://syoft.dev/Api/user_registeration/api/user_registeration',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      },
    )

    if (response.ok) {
      alert('User registered successfully!')
    } else {
      alert('Registration failed.')
    }
  }

  return (
    <div>
      <h2 className='heading'>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='user_firstname'
          placeholder='First Name'
          onChange={handleChange}
          required
        />

        <input
          type='email'
          name='user_email'
          placeholder='Email'
          onChange={handleChange}
          required
        />
        <input
          type='password'
          name='user_password'
          placeholder='Password'
          onChange={handleChange}
          required
        />
        <input
          type='tel'
          name='user_phone'
          placeholder='Phone'
          onChange={handleChange}
          required
        />
        <button type='submit'>Register</button>
      </form>
    </div>
  )
}

export default SignUp
