import React, { useState } from 'react';
import Header from './Header';

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = () => {
    setIsLogin(!isLogin);
  };

  const getInputData = (e) =>{
    e.preventDefault(); //eta na file page reload hobe
    console.log(fullName,email,password);
    setFullName(""); //name,mail esob dewar por submit korle clear hye jabe
    setEmail("");
    setPassword("");
  }

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img className='w-[100vw] h-[100vh]' src="https://help.nflxext.com/0af6ce3e-b27a-4722-a5f0-e32af4df3045_what_is_netflix_5_en.png" alt="banner" />
      </div>
      <form onsubmit={getInputData} className='flex flex-col w-3/12 p-12 my-36 left-0 right-0 mx-auto items-center justify-center absolute rounded-md bg-black opacity-90'>
        <h1 className='text-3xl text-white mb-5 font-bold'>{isLogin ? "Login" : "Signup"}</h1>
        <div className="flex flex-col w-full">
          {!isLogin && (
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              type="text"
              placeholder='Fullname'
              className='outline-none p-3 m-2 rounded-sm bg-gray-800 text-white w-full'
            />
          )}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder='Email'
            className='outline-none p-3 m-2 rounded-sm bg-gray-800 text-white w-full'
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder='Password'
            className='outline-none p-3 m-2 rounded-sm bg-gray-800 text-white w-full'
          />
          <button className='bg-red-600 mt-6 p-3 text-white rounded-sm font-medium w-full'>
            {isLogin ? "Login" : "Signup"}
          </button>
          <p className='text-white mt-2'>
            {isLogin ? "New to Netflix?" : "Already have an account?"}
            <span onClick={loginHandler} className='ml-1 text-blue-800 font-medium cursor-pointer'>
              {isLogin ? "Signup" : "Login"}
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
