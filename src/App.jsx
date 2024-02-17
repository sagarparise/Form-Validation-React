import { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState('');
  const[emailErr, setEmailErr] = useState('');
  function validateEmail(){
   
    // if(email.length == 0)
    // {
     
    //   emailError.innerHTML = 'Email is required';
    //   return false;
    // }
    if(!emailValue.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{1,3}$/))
    {
      
    }
    else{

    }
    return true;
  }
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center bg-black">
        <form action="" className="w-[300px] h-[400px] flex flex-col justify-center gap-5 px-7">
          <div>
            <label
              for="small-input"
              class="block mb-2 text-sm font-medium text-white dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="small-input"
              value={email}
              onChange={(e)=>{
               setEmail(e.target.value)
               validateEmail();
              }}
              class="block w-full p-2 text-gray-900 border bg-transparent rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <span className=" text-red-700 ps-2">Error</span>
          </div>

          <div>
            <label
              for="small-input"
              class="block mb-2 text-sm font-medium text-white dark:text-white"
            >
            Password
            </label>
            <input
              type="password"
              id="small-input"
              class="block w-full p-2 text-gray-900 border bg-transparent rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <div>
            <label
              for="small-input"
              class="block mb-2 text-sm font-medium text-white dark:text-white"
            >
             Confirm Password
            </label>
            <input
              type="email"
              id="small-input"
              class="block w-full p-2 text-gray-900 border bg-transparent rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
