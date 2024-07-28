import React, { Component } from 'react';
import ContactForm from './ContactForm';
import axios from 'axios';

const BASE_URL = "https://my-json-server.typicode.com/themeland/json-server-1/themeOneContactSection";

class ContactSection extends Component {
    state = {
        data: {
            "heading": "Контакты",
            "content": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
        },
        iconList: [
            {
                "id": 1,
                "iconClass": "fas fa-home",
                "text": "Кыргызстан г. Бишкек ул. Анарбека Бакаева 197"
            },
            {
                "id": 2,
                "iconClass": "fas fa-phone-alt",
                "text": "+996 700 705 870"
            },
            {
                "id": 3,
                "iconClass": "fas fa-envelope",
                "text": "exampledomain@domain.com"
            }
        ]
    }
    render() {
        return (
            <section id="contact" className="contact-area bg-gray ptb_50">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-6">
                            {/* Section Heading */}
                            <div className="section-heading text-center">
                                <h2 className="text-capitalize">{this.state.data.heading}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-between">
                        <div className="col-12 col-md-5">
                            {/* Contact Us */}
                            <div className="contact-us">
                                <p className="mb-3">{this.state.data.content}</p>
                                <ul>
                                    {this.state.iconList.map((item, idx) => {
                                        return (
                                            <li key={`ci_${idx}`} className="py-2">
                                                <a className="media" href="/#">
                                                    <div className="social-icon mr-3">
                                                        <i className={item.iconClass} />
                                                    </div>
                                                    <span className="media-body align-self-center">{item.text}</span>
                                                </a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 pt-4 pt-md-0"  style={{ boxShadow: '0 4px 80px rgba(0, 0, 0, 0.1)' }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1462.7688709238937!2d74.57211956113387!3d42.84037745223591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2skg!4v1722161294362!5m2!1sen!2skg"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ContactSection;