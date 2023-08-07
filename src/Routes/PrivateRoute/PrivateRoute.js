import React, { useContext } from 'react';
import { authContext } from '../../contexts/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children}) => {
   const {user,loading}=useContext(authContext);
   const location=useLocation();

   if(loading){
      return <p className='fw-bold text-center'>Loading...</p>
   }

   if(!user){
    return <Navigate to={'/login'} state={{from:location}} replace></Navigate>
   }

   return children; 


};

export default PrivateRoute;