// import React from 'react';
// import axios from 'axios';

// //For the authentication service

// const userLoggedIn = (username, password) => {
    
//   return axios
//     .post("api/auth/login", {
//       username,
//       password,
//     })
//     .then((response) => {
//       if (response.data.accessToken) {
//         localStorage.setItem("user", JSON.stringify(response.data));
//       }

//       return response.data;
//     });
// };


// const userLoggedOut = () => {
//   localStorage.removeItem("user");
// };

// const authService = {
//   userLoggedIn,
//   userLoggedOut,
// };

// export default authService;