import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='md:w-1/2 bg-purple-100 my-8 mx-auto border border-purple-600 p-8 rounded-lg'>
            <h2 className="text-3xl font-bold text-center">Signup</h2>
            <form className="flex flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email2"
                            value="Your email"
                        />
                    </div>
                    <TextInput
                        id="email2"
                        type="email"
                        placeholder="name@flowbite.com"
                        required={true}
                        shadow={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="password2"
                            value="Your password"
                        />
                    </div>
                    <TextInput
                        id="password2"
                        type="password"
                        required={true}
                        shadow={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="repeat-password"
                            value="Repeat password"
                        />
                    </div>
                    <TextInput
                        id="repeat-password"
                        type="password"
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
                <p>Already Have an Account Please go <Link className='text-blue-600' to='/signup'><u>Login</u></Link></p>
            </form>
            <div className='mt-3'>
                <Button className='w-full' type='submit' gradientDuoTone='purpleToBlue'>
                    Google
                </Button>
            </div>
        </div>
    );
};

export default SignUp;