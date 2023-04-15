import { useState } from 'react';
import * as usersService from '../../utilities/users-service';

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div>
      <div className="container mx-auto py-8">
        <form className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md" autoComplete="off" onSubmit={handleSubmit}>
          <label className='block text-gray-700 text-sm font-bold mb-2'>Email</label>
          <input className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500' type="text" name="email" value={credentials.email} onChange={handleChange} required />
          <label className='block text-gray-700 text-sm font-bold mb-2'>Password</label>
          <input className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500' type="password" name="password" value={credentials.password} onChange={handleChange} required />
          <br></br>
          <br></br>
          <button className="w-full bg-indigo-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300" type="submit">LOG IN</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}