import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Zap, Brain, Terminal, ShieldAlert, Cpu } from 'lucide-react';
import './LearningHub.css';

const LearningHub = () => {
    const [activeLevel, setActiveLevel] = useState('beginner');

    const levels = [
        {
            id: 'beginner',
            title: 'مستوى مبتدئ',
            icon: <Terminal />,
            topics: [
                'واجهة MATLAB الأساسية',
                'التعامل مع المتغيرات والمصفوفات',
                'مقدمة إلى Simulink Blocks',
                'بناء أول نموذج محاكاة بسيط'
            ]
        },
        {
            id: 'intermediate',
            title: 'مستوى متوسط',
            icon: <Cpu />,
            topics: [
                'أنظمة التحكم (Control Systems)',
                'أنظمة القدرة الكهربائية (Power Systems)',
                'معالجة الإشارات (Signal Processing)',
                'تحليل الأعطال (Fault Analysis)'
            ]
        },
        {
            id: 'advanced',
            title: 'مستوى متقدم',
            icon: <Brain />,
            topics: [
                'التوأم الرقمي (Digital Twin)',
                'الذكاء الاصطناعي في المحاكاة',
                'الشبكات الذكية (Microgrids)',
                'محاكاة الزمن الحقيقي (Real-Time)'
            ]
        }
    ];

    return (
        <div className="learning-page">
            <section className="learning-hero">
                <div className="container text-center">
                    <h1>مركز التعلم المتدرج</h1>
                    <p>اختر مستواك وانطلق في رحلة هندسية منظمة</p>
                </div>
            </section>

            <div className="container">
                <div className="level-tabs">
                    {levels.map((level) => (
                        <button
                            key={level.id}
                            className={`level-tab ${activeLevel === level.id ? 'active' : ''}`}
                            onClick={() => setActiveLevel(level.id)}
                        >
                            {level.icon}
                            {level.title}
                        </button>
                    ))}
                </div>

                <div className="level-content">
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={activeLevel}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="curriculum-grid"
                        >
                            {levels.find(l => l.id === activeLevel)?.topics.map((topic, i) => (
                                <div key={i} className="curriculum-item">
                                    <div className="item-number">{i + 1}</div>
                                    <div className="item-text">{topic}</div>
                                    <Zap size={16} className="item-accent" />
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            <section className="case-studies alternate-bg">
                <div className="container">
                    <h2 className="text-center">دراسات حالة (Case Studies)</h2>
                    <div className="case-grid">
                        <div className="case-card">
                            <div className="case-img-placeholder">
                                <ShieldAlert size={40} />
                            </div>
                            <div className="case-info">
                                <h4>لماذا تفشل النماذج؟</h4>
                                <p>تحليل لأشهر الأخطاء في بناء نماذج Simulink وكيفية تجنبها.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LearningHub;
