import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import StatCard from "./components/StatCard";
import Transaction from "./components/Transaction";
import Header from "./components/Header";
import TransferModal from "./components/TransferModal";

function App() {
  // ১. ট্যাব স্টেট (কোন পেজটি দেখাবে তা নির্ধারণ করবে)
  const [activeTab, setActiveTab] = useState('dashboard');

  const [balance, setBalance] = useState(() => {
    const savedBalance = localStorage.getItem("nexus_balance");
    return savedBalance ? JSON.parse(savedBalance) : 45200.00;
  });

  const [transactions, setTransactions] = useState(() => {
    const savedTx = localStorage.getItem("nexus_transactions");
    return savedTx ? JSON.parse(savedTx) : [
      { id: 1, name: "Spotify Premium", date: "Apr 15, 2026", amount: "$9.99", type: "expense" },
      { id: 2, name: "Upwork Payment", date: "Apr 14, 2026", amount: "$500.00", type: "income" },
    ];
  });

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    localStorage.setItem("nexus_balance", JSON.stringify(balance));
    localStorage.setItem("nexus_transactions", JSON.stringify(transactions));
  }, [balance, transactions]);

  const handleDelete = (id) => {
    const isConfirmed = window.confirm("Are you sure?");
    if (isConfirmed) {
      setTransactions(transactions.filter(item => item.id !== id));
    }
  };

  const handleTransfer = (recipientName, transferAmount) => {
    const amountNum = parseFloat(transferAmount);
    if (amountNum > balance) {
      alert("Insufficient Balance!");
      return;
    }
    setBalance(prev => prev - amountNum);
    const newTx = {
      id: Date.now(), 
      name: recipientName,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      amount: `$${amountNum.toFixed(2)}`,
      type: "expense"
    };
    setTransactions([newTx, ...transactions]);
  };

  return (
    <div className="flex bg-[#F8FAFC] min-h-screen relative font-sans">
      {/* ২. সাইডবারে স্টেট এবং ফাংশন পাঠিয়ে দিলাম */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-1 p-6 lg:p-10">
        <Header />

        {/* ৩. কন্ডিশনাল রেন্ডারিং (যদি ড্যাশবোর্ড ট্যাব সিলেক্ট থাকে) */}
        {activeTab === 'dashboard' && (
          <div className="animate-in fade-in duration-500">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <StatCard title="Total Balance" amount={`$${balance.toLocaleString()}`} iconColor="bg-blue-600" />
              <StatCard title="Total Income" amount="$12,850.00" iconColor="bg-emerald-500" />
              <div className="bg-slate-900 p-6 rounded-3xl shadow-lg text-white flex flex-col justify-between">
                <p className="text-slate-400 text-sm font-medium">Quick Actions</p>
                <button onClick={() => setShowModal(true)} className="mt-4 w-full py-3 bg-blue-600 rounded-2xl font-bold hover:bg-blue-700 transition-all">
                  Send Money
                </button>
              </div>
            </div>

            <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm">
              <h3 className="font-bold text-lg text-slate-800 mb-6 px-2">Recent Transactions</h3>
              <div className="space-y-1">
                {transactions.map((item) => (
                  <Transaction key={item.id} id={item.id} name={item.name} date={item.date} amount={item.amount} type={item.type} onDelete={handleDelete} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ৪. যদি ট্রানজ্যাকশন ট্যাব সিলেক্ট থাকে */}
        {activeTab === 'transactions' && (
          <div className="bg-white p-10 rounded-[32px] shadow-sm animate-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-2xl font-black text-slate-800 mb-4">All Transactions</h2>
            <p className="text-slate-500 mb-8">Detailed history of your banking activities.</p>
            <div className="border-t border-slate-100 pt-6">
               {/* এখানে চাইলে আপনি শুধু ট্রানজ্যাকশন লিস্ট দেখাতে পারেন */}
               {transactions.map((item) => (
                  <Transaction key={item.id} id={item.id} name={item.name} date={item.date} amount={item.amount} type={item.type} onDelete={handleDelete} />
                ))}
            </div>
          </div>
        )}

        {/* ৫. যদি মাই কার্ডস ট্যাব সিলেক্ট থাকে */}
        {activeTab === 'cards' && (
          <div className="bg-blue-600 p-12 rounded-[40px] text-white shadow-2xl shadow-blue-200 animate-in zoom-in duration-500">
            <h2 className="text-2xl font-bold mb-2">My Virtual Cards</h2>
            <p className="text-blue-100 mb-8">Manage your digital assets and credit limits.</p>
            <div className="w-80 h-48 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <p className="text-xs uppercase tracking-widest opacity-60">Nexus Platinum</p>
              <p className="text-xl mt-4 font-mono tracking-widest">**** **** **** 4582</p>
              <div className="flex justify-between mt-auto items-end">
                <div>
                  <p className="text-[10px] uppercase opacity-50">Card Holder</p>
                  <p className="text-sm font-bold">KHAIROZZAMAN</p>
                </div>
                <div className="w-10 h-6 bg-orange-400 rounded-md"></div>
              </div>
            </div>
          </div>
        )}
      </main>

      <TransferModal isOpen={showModal} onClose={() => setShowModal(false)} onTransfer={handleTransfer} />
    </div>
  );
}

export default App;