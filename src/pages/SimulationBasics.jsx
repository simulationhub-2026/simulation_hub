import React from 'react';
import { motion } from 'framer-motion';
import { Book, Cpu, Activity, Lightbulb, ChevronLeft } from 'lucide-react';
import './SimulationBasics.css';

const SimulationBasics = () => {
    const topics = [
        {
            title: 'ما هي المحاكاة الهندسية؟',
            icon: <Activity className="topic-icon" />,
            content: 'المحاكاة هي عملية تقليد سلوك نظام حقيقي بمرور الوقت باستخدام نموذج رياضي. في الهندسة، تسمح لنا بتوقع النتائج قبل التنفيذ الفعلي.',
            example: 'مثال: محاكاة نظام تعليق السيارة لتجربة راحته قبل بنائه.'
        },
        {
            title: 'MATLAB vs Simulink',
            icon: <Cpu className="topic-icon" />,
            content: 'MATLAB هي بيئة برمجية تعتمد على المصفوفات، بينما Simulink هي بيئة رسومية تعتمد على السحب والإفلات للمخططات الصندوقية (Block Diagrams).',
            example: 'نستخدم MATLAB للحسابات المعقدة، و Simulink لنمذجة الأنظمة الديناميكية.'
        },
        {
            title: 'Model-Based Design',
            icon: <Lightbulb className="topic-icon" />,
            content: 'منهجية تعتمد على النموذج كمركز لعملية التطوير بأكملها، من التصميم إلى الكود النهائي، مما يقلل الأخطاء بشكل كبير.',
            example: 'تستخدمه شركات السيارات والطيران الكبرى لتطوير أنظمة التحكم.'
        }
    ];

    return (
        <div className="basics-page">
            <section className="basics-hero blueprint-grid">
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        أساسيات المحاكاة
                    </motion.h1>
                    <p>رحلتك من الصفر إلى إتقان النمذجة الرقمية تبدأ هنا.</p>
                </div>
            </section>

            <section className="topics-section">
                <div className="container">
                    {topics.map((topic, index) => (
                        <motion.div
                            key={index}
                            className="topic-card"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="topic-header">
                                {topic.icon}
                                <h2>{topic.title}</h2>
                            </div>
                            <div className="topic-body">
                                <p>{topic.content}</p>
                                <div className="topic-example">
                                    <strong>تطبيق عملي:</strong> {topic.example}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="cta-learning">
                <div className="container text-center">
                    <h3>هل أنت مستعد للتعمق أكثر؟</h3>
                    <button className="btn btn-primary">
                        انتقل إلى المهارات التطبيقية
                        <ChevronLeft size={18} />
                    </button>
                </div>
            </section>
        </div>
    );
};

export default SimulationBasics;
