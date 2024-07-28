import React, { Component } from 'react';
class FeatureSection extends Component {
    state = {
        data: {
            "preHeading": "Premium",
            "preHeadingspan": "Features",
            "headingThree": "Преимущества",
            "featureThumb": "/img/img/6_5_Display-2.png"
        },
        featureData: [
            {
                "id": 1,
                "image": "/img/featured_image_1.png",
                "title": "Удобство использования ",
                "text": "Интуитивно понятный интерфейс позволяет быстро освоить систему и начать работу."
            },
            {
                "id": 2,
                "image": "/img/featured_image_2.png",
                "title": "Гибкость ",
                "text": "Система легко адаптируется под потребности конкретного учебного заведения или организации. "
            },
            {
                "id": 3,
                "image": "/img/img/ebilimAdv1.png",
                "title": "Эффективность ",
                "text": "Автоматизация рутинных задач освобождает время преподавателей для более творческой и продуктивной работы. "
            },
            {
                "id": 4,
                "image": "/img/featured_image_3.png",
                "title": "Масштабируемость ",
                "text": "EBILIM подходит как для небольших учебных заведений, так и для крупных образовательных программ."
            }
        ],
        featureData_1: [
            {
                "id": 1,
                "image": "/img/img/ebilimAdv2.png",
                "title": "Поддержка и безопасность ",
                "text": "Регулярные обновления и техническая поддержка обеспечивают стабильную и безопасную работу системы."
            },
            {
                "id": 2,
                "image": "/img/featured_image_4.png",
                "title": "Интеграция ",
                "text": "Возможность интеграции с другими образовательными платформами и системами управления обучением"
            },
            {
                "id": 3,
                "image": "/img/featured_image_6.png",
                "title": "Доступность ",
                "text": "Не требует установки дополнительных программ и обеспечивает доступ с любой точки мира. "
            },
            {
                "id": 4,
                "image": "/img/img/ebilimAdv3.png",
                "title": "Аналитика и отчеты ",
                "text": "Имеет расширенные инструменты для анализа данных и создания отчетов, что позволяет эффективно отслеживать прогресс студентов и оценивать результативность учебных программ. "
            }
        ]
    }
    render() {
        return (
            <section id="features" className="section features-area overflow-hidden ptb_50">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-6">
                            {/* Section Heading */}
                            <div className="section-heading text-center">
                                <h2>{this.state.data.headingThree}</h2>
                                <p className="d-none d-sm-block mt-4">{this.state.data.headingText}</p>
                                <p className="d-block d-sm-none mt-4">{this.state.data.headingTexttwo}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-12 col-md-6 col-lg-4">
                            {/* Features Item */}
                            <ul className="features-item">
                                {this.state.featureData.map((item, idx) => {
                                    return (
                                        <li key={`fth_${idx}`}>
                                            {/* Image Box */}
                                            <div className="image-box media px-1 py-3 py-md-4">
                                                {/* Featured Image */}
                                                <div className="featured-img mr-3">
                                                    <img className="avatar-sm" src={item.image} alt="" />
                                                </div>
                                                {/* Icon Text */}
                                                <div className="icon-text media-body align-self-center align-self-md-start">
                                                    <h3 className="mb-2">{item.title}</h3>
                                                    <p>{item.text}</p>
                                                </div>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div className="col-12 col-lg-4 d-none d-lg-block">
                            {/* Featutes Thumb */}
                            <div className="features-thumb text-center">
                                <img src={this.state.data.featureThumb} alt="" />
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            {/* Features Item */}
                            <ul className="features-item">
                                {this.state.featureData_1.map((item, idx) => {
                                    return (
                                        <li key={`ftho_${idx}`}>
                                            {/* Image Box */}
                                            <div className="image-box media px-1 py-3 py-md-4">
                                                {/* Featured Image */}
                                                <div className="featured-img mr-3">
                                                    <img className="avatar-sm" src={item.image} alt="" />
                                                </div>
                                                {/* Icon Text */}
                                                <div className="icon-text media-body align-self-center align-self-md-start">
                                                    <h3 className="mb-2">{item.title}</h3>
                                                    <p>{item.text}</p>
                                                </div>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default FeatureSection;