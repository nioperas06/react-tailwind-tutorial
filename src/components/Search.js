import React from 'react';

export default function Search() {
  return (
  <div>
   
  <div className="flex justify-center w-full min-h-screen p-12 bg-gray-200">
    <div className="w-64 overflow-y-scroll bg-gray-900 rounded-md">
      <div className="px-6 pt-8">
        
      </div>
      <div className="px-6 pt-4">
        <div className="relative">
          <div
            className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none"
          >
            <svg
              className="w-4 h-4 text-gray-500 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            className="w-full rounded pl-8 pr-4 py-2.5 text-xs font-light bg-gray-800 text-gray-400 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:bg-gray-800"
            placeholder="search"
          />
        </div>
      </div>
      
         
          
            
          
      
      <div className="px-6 pt-4 pb-8">
        <ul>
          <li className="relative text-gray-500 hover:text-white focus-within:text-white">
            
            <a
              href="#"
              className="inline-block w-full py-2 pl-8 pr-4 text-xs rounded hover:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:bg-gray-800"
              >Highest price</a
            >
          </li>
           
          
          
        </ul>
        

       
        
      </div>



       <div className="px-6 pt-4 pb-8">
        <ul>
          <li className="relative text-gray-500 hover:text-white focus-within:text-white">
           
            <a
              href="#"
              className="inline-block w-full py-2 pl-8 pr-4 text-xs rounded hover:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:bg-gray-800"
              >Only Show Sale items</a
            >
          </li>
           
          
          
        </ul>
        

       
        
      </div>

      <div className="px-6 pt-8">
        <hr className="border-gray-700" />
      </div>
      <div className="px-6 pt-4 pb-8">
        <ul>
          <li className="relative text-gray-500 hover:text-white focus-within:text-white">
            
            <a
              href="#"
              className="inline-block w-full py-2 pl-8 pr-4 text-xs rounded hover:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:bg-gray-800"
              >Special Sal</a
            >
          </li>
           
          
          
        </ul>
        

       
        
      </div>
     
    
     
     <div className="px-6 pt-8">
        <hr className="border-gray-700" />
      </div>
      <div className="px-6 pt-4 pb-8">
        <ul>
          <li className="relative text-gray-500 hover:text-white focus-within:text-white">
            
            <a
              href="#"
              className="inline-block w-full py-2 pl-8 pr-4 text-xs rounded hover:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:bg-gray-800"
              >Special Sal</a
            >
          </li>
           
          
          
        </ul>
        

       
        
      </div>
     
    </div>
  </div>

  </div>
  
  );
}
