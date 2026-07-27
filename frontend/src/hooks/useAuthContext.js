import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import React from 'react'

const useAuthContext = () => {
    const context = useContext(AuthContext);

    if (!context){
        throw Error ('use Auth Context inside the AuthContext Provider')
    }

    return context
}

export default useAuthContext