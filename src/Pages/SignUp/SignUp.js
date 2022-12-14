import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const SignUp = () => {
    const { signUp, googleSignIn } = useContext(AuthContext);
    const [signupError, setSignupError] = useState('');
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';


    const handleSubmit = async (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        // user Sign Up
        try{
            await signUp(email, password, name, photoURL)
        toast.success('User created successfully');
        form.reset();
        navigate(from, {replace: true});
        }
        catch(error){
            console.log(error.message);
            setSignupError(error.message);
            form.reset();
        }
    }

    // Google sign in
    const handleGoogleSignIn = async() => {
        await googleSignIn();
        toast.success('Login successful');
        navigate(from, {replace: true});
    }
    return (
        <div className='md:w-1/2  my-8 mx-auto border border-purple-600 p-8 rounded-lg'>
            <h2 className="text-3xl font-bold text-center">Signup</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="name"
                            value="Name"
                        />
                    </div>
                    <TextInput
                        id="name"
                        type="text"
                        name='name'
                        placeholder="Enter Your Name"
                        required={true}
                        shadow={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="photoURL"
                            value="Photo URL"
                        />
                    </div>
                    <TextInput
                        id="photoURL"
                        type="text"
                        name='photoURL'
                        placeholder="Enter Your photoURL"
                        required={true}
                        shadow={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email"
                            value="Email"
                        />
                    </div>
                    <TextInput
                        id="email"
                        type="email"
                        name='email'
                        placeholder="Enter Your Email"
                        required={true}
                        shadow={true}
                    />
                </div>
                {signupError && <p className='text-red-600'>{signupError}</p> }
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="password"
                            value="Password"
                        />
                    </div>
                    <TextInput
                        id="password"
                        type="password"
                        name='password'
                        placeholder="Enter Your Password"
                        required={true}
                        shadow={true}
                    />
                </div>

                <div className="flex items-center gap-2">
                    <Checkbox id="agree" />
                    <Label htmlFor="agree">
                        I agree with the{' '}
                        <a
                            href="/forms"
                            className="text-blue-600 hover:underline dark:text-blue-500"
                        >
                            terms and conditions
                        </a>
                    </Label>
                </div>
                <Button type="submit" gradientDuoTone='purpleToBlue'>
                    Sign Up
                </Button>
                <p>Already Have an Account Please go <Link className='text-blue-600' to='/login'><u>Login</u></Link></p>
            </form>
            <div className='mt-3'>
                <Button onClick={handleGoogleSignIn} className='w-full' type='submit' gradientDuoTone='purpleToBlue'>
                    Google
                </Button>
            </div>
        </div>
    );
};

export default SignUp;