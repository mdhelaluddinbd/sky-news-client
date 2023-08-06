import React, { useContext } from 'react';
import { authContext } from '../../contexts/AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children}) => {
   const {user}=useContext(authContext);
   if(!user){
    return <Navigate to={'/login'}></Navigate>
   }

   return children; 


};

export default PrivateRoute;