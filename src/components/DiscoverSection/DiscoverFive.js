import React, { Component } from 'react';
class DiscoverSection extends Component {
    state = {
        data: {
            "heading": "Преимущества AiTest ",
            "headingText": "AiTest предоставляет образовательным учреждениям и организациям мощный инструмент для проведения тестирования и оценки знаний. Система облегчает процесс проверки, обеспечивает высокую точность оценки и предоставляет ценную аналитику для повышения качества образования. ",
            "thumbOne": "/img/img/aitest-4.png"
        },
        discoverData: [
            {
                "id": 1,
                "iconClass": "fas fa-check",
                "text": "Удобство использования: Простой и интуитивно понятный интерфейс позволяет легко создавать и управлять тестами. "
            },
            {
                "id": 2,
                "iconClass": "fas fa-check",
                "text": "Гибкость: Система поддерживает различные виды тестов и адаптируется под потребности образовательного учреждения или организации. "
            },
            {
                "id": 3,
                "iconClass": "fas fa-check",
                "text": "Эффективность: Автоматизация процесса тестирования и проверки экономит время преподавателей и повышает точность оценки. "
            },
            {
                "id": 4,
                "iconClass": "fas fa-check",
                "text": "Масштабируемость: AiTest подходит как для небольших учебных курсов, так и для крупных образовательных программ с большим количеством студентов. "
            },
            {
                "id": 5,
                "iconClass": "fas fa-check",
                "text": "Интеграция: Возможность интеграции с другими образовательными платформами и системами управления обучением. "
            },
            {
                "id": 6,
                "iconClass": "fas fa-check",
                "text": "Поддержка и обновления: Регулярные обновления системы и техническая поддержка обеспечивают стабильную и безопасную работу. "
            }
        ]
    }
    render() {
        return (
            <section className="section discover-area bg-gray overflow-hidden ptb_50">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-12 col-lg-6 order-2 order-lg-1">
                            {/* Discover Thumb */}
                            <div className="service-thumb discover-thumb mx-auto pt-5 pt-lg-0">
                                <img src={this.state.data.thumbOne} alt="" />
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 order-1 order-lg-2">
                            {/* Discover Text */}
                            <div className="discover-text pt-4 pt-lg-0">
                                <h2 className="pb-4 pb-sm-0">{this.state.data.heading}</h2>
                                {/* Check List */}
                                <ul className="check-list">
                                    {this.state.discoverData.map((item, idx) => {
                                        return (
                                            <div key={`do_${idx}`}>
                                                <li className="py-2">
                                                    {/* List Box */}
                                                    <div className="list-box media">
                                                        <span className="icon align-self-center"><i className={item.iconClass} /></span>
                                                        <span className="media-body pl-2">{item.text}</span>
                                                    </div>
                                                </li>
                                            </div>
                                        );
                                    })}
                                </ul>
                                <p className="d-none d-sm-block pt-3 pb-4">{this.state.data.headingText}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default DiscoverSection;