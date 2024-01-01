

import React from 'react';

const LoginModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
        <div className="bg-white p-6 rounded-md shadow-xl">
          <h2 className="text-xl font-bold mb-2">Login</h2>
          <form>
            {/* Form fields for login */}
            <input type="text" placeholder="Username" className="border p-2 rounded-md mb-2 w-full" />
            <input type="password" placeholder="Password" className="border p-2 rounded-md mb-4 w-full" />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Log In</button>
          </form>
          <button onClick={onClose} className="text-sm text-gray-500 mt-4">Close</button>
        </div>
      </div>
    );
  };
  

export default LoginModal;