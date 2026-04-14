import React from 'react';
function Sidebar({ activeTab, setActiveTab }) {

  const navItem = (id, label) => {
    const isActive = activeTab === id;
    
    return (
      <button 
        onClick={() => setActiveTab(id)} 
        className={`text-left px-4 py-3 rounded-xl font-bold transition-all duration-200 ${
          isActive 
            ? "bg-blue-50 text-blue-600 shadow-sm" 
            : "text-slate-400 hover:text-slate-600 hover:bg-slate-50"
        }`}
      >
        {label}
      </button>
    );
  };

  return (
    <aside className="w-72 bg-white border-r border-slate-100 h-screen p-8 hidden md:flex flex-col">

      <div className="flex items-center gap-2 mb-12">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
          <div className="w-3 h-3 bg-white rounded-full"></div>
        </div>
        <h1 className="text-xl font-black text-slate-800 tracking-tighter uppercase">Nexus Bank</h1>
      </div>
      

      <nav className="flex flex-col gap-2">
        {navItem('dashboard', 'Dashboard')}
        {navItem('transactions', 'Transactions')}
        {navItem('cards', 'My Cards')}
      </nav>

      <div className="mt-auto p-4 bg-slate-50 rounded-2xl">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Status</p>
        <p className="text-sm font-bold text-emerald-600 flex items-center gap-2">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
          System Online
        </p>
      </div>
    </aside>
  );
}

export default Sidebar;