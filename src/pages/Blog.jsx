import React from 'react';
import { motion } from 'framer-motion';
import { Clock, User, ChevronLeft, Search } from 'lucide-react';
import './Blog.css';

const Blog = () => {
    const articles = [
        {
            title: 'لماذا تفشل نماذج Simulink في البداية؟',
            excerpt: 'استكشاف الأسباب الشائعة لعدم استقرار المحاكاة (Numerical Instability) وكيفية اختيار الـ Solver المناسب.',
            author: 'Simulation Hub Team',
            date: '25 يناير 2026',
            readTime: '8 دقائق',
            image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
        },
        {
            title: 'مستقبل التوأم الرقمي (Digital Twin) في الصناعة',
            excerpt: 'كيف تساهم المحاكاة في الزمن الحقيقي في تحسين أداء المصانع وتقليل تكاليف الصيانة التنبؤية.',
            author: 'Eng. Mohammed',
            date: '20 يناير 2026',
            readTime: '12 دقيقة',
            image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800',
        },
        {
            title: 'الفرق الجوهري بين المحاكاة (Simulation) والمحاكاة المادية (Emulation)',
            excerpt: 'كثير من المهندسين يخلطون بين المصطلحين، هنا نوضح الفرق ومتى نستخدم كل منهما.',
            author: 'Technical Dept',
            date: '15 يناير 2026',
            readTime: '6 دقائق',
            image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800',
        }
    ];

    return (
        <div className="blog-page">
            <section className="blog-hero blueprint-grid">
                <div className="container text-center">
                    <h1>المدونة التقنية</h1>
                    <p>مقالات معمقة ورؤى هندسية حول عالم النمذجة والمحاكاة.</p>

                    <div className="search-bar">
                        <Search size={20} className="search-icon" />
                        <input type="text" placeholder="بحث في المقالات..." />
                    </div>
                </div>
            </section>

            <section className="blog-grid-section">
                <div className="container">
                    <div className="blog-grid">
                        {articles.map((article, index) => (
                            <motion.article
                                key={index}
                                className="blog-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="blog-img">
                                    <img src={article.image} alt={article.title} />
                                </div>
                                <div className="blog-content">
                                    <div className="blog-meta">
                                        <span><User size={14} /> {article.author}</span>
                                        <span><Clock size={14} /> {article.date}</span>
                                    </div>
                                    <h3>{article.title}</h3>
                                    <p>{article.excerpt}</p>
                                    <button className="read-more">
                                        اقرأ المزيد
                                        <ChevronLeft size={16} />
                                    </button>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;
