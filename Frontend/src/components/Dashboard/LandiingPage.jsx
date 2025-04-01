import React from 'react';
import { Building2, Wallet, Shield, ArrowRight } from 'lucide-react';

function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Building2 className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-2xl font-bold text-gray-900">RentEase</span>
            </div>
            <div className="flex gap-4">
              <button className="px-4 py-2 text-blue-600 font-medium hover:text-blue-700 transition-colors">
                Sign In
              </button>
              <button >
                Sign Up
              </button>
              <a href="/OwnerRegistration" className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">Sign Up</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
              Simplify Your Rental Management with RentEase
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              Managing rental properties shouldn't be a hassle. RentEase is your all-in-one solution for seamless property and bill management. Whether you're a house owner tracking multiple properties or a tenant managing rent and utility bills, RentEase makes it effortless.
            </p>
            <button className="mt-8 px-8 py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors inline-flex items-center gap-2">
              Start simplifying your rental process
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
              alt="Modern apartment building"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Building2 className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                Add & Manage Properties Easily
              </h3>
              <p className="mt-2 text-gray-600">
                Keep track of your buildings, rooms, and tenants in one place.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Wallet className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                Automated Bill Management
              </h3>
              <p className="mt-2 text-gray-600">
                No more manual calculations! Generate and track rent, electricity, and maintenance bills effortlessly.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                Secure & Efficient
              </h3>
              <p className="mt-2 text-gray-600">
                Enjoy a smooth, reliable, and secure experience designed for both owners and tenants.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Building2 className="h-8 w-8" />
              <span className="ml-2 text-2xl font-bold">RentEase</span>
            </div>
            <p className="text-gray-400">© 2024 RentEase. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;