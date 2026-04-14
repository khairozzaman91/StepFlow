import React, { useState } from 'react'; 

function TransferModal({ isOpen, onClose, onTransfer }) {

  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');


  if (!isOpen) return null;


  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (!name || !amount) {
      alert("Please fill in both fields!");
      return;
    }

  
    onTransfer(name, amount);

   
    setName('');
    setAmount('');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
   
      <form 
        onSubmit={handleSubmit} 
        className="bg-white w-full max-w-md rounded-[32px] p-8 shadow-2xl animate-in fade-in zoom-in duration-300"
      >
        <h3 className="text-xl font-bold text-slate-800 mb-6">Quick Transfer</h3>
        
        <div className="space-y-4">
          <div>
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Recipient Name</label>
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              placeholder="e.g. khairozzaman" 
              className="w-full mt-2 p-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20" 
            />
          </div>
          
          <div>
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Amount ($)</label>
            <input 
              type="number" 
              value={amount} 
              onChange={(e) => setAmount(e.target.value)} 
              placeholder="0.00" 
              className="w-full mt-2 p-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20" 
            />
          </div>

          <div className="flex gap-3 mt-6">
           
            <button 
              type="button" 
              onClick={onClose} 
              className="flex-1 py-4 bg-slate-100 text-slate-600 rounded-2xl font-bold hover:bg-slate-200 transition-all"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="flex-1 py-4 bg-blue-600 text-white rounded-2xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all"
            >
              Send Money
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default TransferModal;