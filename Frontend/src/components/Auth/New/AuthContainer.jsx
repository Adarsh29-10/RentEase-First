import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignupChoice from './SignupChoice';
import OwnerSignupForm from './OwnerSignupForm';
import TenantSignupForm from './TenantSignupForm';

const AuthContainer = ({ onClose }) => {
  const [isLoginView, setIsLoginView] = useState(true);
  const [userType, setUserType] = useState(null);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-4xl">
        <div className="flex h-[600px]">
          {/* Left Side - Image */}
          <div className="hidden md:block w-1/2 bg-gradient-to-br from-blue-500 to-purple-600 p-12 text-white">
            <h2 className="text-3xl font-bold mb-6">Welcome to RentEase</h2>
            <p className="text-lg opacity-90">
              Your complete solution for property management and rental services.
            </p>
          </div>

          {/* Right Side - Forms */}
          <div className="w-full md:w-1/2 p-8">
            <div className="flex justify-end mb-4">
              <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {isLoginView ? (
              <>
                <LoginForm />
                <p className="text-center mt-4 text-gray-600">
                  Don't have an account?{' '}
                  <button
                    onClick={() => setIsLoginView(false)}
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Sign Up
                  </button>
                </p>
              </>
            ) : (
              <>
                {!userType ? (
                  <SignupChoice setUserType={setUserType} />
                ) : userType === 'owner' ? (
                  <OwnerSignupForm onBack={() => setUserType(null)} />
                ) : (
                  <TenantSignupForm onBack={() => setUserType(null)} />
                )}
                <p className="text-center mt-4 text-gray-600">
                  Already have an account?{' '}
                  <button
                    onClick={() => {
                      setIsLoginView(true);
                      setUserType(null);
                    }}
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Login
                  </button>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthContainer;