import React from 'react';
import { motion } from 'framer-motion';
import { FileCode, Layout, Maximize2, Download, ExternalLink } from 'lucide-react';
import './Projects.css';

const Projects = () => {
    const models = [
        {
            title: 'نموذج نظام تحكم لمحرك تيار مستمر (DC Motor)',
            category: 'Simulink Model',
            description: 'تصميم وتحليل نظام تحكم PID للسرعة مع مراعاة الاضطرابات الخارجية.',
            image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a1130?auto=format&fit=crop&q=80&w=800',
        },
        {
            title: 'محاكاة نظام الطاقة الشمسية المرتبط بالشبكة',
            category: 'Energy Systems',
            description: 'دراسة تأثير تغير الإشعاع الشمسي على جودة القدرة في الشبكة الذكية.',
            image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800',
        },
        {
            title: 'تحليل استجابة التردد لنظام ميكانيكي',
            category: 'Mechanical Simulation',
            description: 'استخدام MATLAB لتحليل الاهتزازات والرنين في الهياكل الهندسية.',
            image: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=800',
        }
    ];

    return (
        <div className="projects-page">
            <section className="projects-hero blueprint-grid">
                <div className="container text-center">
                    <h1>المشاريع والنماذج</h1>
                    <p>استكشف مجموعة من نماذج المحاكاة الاحترافية ودراسات الحالة التطبيقية.</p>
                </div>
            </section>

            <section className="projects-grid-section">
                <div className="container">
                    <div className="projects-grid">
                        {models.map((project, index) => (
                            <motion.div
                                key={index}
                                className="project-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="project-image">
                                    <img src={project.image} alt={project.title} />
                                    <div className="project-overlay">
                                        <button className="btn btn-primary btn-sm">
                                            عرض التفاصيل
                                            <Maximize2 size={16} />
                                        </button>
                                    </div>
                                </div>
                                <div className="project-info">
                                    <span className="project-tag">{project.category}</span>
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <div className="project-actions">
                                        <button className="action-link">
                                            <Download size={18} />
                                            تحميل الملف
                                        </button>
                                        <button className="action-link">
                                            <ExternalLink size={18} />
                                            شرح الفيديو
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="case-studies-info alternate-bg">
                <div className="container">
                    <div className="info-flex">
                        <div className="info-text">
                            <h2>كيف نطور هذه النماذج؟</h2>
                            <p>
                                جميع النماذج تمر بمراحل Verification و Validation دقيقة لضمان مطابقتها للفيزياء الحقيقية.
                                نحن لا نقدم مجرد ملفات، بل نقدم **منهجية حل المشكلات**.
                            </p>
                            <ul className="info-list">
                                <li><FileCode size={18} /> الالتزام بمعايير النمذجة الاحترافية.</li>
                                <li><Layout size={18} /> واجهات مستخدم (Dashboards) تفاعلية للنماذج.</li>
                            </ul>
                        </div>
                        <div className="info-visual">
                            {/* Abstract CAD representation */}
                            <div className="cad-mockup">
                                <div className="cad-line h"></div>
                                <div className="cad-line v"></div>
                                <div className="cad-circle"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;
