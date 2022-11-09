import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
  const {user,logOut} = useContext(AuthContext);

  const handleLogOut = () => {
     logOut()
     .then(() => {})
     .catch(err => console.error(err))
  }

  const menuItems = <>
    <li><Link to='/'> Home</Link></li>
    <li><Link to='/services'>Services</Link></li>
    <>{
      user?.email ?
    <li>
      <Button onClick={handleLogOut} gradientDuoTone='purpleToBlue' size='xs'>Log Out</Button>
    </li>
    :
    <li> <Link to='/login'>Login</Link></li>
    }</>
  </>
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
      label={<Avatar alt="User settings" img={user?.photoURL} rounded={true}/>}
    >
      <Dropdown.Header>
        <span className="block text-sm">
          {user?.email ?
          user?.displayName
          :
          'Profile Name'
          }
        </span>
        <span className="block truncate text-sm font-medium">
        {user?.email ?
          user?.email
          :
          'user@email'
          }
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
    {menuItems}
  </Navbar.Collapse>
</Navbar>
        </div>
    );
};

export default Header;