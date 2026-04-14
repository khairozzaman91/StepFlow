import React from 'react';

function Header() {
  return (
    <div className="flex justify-between items-center mb-10">
   
      <div>
        <h2 className="text-2xl font-bold text-slate-800">Financial Overview</h2>
        <p className="text-slate-500 text-sm">Welcome back, Khairozzaman!</p>
      </div>


      <div className="flex items-center gap-4">
        <input 
          type="text" 
          placeholder="Search..." 
          className="hidden md:block px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20"
        />
        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold">
          MK
        </div>
      </div>
    </div>
  );
}

export default Header;