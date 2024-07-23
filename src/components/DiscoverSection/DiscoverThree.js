import React, { Component } from 'react';
class DiscoverSection extends Component {
    state = {
        data: {
            "buttonText": "Learn More",
            "thumbFour": "/img/img/ebilim1.png"
        },
        serviceData: [
            {
                "id": 1,
                "iconClass": "fas fa-cart-arrow-down",
                "text": "Журнал оценок с учетом оценок студентов, созданием, печатью и экспортом ведомостей, выдачей и проверкой заданий, проведением тестов и поддержкой различных систем обучения."
            },
            {
                "id": 2,
                "iconClass": "fas fa-cart-arrow-down",
                "text": "Тестирование с созданием заданий, планированием и назначением, автоматической проверкой и внесением оценок, а также обеспечением прозрачности сдачи экзаменов."
            },
            {
                "id": 3,
                "iconClass": "fas fa-cart-arrow-down",
                "text": "Создание и управление учебными планами, группами, индивидуальными планами, кураторами и распределением дисциплин."
            },
            {
                "id": 4,
                "iconClass": "fas fa-cart-arrow-down",
                "text": "Расчет нагрузки для педагогов, включая индивидуальные и общие нагрузки, с учетом групп, дисциплин и кредитов, а также создание отчетов для кафедр и преподавателей."
            },
            {
                "id": 5,
                "iconClass": "fas fa-cart-arrow-down",
                "text": "Создание расписаний, учет вместимости аудиторий, формирование расписаний для сложных групп и автоматическая генерация отчетов."
            }
        ]
    }
    render() {
        return (
            <section className="section discover-area bg-gray overflow-hidden ptb_100">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-12 col-lg-6 order-2 order-lg-1">
                            {/* Discover Thumb */}
                            <div className="service-thumb discover-thumb mx-auto mt-4 mt-lg-0">
                                <img src={this.state.data.thumbFour} alt="" />
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 order-1 order-lg-2">
                            {/* Discover Text */}
                            <div className="discover-text pt-4 pt-lg-0 px-0 px-lg-4">
                                {/* Service List */}
                                <ul className="service-list style-two">
                                    {/* Single Service */}
                                    {this.state.serviceData.map((item, idx) => {
                                        return (
                                            <li key={`sf_${idx}`} className="single-service py-2">
                                                <div className="service-text">
                                                    <p>{item.text}</p>
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default DiscoverSection;