import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const SignUp = () => {
    const { signUp, googleSignIn } = useContext(AuthContext);


    const handleSubmit = async (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        // user Sign Up
        await signUp(email, password, name)

    }

    // Google sign in
    const handleGoogleSignIn = async() => {
        await googleSignIn();
    }
    return (
        <div className='md:w-1/2 bg-purple-100 my-8 mx-auto border border-purple-600 p-8 rounded-lg'>
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