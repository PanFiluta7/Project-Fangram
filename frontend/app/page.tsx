"use client"
import React, { useState } from 'react';

import LoginModal from './components/modal/loginModal';
import RegisterModal from './components/modal/registrationModal';

export default function LandingPage() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
    <h1 className="text-4xl font-bold mb-6">Welcome to My Game</h1>
    <div className="space-x-4">
      <button onClick={() => setShowLogin(true)} className="bg-blue-500 text-white px-4 py-2 rounded-md">Login</button>
      <button onClick={() => setShowRegister(true)} className="bg-green-500 text-white px-4 py-2 rounded-md">Register</button>
      <button className="bg-yellow-500 text-white px-4 py-2 rounded-md">Info</button>
    </div>
    {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
      {showRegister && <RegisterModal onClose={() => setShowRegister(false)} />}
    </div>
  );
};


