import { Footer } from 'flowbite-react';
import React from 'react';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub } from 'react-icons/bs';

const Foo = () => {
    return (
        <div className='border border-purple-600'>
            <Footer className='bg-purple-100' container={true}>
                <div className="w-full">
                    <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                        <div>
                            <Footer.Brand
                                href="#"
                                name="Ankan"
                            />
                        </div>
                        <Footer.LinkGroup>
                            <Footer.Link href="#">
                                About
                            </Footer.Link>
                            <Footer.Link href="#">
                                Privacy Policy
                            </Footer.Link>
                            <Footer.Link href="#">
                                Licensing
                            </Footer.Link>
                            <Footer.Link href="#">
                                Contact
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <Footer.Divider />
                    <div className="w-full sm:flex sm:items-center sm:justify-between">
                        <Footer.Copyright
                            href="#"
                            by="Ankan™"
                            year={2022}
                        />
                        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                            <Footer.Icon
                                href="#"
                                icon={BsFacebook}
                            />
                            <Footer.Icon
                                href="#"
                                icon={BsInstagram}
                            />
                            <Footer.Icon
                                href="#"
                                icon={BsTwitter}
                            />
                            <Footer.Icon
                                href="#"
                                icon={BsGithub}
                            />
                        </div>
                    </div>
                </div>
            </Footer>
        </div>
    );
};

export default Foo;