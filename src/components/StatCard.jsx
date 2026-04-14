import React from 'react';

function StatCard({ title, amount, iconColor }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col gap-2">
      <div className={`w-10 h-10 ${iconColor} rounded-lg mb-2`}></div>
      <p className="text-slate-500 text-sm">{title}</p>
      <h3 className="text-2xl font-bold text-slate-900">{amount}</h3>
    </div>
  );
}

export default StatCard;