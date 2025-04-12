import React, { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");

  const handleClick = (e) => {
    e.preventDefault(); // prevent form from submitting

    if (inputValue.trim() === "") {
      alert("Please enter username/email");
    } else {
      alert(`${inputValue} you can't login right now`);
    }
  };

  return (
    <div className="bg-blue-500 min-h-screen flex flex-col justify-center items-center">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-[90%] max-w-[400px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[500px] xl:max-w-[600px] 
                      h-auto sm:h-auto md:h-auto lg:h-auto xl:h-auto mb-2 shadow-sm shadow-black">

        <img src="./x-logo.jpeg" alt="logo" className="w-10 sm:w-12 mx-auto mb-6 sm:mb-8 " />
        <h2 className="text-center text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Sign In to Twitter</h2>

        <button className="w-full flex items-center justify-center py-2 sm:py-3 px-4 border border-gray-400 rounded-lg hover:bg-gray-200 mb-3 sm:mb-4">
          <img src="./google2-logo.png" alt="google" className="h-5 sm:h-6 mr-3 sm:mr-4 rounded-full" />
          <span className="text-sm sm:text-lg font-medium">Sign In with Google</span>
        </button>

        <button className="w-full flex items-center justify-center py-2 sm:py-3 px-4 border border-gray-400 rounded-lg hover:bg-gray-200 mb-3 sm:mb-4">
          <img src="./apple2.png" alt="apple" className="h-5 sm:h-6 mr-3 sm:mr-4 rounded-full" />
          <span className="text-sm sm:text-lg font-medium">Sign In with iPhone</span>
        </button>

        <span className="block text-center text-gray-500 my-3 sm:my-4">OR</span>

        <form>
          <input
            type="text"
            placeholder="Enter email or username"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full py-2 sm:py-3 px-4 border border-gray-300 rounded-lg mb-3 sm:mb-4 text-sm sm:text-lg"
          />
          <button
            type="submit"
            onClick={handleClick}
            className="w-full py-2 sm:py-3 bg-black text-white text-sm sm:text-lg font-semibold rounded-lg hover:bg-gray-700"
          >
            LOGIN
          </button>
        </form>

      </div>
      <h3>Made With <b className="text-red-500">&#9829;</b> By <span className="text-white">Rana Huzaifa</span></h3>
    </div>
  );
}

export default App;
