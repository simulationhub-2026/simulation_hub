import React from 'react';
import { motion } from 'framer-motion';
import { Play, BookOpen, Settings, Zap, ArrowLeft } from 'lucide-react';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero blueprint-grid">
                <div className="container hero-container">
                    <motion.div
                        className="hero-content"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="hero-title">
                            Simulate. <span className="highlight">Understand.</span> Innovate.
                        </h1>
                        <p className="hero-subtitle">
                            منصتك العربية الأولى لاحتراف المحاكاة الهندسية والنمذجة الرقمية.
                            اكتشف قوة MATLAB و Simulink في تحويل أفكارك إلى واقع رقمي دقيق.
                        </p>
                        <div className="hero-btns">
                            <button className="btn btn-primary">
                                ابدأ رحلتك
                                <Play size={18} />
                            </button>
                            <button className="btn btn-outline">
                                استكشف المحتوى
                            </button>
                        </div>
                    </motion.div>

                    <motion.div
                        className="hero-visual"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <div className="simulation-preview">
                            {/* This represents a "mock" simulation block UI */}
                            <div className="sim-block main-block">
                                <Settings className="spin" />
                                <span>Simulation Controller</span>
                            </div>
                            <div className="sim-line"></div>
                            <div className="sim-block data-block">
                                <Zap />
                                <span>Real-time Data</span>
                            </div>
                            <div className="sim-grid-overlay"></div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats/Features Quick Look */}
            <section className="features">
                <div className="container grid-3">
                    <div className="feature-card">
                        <BookOpen className="card-icon" />
                        <h3>تعلم بالفهم</h3>
                        <p>نركز على بناء العقلية الهندسية وفهم الأنظمة خلف الأوامر البرمجية.</p>
                    </div>
                    <div className="feature-card">
                        <Cpu className="card-icon" />
                        <h3>تطبيق صناعي</h3>
                        <p>محتوى يربط بين المفاهيم الأكاديمية والتطبيقات الواقعية في الصناعة.</p>
                    </div>
                    <div className="feature-card">
                        <Zap className="card-icon" />
                        <h3>نماذج احترافية</h3>
                        <p>مكتبة من نماذج Simulink الجاهزة للتحميل والدراسة والتحليل.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

const Cpu = ({ className, size }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size || 24}
        height={size || 24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <rect width="16" height="16" x="4" y="4" rx="2" /><rect width="6" height="6" x="9" y="9" rx="1" /><path d="M15 2v2" /><path d="M15 20v2" /><path d="M2 15h2" /><path d="M2 9h2" /><path d="M20 15h2" /><path d="M20 9h2" /><path d="M9 2v2" /><path d="M9 20v2" />
    </svg>
);

export default Home;
