import React from 'react';

function Billing() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 px-4">
      <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6 p-6 max-w-4xl mx-auto">
        {/* Monthly Plan Card */}
        <div className="w-full sm:w-96 bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border border-gray-200">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Monthly Plan</h2>
          <p className="text-4xl font-bold text-gray-800 mb-4">$10 <span className="text-lg font-normal">/ month</span></p>
          <ul className="text-gray-700 space-y-3 mb-6">
            <li className="flex items-center"><span className="text-green-500">✔️</span> Access to all features</li>
            <li className="flex items-center"><span className="text-green-500">✔️</span> 24/7 support</li>
            <li className="flex items-center"><span className="text-green-500">✔️</span> Free updates</li>
          </ul>
          <button className="w-full py-3 bg-primary text-white rounded-lg hover:bg-blue-700 transition duration-200">
            Choose Plan
          </button>
        </div>

        {/* Yearly Plan Card */}
        <div className="w-full sm:w-96 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border border-gray-200">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Yearly Plan</h2>
          <p className="text-4xl font-bold text-gray-800 mb-4">$100 <span className="text-lg font-normal">/ year</span></p>
          <ul className="text-gray-700 space-y-3 mb-6">
            <li className="flex items-center"><span className="text-green-500">✔️</span> Access to all features</li>
            <li className="flex items-center"><span className="text-green-500">✔️</span> Priority support</li>
            <li className="flex items-center"><span className="text-green-500">✔️</span> Free updates</li>
          </ul>
          <button className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-200">
            Choose Plan
          </button>
        </div>
      </div>
    </div>
  );
}

export default Billing;
