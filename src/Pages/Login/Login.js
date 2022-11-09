import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='md:w-1/2 my-8 mx-auto border border-purple-600 p-8 rounded-lg'>
      <h2 className="text-3xl font-bold text-center">Login</h2>
      <form className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="email1"
              value="Your email"
            />
          </div>
          <TextInput
            id="email1"
            type="email"
            placeholder="name@flowbite.com"
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="password1"
              value="Your password"
            />
          </div>
          <TextInput
            id="password1"
            type="password"
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
          Submit
        </Button>
        <p>New User please go <Link className='text-blue-600' to='/signup'><u>Signup</u></Link></p>
      </form>
    </div>
  );
};

export default Login;