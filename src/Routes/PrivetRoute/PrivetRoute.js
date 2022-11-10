import { Spinner } from 'flowbite-react';
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivetRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
      return  <Spinner
    aria-label="Extra large spinner example"
    size="xl"
  />
    }

    if(!user){
       return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }
    return children
};

export default PrivetRoute;