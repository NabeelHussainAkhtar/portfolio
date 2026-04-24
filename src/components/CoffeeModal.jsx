import React, { useState } from 'react';
import { FiX, FiCoffee, FiCopy, FiCheck } from 'react-icons/fi';

const CoffeeModal = ({ isOpen, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);
  const [copied, setCopied] = useState(false);
  const upiId = "8618655793@upi";

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
      setCopied(false);
    }, 300);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen && !isClosing) return null;

  return (
    <div
      onClick={handleClose}
      className={`fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-[100] p-4 transition-opacity duration-300 ${isClosing ? 'opacity-0' : 'opacity-100'}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-zinc-900 border border-amber-500/30 rounded-3xl shadow-2xl shadow-amber-500/10 w-full max-w-sm overflow-hidden transform transition-all duration-300 ${isClosing ? 'scale-95 opacity-0' : 'scale-100 opacity-100'}`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-500 to-orange-600 p-6 text-center relative">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
          >
            <FiX size={24} />
          </button>
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-3 backdrop-blur-md">
            <FiCoffee size={32} className="text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white">Buy Me a Coffee</h2>
          <p className="text-white/80 text-sm mt-1">Support my work & creativity</p>
        </div>

        {/* Content */}
        <div className="p-8 flex flex-col items-center gap-6">
          <div className="bg-white p-4 rounded-2xl shadow-inner">
            <img 
              src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=${upiId}%26pn=Nabeel%20Akhtar`} 
              alt="UPI QR Code" 
              className="w-40 h-40"
            />
          </div>
          
          <div className="w-full space-y-4">
            <div className="text-center">
              <p className="text-zinc-400 text-sm mb-2">Scan QR to pay securely</p>
              <div 
                onClick={copyToClipboard}
                className="flex items-center justify-center gap-3 bg-zinc-800 border border-zinc-700 p-3 px-4 rounded-xl cursor-pointer hover:border-amber-500/50 transition-colors group w-full"
              >
                <span className="text-zinc-200 font-medium truncate">Copy UPI ID</span>
                {copied ? (
                  <FiCheck className="text-green-500 shrink-0" />
                ) : (
                  <FiCopy className="text-zinc-500 group-hover:text-amber-500 shrink-0" />
                )}
              </div>
              {copied && <p className="text-green-500 text-[10px] mt-1 animate-pulse">Copied to clipboard!</p>}
            </div>

            <div className="flex flex-col gap-2 pt-2">
              <a 
                href={`upi://pay?pa=${upiId}&pn=Nabeel Akhtar`}
                className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-xl transition-colors shadow-lg shadow-amber-500/20"
              >
                Pay via UPI App
              </a>
              <button 
                onClick={handleClose}
                className="text-zinc-500 hover:text-zinc-300 text-sm font-medium py-2 transition-colors"
              >
                Maybe later
              </button>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="bg-zinc-800/50 p-4 text-center border-t border-zinc-800">
          <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">100% Secure • Personal Donation</p>
        </div>
      </div>

      <style>{`
        @keyframes modalIn {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .scale-100 {
          animation: modalIn 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
    </div>
  );
};

export default CoffeeModal;
