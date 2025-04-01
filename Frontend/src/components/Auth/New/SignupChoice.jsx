import React from 'react';
import { Home, User } from 'lucide-react';

const SignupChoice = ({ setUserType }) => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900">Create Account</h2>
        <p className="mt-2 text-gray-600">Choose your account type</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={() => setUserType('owner')}
          className="p-6 border-2 border-gray-200 rounded-xl hover:border-blue-500 transition-colors flex flex-col items-center"
        >
          <Home className="w-12 h-12 text-blue-600 mb-2" />
          <span className="font-medium text-gray-900">House Owner</span>
        </button>

        <button
          onClick={() => setUserType('tenant')}
          className="p-6 border-2 border-gray-200 rounded-xl hover:border-blue-500 transition-colors flex flex-col items-center"
        >
          <User className="w-12 h-12 text-blue-600 mb-2" />
          <span className="font-medium text-gray-900">Tenant</span>
        </button>
      </div>
    </div>
  );
};

export default SignupChoice;