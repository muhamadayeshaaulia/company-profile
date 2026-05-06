import React from 'react';

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo Area */}
                    <div className="flex-shrink-0 flex items-center gap-3">
                        <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center text-white font-bold shadow-lg shadow-blue-200">
                            SE
                        </div>
                        <span className="font-extrabold text-xl text-gray-900 tracking-tight">
                            Software <span className="text-blue-600">Engineering</span>
                        </span>
                    </div>

                    {/* Desktop Menu - Disabled state */}
                    <div className="hidden md:flex space-x-8 text-sm font-semibold text-gray-400">
                        <span className="cursor-not-allowed">Home</span>
                        <span className="cursor-not-allowed opacity-50">About</span>
                        <span className="cursor-not-allowed opacity-50">Portfolio</span>
                        <span className="cursor-not-allowed opacity-50">Contact</span>
                    </div>

                    {/* Status Badge */}
                    <div className="flex items-center">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-bold bg-blue-50 text-blue-700 border border-blue-100">
                            <span className="w-2 h-2 mr-2 bg-blue-500 rounded-full animate-ping"></span>
                            Under Dev
                        </span>
                    </div>
                </div>
            </div>
        </nav>
    );
}
