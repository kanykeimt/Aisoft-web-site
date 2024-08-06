import React, { Component } from 'react';


class   DownloadPage extends Component {
    state = {
        initData: {
            heading: "Оптимизируйте образовательный процесс с мобильным приложением EBILIM ",
            content: "Для преподавателей:",
            content2: "Для студентов:",
            image: "/img/6_5_Display-1.png"
        },
        serviceData: [
            {
                "id": 1,
                "iconClass": "fab fa-buffer",
                "text": "Просмотр актуального расписания и изменений в реальном времени"
            },
            {
                "id": 2,
                "iconClass": "fas fa-brush",
                "text": "Анализ данных посещаемости для повышения дисциплины"
            },
            {
                "id": 3,
                "iconClass": "fas fa-burn",
                "text": "Актуальное расписание занятий, экзаменов и мероприятий"
            },
            {
                "id": 4,
                "iconClass": "fas fa-burn",
                "text": "Лента новостей и уведомления о новых публикациях"
            }
        ],
        serviceData2: [
            {
                "id": 1,
                "iconClass": "fab fa-buffer",
                "text": "Сканирование QR-кода для отметки на занятиях"
            },
            {
                "id": 2,
                "iconClass": "fas fa-brush",
                "text": "Анализ успеваемости по предметам"
            },
            {
                "id": 3,
                "iconClass": "fas fa-burn",
                "text": "Информация о рейтинге среди одногруппников"
            },
            {
                "id": 4,
                "iconClass": "fas fa-brush",
                "text": "Актуальное расписание занятий, экзаменов и мероприятий"
            },
            {
                "id": 5,
                "iconClass": "fas fa-burn",
                "text": "Лента новостей и уведомления о заданиях и тестах"
            }
        ]
    }
    render() {
        return (
            <section id="home" className="section welcome-area2 inner-area bg-overlay overflow-hidden">
                        <div className="container h-100">
                            <div className="row align-items-center h-100">
                                {/* Welcome Intro Start */}
                                <div className="col-12 col-md-7">
                                    <div className="welcome-intro">
                                        <h2 className="text-white">{this.state.initData.heading}</h2>
                                        <h5 className="text-white mt-2">{this.state.initData.content} </h5>
                                        {/* Service List */}
                                        <ul className="service-list style-two">
                                            {/* Single Service */}
                                            {this.state.serviceData.map((item, idx) => {
                                                return (
                                                    <li key={`sth_${idx}`} className="single-service py-1 text-white">
                                                        <div className="service-text ">
                                                            <p className="text-white">{item.text}</p>
                                                        </div>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                        <h5 className="text-white mt-2">{this.state.initData.content2}</h5>
                                        {/* Service List */}
                                        <ul className="service-list style-two">
                                            {/* Single Service */}
                                            {this.state.serviceData2.map((item, idx) => {
                                                return (
                                                    <li key={`sth_${idx}`} className="single-service py-1 text-white">
                                                        <div className="service-text ">
                                                            <p className="text-white">{item.text}</p>
                                                        </div>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-12 col-md-5">
                                    <img src={this.state.initData.image} alt="" />
                                </div>
                            </div>
                        </div>
                    </section>
        );
    }
}

export default DownloadPage;