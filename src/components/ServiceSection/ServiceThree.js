import React, { Component } from 'react';
class ServiceSection extends Component {
    state = {
        data: {
            "headingThree": "Возможности системы",
            "buttonText": "Learn More",
            "thumbThree": "/img/img/9.png"
        },
        serviceData: [
            {
                "id": 1,
                "iconClass": "fab fa-buffer",
                "text": "Интеграция с ИСУО министерство образования и науки Кыргызской Республики"
            },
            {
                "id": 2,
                "iconClass": "fas fa-brush",
                "text": "Личный кабинет пользователей, предоставляющий возможность управлять данными в зависимости от их уровня доступа"
            },
            {
                "id": 3,
                "iconClass": "fas fa-burn",
                "text": "Единое окно (центр обслуживания студентов)"
            },
            {
                "id": 4,
                "iconClass": "fas fa-cart-arrow-down",
                "text": "Загрузка учебных материалов, разработка электронных курсов, привязка книг и лекций к дисциплинам, интеграция онлайн-платформ."
            },
            {
                "id": 5,
                "iconClass": "fas fa-cart-arrow-down",
                "text": "Расписание преподавателя"
            },
            {
                "id": 6,
                "iconClass": "fas fa-cart-arrow-down",
                "text": "Проведение онлайн уроков с планированием видеотрансляций, демонстрацией экрана, автоматическим отслеживанием посещаемости, учетом участников и обменом файлами и сообщениями в реальном времени. "
            }
        ]
    }

    render() {
        return (
            <section className="section service-area bg-inherit overflow-hidden ptb_100">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-12 col-lg-6 order-2 order-lg-1">
                            {/* Service Text */}
                            <div className="service-text pt-4 pt-lg-0 px-0 px-lg-4">
                                <h2 className="mb-4">{this.state.data.headingThree}</h2>
                                {/* Service List */}
                                <ul className="service-list style-two">
                                    {/* Single Service */}
                                    {this.state.serviceData.map((item, idx) => {
                                        return (
                                            <li key={`sth_${idx}`} className="single-service py-2">
                                                <div className="service-text">
                                                    <p>{item.text}</p>
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 order-1 order-lg-2 d-none d-md-block">
                            {/* Service Thumb */}
                            <div className="service-thumb mx-auto">
                                <img src={this.state.data.thumbThree} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ServiceSection;