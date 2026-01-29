import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Users, BarChart3 } from 'lucide-react';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            {/* Header Section */}
            <section className="about-header blueprint-grid">
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="section-title"
                    >
                        عن Simulation Hub
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="section-subtitle"
                    >
                        جسر بين المفاهيم الأكاديمية والتطبيق الصناعي الواقعي من خلال قوة المحاكاة.
                    </motion.p>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="philosophy">
                <div className="container">
                    <div className="grid-2">
                        <div className="philosophy-text">
                            <h2>فلسفتنا في التعلم</h2>
                            <p>
                                في Simulation Hub، نؤمن أن تعلم المحاكاة لا يقتصر على الضغط على الأزرار أو كتابة الأوامر.
                                المحاكاة الحقيقية هي **فهم الفيزياء خلف النموذج**، وتوقع سلوك النظام قبل تنفيذه.
                            </p>
                            <div className="comparison">
                                <div className="comp-item">
                                    <span className="dot red"></span>
                                    <div>
                                        <h4>التعلم التقليدي</h4>
                                        <p>حفظ الأوامر (Copy-Paste) دون فهم المعنى الفيزيائي.</p>
                                    </div>
                                </div>
                                <div className="comp-item">
                                    <span className="dot green"></span>
                                    <div>
                                        <h4>منهج Simulation Hub</h4>
                                        <p>فهم النمذجة كأداة لاتخاذ قرارات هندسية صحيحة.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="philosophy-image">
                            <div className="abstract-gear">
                                <BarChart3 size={100} className="floating-icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="vision-mission alternate-bg">
                <div className="container grid-2">
                    <div className="card mission-card">
                        <Target className="card-icon" />
                        <h3>رسالتنا (Mission)</h3>
                        <p>
                            تمكين المهندسين من فهم الأنظمة المعقدة، تقليل الأخطاء والتكاليف،
                            والانتقال إلى العصر الرقمي للهندسة القائمة على المحاكاة.
                        </p>
                    </div>
                    <div className="card vision-card">
                        <Lightbulb className="card-icon" />
                        <h3>رؤيتنا (Vision)</h3>
                        <p>
                            أن نصبح المرجع العربي الأول للابتكار الهندسي الرقمي،
                            وخلق جيل من المهندسين القادرين على تصميم وبناء "التوأم الرقمي" للأنظمة.
                        </p>
                    </div>
                </div>
            </section>

            {/* Audience */}
            <section className="audience">
                <div className="container">
                    <h2 className="text-center">من يستفيد من Simulation Hub؟</h2>
                    <div className="audience-grid">
                        <div className="audience-item">
                            <Users />
                            <span>طلبة الهندسة</span>
                        </div>
                        <div className="audience-item">
                            <Settings />
                            <span>المهندسون المحترفون</span>
                        </div>
                        <div className="audience-item">
                            <BarChart3 />
                            <span>الباحثون</span>
                        </div>
                        <div className="audience-item">
                            <Zap />
                            <span>مهندسو الطاقة</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
