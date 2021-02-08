import React from 'react'

export const useAuth = async (token, setIsAuthenticated ) => {
    const response = await fetch('http://localhost:500/users/myprofile', {
        method: "GET",
        headers: { Authorization: token },
    });

    if (response.status == 401){
        setIsAuthenticated(false);
    } else {
        setIsAuthenticated(true);
    }

};