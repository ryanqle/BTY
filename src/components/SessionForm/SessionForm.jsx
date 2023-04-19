import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as fitnessLogAPI from '../../utilities/fitnesslogs-api';

export default function SessionForm({ user }) {
  const [session, setSession] = useState({
    sessionName: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  function handleChange(evt) {
    setSession({ ...session, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
        const newSession = await fitnessLogAPI.createSession(session, user._id);
        // await fitnessLogAPI.getSession(newSession._id)
        navigate(`/fitnesslog/${newSession._id}`);
    } catch {
    }
  }

  return (
    <div>
      <div className="container mx-auto py-8">
        <form className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md" autoComplete="off" onSubmit={handleSubmit}>
          <label className='block text-gray-700 text-sm font-bold mb-2'>Session Name</label>
          <input className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500' type="text" name="sessionName" value={session.sessionName} onChange={handleChange} required />
          <br></br>
          <br></br>
          <button className="w-full bg-indigo-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300" type="submit">Create New Session</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}