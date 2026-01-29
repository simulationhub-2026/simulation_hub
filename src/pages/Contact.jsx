import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        alert('شكراً لتواصلك! سنرد عليك في أقرب وقت.');
    };

    return (
        <div className="contact-page">
            <section className="contact-hero blueprint-grid">
                <div className="container text-center">
                    <h1>تواصل معنا</h1>
                    <p>لديك استفسار تقني أو ترغب في التعاون؟ نحن هنا للاستماع.</p>
                </div>
            </section>

            <section className="contact-content">
                <div className="container">
                    <div className="contact-grid">
                        {/* Contact Form */}
                        <motion.div
                            className="contact-form-container"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <form onSubmit={handleSubmit} className="contact-form">
                                <div className="form-group">
                                    <label>الاسم بالكامل</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>البريد الإلكتروني</label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>الموضوع</label>
                                    <input
                                        type="text"
                                        value={formData.subject}
                                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>الرسالة</label>
                                    <textarea
                                        rows="5"
                                        required
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary w-full">
                                    إرسال الرسالة
                                    <Send size={18} />
                                </button>
                            </form>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            className="contact-info"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="info-card">
                                <Mail className="info-icon" />
                                <div>
                                    <h4>البريد الإلكتروني</h4>
                                    <p>mat.simulation.hub@gmail.com</p>
                                </div>
                            </div>
                            <div className="info-card">
                                <MessageSquare className="info-icon" />
                                <div>
                                    <h4>وسائل التواصل</h4>
                                    <p>تابعنا على LinkedIn و YouTube</p>
                                </div>
                            </div>
                            <div className="info-card">
                                <MapPin className="info-icon" />
                                <div>
                                    <h4>الموقع</h4>
                                    <p>منصة رقمية عالمية</p>
                                </div>
                            </div>

                            <div className="collaboration-call">
                                <h3>دعوة للتعاون</h3>
                                <p>نرحب بالمساهمات العلمية، المشاريع البحثية، والتعاون الصناعي.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
