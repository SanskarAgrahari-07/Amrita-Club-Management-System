import React, { useRef, useState } from 'react'

const Login = ({className}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

   async function handleSubmit(e){
        e.preventDefault();

        if (!username || !password) {
            setError('Please fill in both username and password fields.');
            return;
          }
        
        try {
            const response = await fetch('/api/login', {
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
                setError(null)
                console.log('Login Successful');
            } else {
                setError('Login Failed')
                console.log('Login Failed');
            }
        } catch(err) {
            console.error('Error', err);
        }
        setUsername('');
        setPassword('')
    }
    const handleUserName = (e) => {
        setUsername(e.target.value)
        setError(null)
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        Email: <input type="text" value={username} onChange={handleUserName} required/> <br />
        Passord: <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} required/> <br />
        <button type='submit' className={`${className} text-red-500`}>Login</button>
        {
            error && ( <p className='error-message'>{error}</p> )
        }
      </form>
    </div>
  )
}

export default Login
