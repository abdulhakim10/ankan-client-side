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
    <li><Link to='/blog'>Blog</Link></li>
    <li><Link to='/addservice'>Add Service</Link></li>
    <>{
      user?.uid &&
    <>
    <li><Link to='/myreviews'>My Reviews</Link></li>
    <li>
      <Button onClick={handleLogOut} gradientDuoTone='purpleToBlue' size='xs'>Log Out</Button>
    </li>
    </>
   
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
    
    <span className="self-center whitespace-nowrap text-2xl font-bold dark:text-white">
        Ankan
    </span>
  </Navbar.Brand>
  <div className="flex md:order-2">
  {!user?.uid &&
  <>
  <Button className='mr-2 mt-2' gradientDuoTone='purpleToBlue' size='xs'><Link to='/login'>Login</Link></Button>
    <Button className='mr-2 mt-2' gradientDuoTone='purpleToBlue' size='xs'><Link to='/signup'>Sign Up</Link></Button>
  </> 

  }
    
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
      <Dropdown.Item onClick={handleLogOut}>
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