import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {
  const { logIn, googleSignIn, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
    .then(result => {
      const user = result.user;
      setUser(user)
      console.log(user)
      form.reset();
      navigate(from, {replace: true});
    })
    .catch(err => console.error(err))

  }


  // Google Sign In
  const handleGoogleSignIn = async() => {
    await googleSignIn();
    navigate(from, {replace: true});
  }
  return (
    <div className='md:w-1/2 my-8 mx-auto border border-purple-600 p-8 rounded-lg'>
      <h2 className="text-3xl font-bold text-center">Login</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="email"
              value="Your Email"
            />
          </div>
          <TextInput
            id="email"
            type="email"
            name='email'
            placeholder="Enter User Email"
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="password1"
              value="Your Password"
            />
          </div>
          <TextInput
            id="password1"
            type="password"
            name='password'
            required={true}
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">
            Remember me
          </Label>
        </div>
        <Button type="submit" gradientDuoTone="purpleToBlue">
          Login
        </Button>
        <p>New User please go <Link className='text-blue-600' to='/signup'><u>Signup</u></Link></p>
      </form>
      <div className='mt-3'>
                <Button onClick={handleGoogleSignIn}  className='w-full' type='submit' gradientDuoTone='purpleToBlue'>
                    Google
                </Button>
            </div>
    </div>
  );
};

export default Login;