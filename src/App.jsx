import { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState('');
  const[emailErr, setEmailErr] = useState(false);

  const [password, setPassword] = useState(null);
  const[passwordErr, setPasswordErr] = useState(false);

  const [confirmPass, setConfirmPass] = useState(null);
  const[confirmPassErr, setConfirmPassErr] = useState(false);

  function validateEmail(value){
   
    setEmail(value);
    setEmailErr(value.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{1,3}$/));
   
   
  }

  function validatePass(value){
    setPassword(value);
    setPasswordErr( value.length >= 8);
  }
  function  validatePassConfirm(value){
    setConfirmPass(value);
    setConfirmPassErr(value === password);
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
   if(passwordErr && emailErr && confirmPassErr){
    alert("Successfully submitted");
    setEmail('')
    setPassword('')
    setConfirmPass('');
    setPasswordErr(false);
    setEmailErr(false);
    setConfirmPassErr(false);
   }
   else{
    alert("Please fill all the fields");
   }
  }


  return (
    <>
      <div className="w-full h-screen flex justify-center items-center bg-black">
        <form action="" className="w-[400px] h-[400px] flex flex-col justify-center items-center gap-5 px-7" onSubmit={(e)=>handleSubmit(e)}>
          <div className="w-full">
            <label
              htmlFor="email"
              class="block mb-2 text-sm font-medium text-white dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e)=>{        
               validateEmail(e.target.value);
              }}
              class={`block w-full p-2 border-2   text-white bg-transparent rounded-lg outline-none ${(emailErr) && 'border-green-600 '}`}
            />
           {(!emailErr && email) &&  <span className={`font-semibold text-red-700`}> Email is required and must be in a valid format  </span>}
          </div>

          <div className="w-full">
            <label
              htmlFor="password"
             
              class="block mb-2 text-sm font-medium text-white dark:text-white"
            >
            Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e)=>{
                validatePass(e.target.value)
             
               }}
              className={`block w-full p-2 text-white border-2 bg-transparent rounded-lg outline-none ${ passwordErr && 'border-green-600'}`}            />
          </div>
          {(!passwordErr && password) && <span className={`font-semibold text-red-700`}>Password must be at least 8 characters long</span>}
          <div className="w-full">
            <label
             htmlFor="cPassword"
              class="block mb-2 text-sm font-medium text-white dark:text-white"
            >
             Confirm Password
            </label>
            <input
              type="password"
              id="cPassword"
              value={confirmPass}
              onChange={(e)=>{
                validatePassConfirm(e.target.value);
               }}
               className={`block w-full p-2 text-white border-2 bg-transparent rounded-lg outline-none ${confirmPassErr && 'border-green-600'}`}  
            />
             {(!confirmPassErr && confirmPass) && <span className={`font-semibold text-red-700`}>Password does not match</span>}
          </div>
          <button
            type="submit"
            class="w-40 px-4 py-2 bg-white border font-bold rounded-xl shadow-sm shadow-white"
          > Sign Up</button>
        </form>
      </div>
    </>
  );
}

export default App;
