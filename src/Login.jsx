import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
 import { NavLink } from 'react-router-dom';

const Login =() => {
 
 const [passwordShown, setPasswordShown] = useState(false);
  // Password toggle handler
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);

  };





// var toggleInputContainer = function (input) {
// if (input.value != "") {
// input.classList.add('filled');
// } else {
// input.classList.remove('filled');
// }
// }
// var labels = document.querySelectorAll('.label');
// for (var i = 0; i < labels.length; i++) {
// labels[i].addEventListener('click', function () {
// this.previousElementSibling.focus();
// });
// }
// window.addEventListener("load", function () {
// var inputs = document.getElementsByClassName("input");
// for (var i = 0; i < inputs.length; i++) {
// console.log('looped');
// inputs[i].addEventListener('keyup', function () {
// toggleInputContainer(this);
// });
// toggleInputContainer(inputs[i]);
// }
// });


return(
<>
<body className=" bg-gray-100 flex justify-center items-center h-screen">
  <div>
    <div className="shadow-xl p-10 bg-white max-w-xl rounded-lg mb-10">
      <div className="flex justify-center mb-8"><img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" className="w-24" /></div>
      <h1 className="text-2xl font-black mb-4  ">Login</h1>

        <div className="label-float mb-4">
        <input type="text" placeholder=" " className="border appearance-none rounded w-full px-3 py-3 transition duration-200 focus:ring-1 focus:outline-none active:outline-none active:border-indigo-600" />
        <label className="px-3 text-gray-400 text-sm">Email</label>
      </div>

      <div className="mb-4 relative">
        <input className="input border appearance-none rounded w-full px-3 py-3 pt-5 pb-2 transition duration-200  focus:ring-1 focus:outline-none active:outline-none active:border-indigo-600" name="email" id="email" type="text" autofocus autoComplete="off" />
        <label htmlFor="email" className="label absolute mb-0 -mt-1 pt-1 pl-3 leading-tighter text-gray-400 text-sm mt-2 cursor-text">Email Address</label>
      </div>

      <div className="mb-4 relative">
        <input className="input border  appearance-none rounded w-full px-3 py-3 pt-5 pb-2 transition duration-200  focus:ring-1 focus:outline-none active:outline-none active:border-indigo-600" name="password" id="password" type={passwordShown ? "text" : "password"} autofocus />
        <label htmlFor="password" className="label absolute mb-0 -mt-1 pt-1 pl-3 leading-tighter text-gray-400 text-sm mt-2 cursor-text">Password</label>
           <i className="material-icons-outlined absolute right-4 top-4 cursor-pointer text-lg text-gray-500" onClick={togglePassword}>visibility</i> 
        <p className="text-xs text-gray-500 py-2 font-medium cursor-pointer hover:text-blue-500 transition duration-200">Forgot password</p>
      </div>
      <NavLink exact to="/" type="button" value="Login" id="submit" onclick="validate()" className="bg-blue-500 text-white text-center font-medium py-3 px-6 rounded w-full hover:bg-blue-600 transition duration-200">Submit</NavLink> 
    </div>
  </div>
  
</body>
</>
);
};

export default Login;