import React from 'react';

const Popup = ({ isVisible, onClose, onContinue }) => {
    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-md">
                <p className="text-xl mb-4 text-center">POST PROPERTY ON DYLAN ESTATE?</p>
                <button 
                    onClick={onContinue} 
                    className="w-full bg-blue-900 text-white py-2 rounded-lg shadow hover:shadow-lg transition duration-300 mb-4"
                >
                    Continue
                </button>
                <p className="text-center text-sm">
                    By continuing you agree to our <a href="#terms" className="text-blue-900 underline">Terms and Conditions</a> & <a href="#privacy" className="text-blue-900 underline">Privacy Policy</a>
                </p>
            </div>
        </div>
    );
};

export default Popup;
