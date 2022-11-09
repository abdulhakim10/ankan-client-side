import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='border border-purple-600'>
           <Navbar
           className='bg-purple-100'
  fluid={true}
  rounded={true}
>
  <Navbar.Brand>
    <img
      src="https://flowbite.com/docs/images/logo.svg"
      className="mr-3 h-6 sm:h-9"
      alt="Flowbite Logo"
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        Ankan
    </span>
  </Navbar.Brand>
  <div className="flex md:order-2">
    <Dropdown
      arrowIcon={false}
      inline={true}
      label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true}/>}
    >
      <Dropdown.Header>
        <span className="block text-sm">
          Bonnie Green
        </span>
        <span className="block truncate text-sm font-medium">
          name@flowbite.com
        </span>
      </Dropdown.Header>
      <Dropdown.Divider />
      <Dropdown.Item>
        Sign out
      </Dropdown.Item>
    </Dropdown>
    <Navbar.Toggle />
  </div>
  <Navbar.Collapse>
    <Link to='/'>
      Home
    </Link>
    <Link to='/services'>
      Services
    </Link>
    <Link to=''>
      About
    </Link>
    <Link to='/login'>
      Login
    </Link>
  </Navbar.Collapse>
</Navbar>
        </div>
    );
};

export default Header;