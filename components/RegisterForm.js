import React, { useState } from 'react'

const RegisterForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
   async function handleSubmit(e){
        e.preventDefault();
        
        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    password
                })
            });

            if (response.ok) {
                console.log('Registration Successful');
            } else {
                console.log('Registration Failed');
            }
        } catch(err) {
            console.error('Error', err);
        }
        setUsername('');
        setPassword('')
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        Email: <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required/> <br />
        Passord: <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} required /> <br />
        <button type='submit'>Register</button>
      </form>
    </div>
  )
}

export default RegisterForm
