import React from 'react';
import { Trash2 } from 'lucide-react'; 

function Transaction({ id, name, date, amount, type, onDelete }) {
  return (
    <div className="group flex items-center justify-between p-4 hover:bg-rose-50 rounded-2xl transition-all">
      <div className="flex items-center gap-4">
   
        <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-600 group-hover:bg-white transition-colors">
          {name ? name[0] : '?'}
        </div>
        
        <div>
          <p className="text-sm font-bold text-slate-800">{name}</p>
          <p className="text-xs text-slate-400 font-medium">{date}</p>
        </div>
      </div>
      
      <div className="flex items-center gap-6">
      
        <p className={`text-sm font-black ${type === 'income' ? 'text-emerald-600' : 'text-slate-900'}`}>
          {type === 'income' ? '+' : '-'}{amount}
        </p>

      
        <button 
          onClick={() => onDelete(id)} 
          className="p-2 text-slate-300 hover:text-rose-500 hover:bg-rose-100 rounded-full transition-all"
          title="Delete Transaction"
        >
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  );
}

export default Transaction;