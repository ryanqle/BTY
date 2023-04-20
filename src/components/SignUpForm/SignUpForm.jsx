import { Component } from 'react';
import { signUp } from '../../utilities/users-service';

export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const formData = { ...this.state };
      delete formData.confirm;
      delete formData.error;
      const user = await signUp(formData);
      this.props.setUser(user);
    } catch {
      this.setState({
        error: 'Sign Up Failed - Try Again'
      });
    }
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  }

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div>
        <h1 className="text-blue-500 text-2xl">SIGN UP</h1>
        <div className="container mx-auto py-8">
          <form className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md" autoComplete="off" onSubmit={this.handleSubmit}>
            <div className="mb-4">
              <label className='block text-gray-700 text-sm font-bold mb-2'>Name</label>
              <input className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500' type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
            </div>
            <div className="mb-4">
              <label className='block text-gray-700 text-sm font-bold mb-2'>Email</label>
              <input className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500' type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
            </div>
            <div className="mb-4">
              <label className='block text-gray-700 text-sm font-bold mb-2'>Password</label>
              <input className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500' type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
            </div>
            <div className="mb-6">
              <label className='block text-gray-700 text-sm font-bold mb-2'>Confirm Password</label>
              <input className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500' type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
            </div>
            <div className="flex items-center justify-between">
              <button className="w-full bg-blue-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300" type="submit" disabled={disable}>SIGN UP</button>
            </div>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>

    );
  }
}