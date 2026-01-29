import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Link2, ExternalLink, Library } from 'lucide-react';
import './Resources.css';

const Resources = () => {
    const resourceCategories = [
        {
            title: 'قوالب Simulink',
            items: [
                { name: 'Professional Dashboard Template', type: 'SLX' },
                { name: 'Standard Control Loop structure', type: 'SLX' },
                { name: 'Data Logging S-Function', type: 'C++/MATLAB' }
            ]
        },
        {
            title: 'أدوات MATLAB',
            items: [
                { name: 'Plot Styling Script', type: 'M' },
                { name: 'Unit Conversion Toolbox', type: 'M' },
                { name: 'Auto-Reporting Tool', type: 'MLAPP' }
            ]
        },
        {
            title: 'مراجع وكتيبات',
            items: [
                { name: 'Model-Based Design Handbook', type: 'PDF' },
                { name: 'Simulation Checklist', type: 'PDF' },
                { name: 'Best Practices for Solvers', type: 'PDF' }
            ]
        }
    ];

    return (
        <div className="resources-page">
            <section className="resources-hero blueprint-grid">
                <div className="container text-center">
                    <Library size={60} className="hero-icon" />
                    <h1>الموارد والأدوات</h1>
                    <p>مكتبة متجددة من الملفات المساعدة، القوالب، والمراجع الهندسية.</p>
                </div>
            </section>

            <section className="resources-list">
                <div className="container">
                    <div className="resource-grid">
                        {resourceCategories.map((cat, idx) => (
                            <motion.div
                                key={idx}
                                className="resource-category"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                            >
                                <h3>{cat.title}</h3>
                                <div className="item-list">
                                    {cat.items.map((item, i) => (
                                        <div key={i} className="resource-item">
                                            <div className="item-info">
                                                <span className="item-name">{item.name}</span>
                                                <span className="item-type">{item.type}</span>
                                            </div>
                                            <button className="download-btn">
                                                <Download size={18} />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="external-links alternate-bg">
                <div className="container text-center">
                    <h2>روابط خارجية مفيدة</h2>
                    <div className="links-flex">
                        <a href="https://www.mathworks.com" target="_blank" rel="noreferrer" className="ext-link">
                            <ExternalLink size={18} /> MathWorks Documentation
                        </a>
                        <a href="#" className="ext-link">
                            <Link2 size={18} /> IEEE Simulation Standards
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Resources;
