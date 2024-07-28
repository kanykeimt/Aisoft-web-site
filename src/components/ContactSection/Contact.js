import React, { Component } from 'react';
import ContactForm from './ContactForm';
import axios from 'axios';

const BASE_URL = "https://my-json-server.typicode.com/themeland/json-server-1/themeOneContactSection";

class ContactSection extends Component {
    state = {
        data: {
            "heading": "Контакты",
            "content": "AiSoft - ведущий разработчик образовательных систем. Мы предлагаем современные решения для автоматизации учебных процессов."
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
                "text": "exampledomain@domain.com",
                "link" : ""
            }
        ]
    }

    componentDidMount() {
        window.ymaps.ready(() => {
            const map = new window.ymaps.Map("yandex-map", {
                center: [42.840377, 74.572120],
                zoom: 14,
                controls: ['zoomControl', 'fullscreenControl']
            });

            const placemark = new window.ymaps.Placemark([42.840678, 74.572413], {
                balloonContent: '<strong>AiSoft</strong><br>Кыргызстан г. Бишкек ул. Анарбека Бакаева 197'
            }, {
                preset: 'islands#icon',
                iconColor: '#7c4fe0'
            });

            map.geoObjects.add(placemark);
        });
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
                                                <a className="media" href={item.link}>
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
                        <div className="col-12 col-md-6 pt-4 pt-md-0" style={{ boxShadow: '0 4px 80px rgba(0, 0, 0, 0.1)' }}>
                            <div id="yandex-map" style={{ width: '100%', height: '400px' }}></div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ContactSection;
