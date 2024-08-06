import React, { Component } from 'react';

class ServiceSection extends Component {
    state = {
        data: {
            "heading": "Отметка посещаемости по QR-коду",
            "text": "Эта функция упрощает процесс регистрации посещаемости, делает его более точным и надежным, исключая человеческие ошибки и минимизируя время, затрачиваемое на эту задачу.",
            "thumbOne": "/img/Qr-6.png",
        },
        serviceData: [
            {
                "id": 1,
                "iconClass": "fab fa-buffer",
                "text": "Автоматическая генерация уникальных QR-кодов для каждого занятия или мероприятия."
            },
            {
                "id": 2,
                "iconClass": "fas fa-brush",
                "link": "/img/Qr-5.png",
                "text": "Студенты могут быстро и легко отмечать свое присутствие, сканируя QR-код с помощью мобильного приложения EBILIM."
            },
            {
                "id": 3,
                "iconClass": "fas fa-burn",
                "link": "/img/Qr-3.png",
                "text": "После сканирования QR-кода данные автоматически заносятся в систему, обновляя статистику посещаемости в реальном времени."
            },
            {
                "id": 4,
                "iconClass": "fas fa-cart-arrow-down",
                "link": "/img/Qr-4.png",
                "text": "Уникальные и временные QR-коды предотвращают возможность мошенничества."
            }
            ,
            {
                "id": 5,
                "iconClass": "fas fa-burn",
                "link": "/img/Qr-2.png",
                "text": "Анализ посещаемости по разным параметрам: по датам, курсам, группам и индивидуально по студентам."
            },
            {
                "id": 6,
                "iconClass": "fas fa-cart-arrow-down",
                "link": "/img/Qr-1.png",
                "text": "Автоматическое уведомление студентов о необходимости отметиться на занятии."
            }
        ]
    }
    render() {
        return (
            <section className="section service-area overflow-hidden ptb_50">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-12 col-lg-6 order-2 order-lg-2">
                            {/* Service Text */}
                            <div className="service-text pt-4 pt-lg-0">
                                <h2 className="mb-4">{this.state.data.heading}</h2>
                                <p className="mb-4">{this.state.data.text}</p>
                                {/* Service List */}
                                <ul className="service-list">
                                    {this.state.serviceData.map((item, idx) => {
                                        return (
                                            <div key={`so_${idx}`}>
                                                {/* Single Service */}
                                                <li className="single-service media py-2">
                                                    <div className="service-icon pr-4">
                                                        <span>
                                                            {item.link ? <img src={item.link} alt="" /> : <i className={item.iconClass} />}
                                                        </span>
                                                    </div>

                                                    <div className="service-text media-body">
                                                        <p>{item.text}</p>
                                                    </div>
                                                </li>
                                            </div>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className="ol-12 col-lg-6 order-1 order-lg-1 d-none d-lg-flex justify-content-center align-items-center">
                            {/* Service Thumb */}
                            <div className="service-thumb mx-auto">
                                <img src={this.state.data.thumbOne} alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        );
    }
}

export default ServiceSection;