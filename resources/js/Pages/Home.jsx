import React from 'react';
import { Head } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import { Terminal, Code2, Rocket, Cpu, Globe, Layout } from 'lucide-react';

export default function Home() {
    return (
        <>
            <Head title="Software Engineering - Innovation in Every Code" />

            <Navbar />

            <div className="min-h-screen bg-white">
                {/* Hero Section */}
                <section className="pt-32 pb-20 px-6">
                    <div className="max-w-7xl mx-auto text-center">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-8 border border-blue-100 animate-fade-in">
                            <span className="relative flex h-3 w-3 mr-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
                            </span>
                            Building the Future of Digital Solutions
                        </div>

                        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 tracking-tight">
                            We Engineer <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                                Robust Software
                            </span>
                        </h1>

                        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                            Kami adalah mitra strategis dalam transformasi digital. Fokus pada kualitas kode, skalabilitas, dan pengalaman pengguna yang luar biasa.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <div className="px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold shadow-lg opacity-50 cursor-not-allowed">
                                View Portfolio
                            </div>
                            <div className="px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-xl font-semibold shadow-sm opacity-50 cursor-not-allowed">
                                Contact Us
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Preview Section */}
                <section className="py-20 bg-gray-50 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Expertise</h2>
                            <p className="text-gray-500">Layanan yang sedang kami siapkan untuk mendukung bisnis Anda.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <ServiceCard
                                icon={<Globe className="w-8 h-8 text-blue-600" />}
                                title="Web Development"
                                desc="Aplikasi web kustom yang responsif dan berperforma tinggi menggunakan teknologi modern."
                            />
                            <ServiceCard
                                icon={<Rocket className="w-8 h-8 text-blue-600" />}
                                title="Mobile Apps"
                                desc="Pengembangan aplikasi mobile native dan cross-platform (iOS & Android) yang mulus."
                            />
                            <ServiceCard
                                icon={<Cpu className="w-8 h-8 text-blue-600" />}
                                title="System Integration"
                                desc="Menghubungkan berbagai sistem melalui API yang aman dan terstandarisasi."
                            />
                        </div>
                    </div>
                </section>

                {/* Under Construction Notice */}
                <section className="py-20 px-6">
                    <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-600 to-indigo-800 rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
                        {/* Decorative background element */}
                        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>

                        <div className="relative z-10">
                            <Terminal className="w-16 h-16 mx-auto mb-6 text-blue-200" />
                            <h2 className="text-4xl font-bold mb-4 italic">// System Update in Progress</h2>
                            <p className="text-blue-100 text-lg mb-8 max-w-lg mx-auto leading-relaxed">
                                Kami sedang merancang pengalaman digital yang lebih lengkap. Website ini akan segera hadir dengan fitur portofolio dan blog teknologi kami.
                            </p>

                            <div className="max-w-xs mx-auto">
                                <div className="flex justify-between mb-2 text-sm font-mono">
                                    <span>Compiling Assets...</span>
                                    <span>78%</span>
                                </div>
                                <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden">
                                    <div className="h-full bg-white w-[78%] rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="py-12 border-t border-gray-100 text-center">
                    <div className="flex justify-center items-center gap-2 mb-4 font-bold text-gray-800">
                        <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-[10px] text-white">SE</div>
                        Software Engineering
                    </div>
                    <p className="text-gray-400 text-sm">
                        &copy; {new Date().getFullYear()} Software Engineering. Innovation through code.
                    </p>
                </footer>
            </div>
        </>
    );
}

// Sub-component untuk Card agar kode bersih
function ServiceCard({ icon, title, desc }) {
    return (
        <div className="p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
            <div className="mb-5 inline-block p-3 bg-blue-50 rounded-xl group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
            <p className="text-gray-500 leading-relaxed text-sm">
                {desc}
            </p>
        </div>
    );
}
