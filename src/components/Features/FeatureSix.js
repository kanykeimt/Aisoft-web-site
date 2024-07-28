import React, { Component } from 'react';

class FeatureSection extends Component {
    state = {
        data: {
            "headingFour": "Преимущества AiDoc",
            "featureThumb": "/img/features_thumb.png"
        },
        featureDataTwo: [
            {
                "id": 1,
                "iconClass": "flaticon-tap",
                "title": "Удобство использования",
                "text": "Интуитивно понятный интерфейс позволяет быстро освоить систему и начать работу."
            },
            {
                "id": 2,
                "iconClass": "flaticon-fingerprint",
                "title": "Гибкость",
                "text": "Система легко настраивается под специфические потребности и процессы организации. "
            },
            {
                "id": 3,
                "iconClass": "flaticon-notification",
                "title": "Эффективность",
                "text": "Автоматизация рутинных задач освобождает время сотрудников для более важных и творческих задач."
            },
            {
                "id": 4,
                "iconClass": "flaticon-place",
                "title": "Масштабируемость",
                "text": "AiDoc подходит как для небольших компаний, так и для крупных предприятий с большим объемом документов."
            },
            {
                "id": 5,
                "iconClass": "flaticon-settings",
                "title": "Надежность",
                "text": "Высокий уровень безопасности и защиты данных обеспечивает надежное хранение и доступ к документам."
            },
            {
                "id": 6,
                "iconClass": "flaticon-language",
                "title": "Поддержка и обновления",
                "text": "Регулярные обновления системы и техническая поддержка обеспечивают стабильную и безопасную работу."
            }
        ]
    }

    render() {
        return (
            <section id="features" className="section features-area bg-gray ptb_50">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-6">
                            {/* Section Heading */}
                            <div className="section-heading text-center">
                                <h2>{this.state.data.headingFour}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {this.state.featureDataTwo.map((item, idx) => {
                            return (
                            <div key={`ft_${idx}`} className="col-12 col-md-6 col-lg-4">
                                {/* Icon Box */}
                                <div className="icon-box text-center p-4">
                                {/* Featured Icon */}
                                <div className="featured-icon mb-3">
                                    <span className={item.iconClass} />
                                </div>
                                {/* Icon Text */}
                                <div className="icon-text">
                                    <h3 className="mb-2">{item.title}</h3>
                                    <p>{item.text}</p>
                                </div>
                                </div>
                            </div>
                        );
                    })}
                    </div>
                </div>
            </section>
        );
    }
}

export default FeatureSection;