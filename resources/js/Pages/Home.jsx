import React from 'react';
import { Head } from '@inertiajs/react';

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
            <Head title="Home - Under Construction" />

            <div className="max-w-md w-full text-center bg-white rounded-2xl shadow-xl p-10 border border-gray-100">
                {/* Icon atau Logo */}
                <div className="mb-6 flex justify-center">
                    <div className="bg-blue-100 p-4 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                    </div>
                </div>

                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                    Coming Soon
                </h1>

                <p className="text-gray-600 mb-8 leading-relaxed">
                    Website <span className="font-semibold text-blue-600 underline">Company Profile</span> kami sedang dalam tahap pengembangan untuk memberikan pengalaman terbaik bagi Anda.
                </p>

                <div className="flex flex-col space-y-3">
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 w-2/3 rounded-full animate-progress-smooth"></div>
                    </div>
                    <span className="text-xs text-gray-400 uppercase tracking-widest font-medium">
                        Progress: 65%
                    </span>
                </div>

                <div className="mt-10 pt-8 border-t border-gray-100">
                    <p className="text-sm text-gray-500 italic">
                        "Building something great takes time."
                    </p>
                </div>
            </div>
        </div>
    );
}
