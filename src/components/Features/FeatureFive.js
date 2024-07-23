import React, { Component } from 'react';

const initData = {
    heading: "Основные характеристики системы"
}

const data = [
    {
        image: "/img/featured_image_1.png",
        title: "Создание тестов",
        content: "Возможность создания различных типов вопросов: множественный выбор, верно/неверно, открытые вопросы, эссе, практические задания. Настройка уровней сложности вопросов и адаптивных тестов. Поддержка мультимедийных вопросов с использованием изображений, аудио и видео."
    },
    {
        image: "/img/img/featured_image_2.png",
        title: "Управление тестами ",
        content: "Планирование и расписание тестов. Назначение тестов студентам или группам студентов. Ограничение по времени на выполнение теста. Управление доступом и автоматическое распределение тестов в зависимости от расписания и группы студентов."
    },
    {
        image: "/img/img/featured_image_6.png",
        title: "Автоматическая проверка ",
        content: "Мгновенная проверка и выставление оценок для вопросов с автоматической проверкой. Возможность настройки индивидуальных правил оценки. Интеграция с системами управления обучением (LMS) для автоматической записи результатов. "
    },
    {
        image: "/img/featured_image_4.png",
        title: "Поддержка разных форматов тестирования ",
        content: "Онлайн-тестирование с доступом через веб-интерфейс. Поддержка мобильного тестирования через приложение."
    },
    {
        image: "/img/img/featured_image_5.png",
        title: "Аналитика и отчеты ",
        content: "Подробные отчеты о результатах тестирования на индивидуальном и групповом уровне. Анализ успеваемости по отдельным темам и вопросам. Инструменты для мониторинга и прогнозирования успеваемости. "
    },
    {
        image: "/img/featured_image_3.png",
        title: "Безопасность и защита данных ",
        content: "Защита данных студентов и результатов тестирования. Логирование всех действий и событий для аудита. "
    }
]

class FeatureSection extends Component {
    state = {
        initData: {},
        data: []
    }
    componentDidMount(){
        this.setState({
            initData: initData,
            data: data
        })
    }
    render() {
        return (
            <section id="features" className="section features-area style-two overflow-hidden ptb_100">
                <div className="container">
                    <div className="row">
                    <div className="col-12 col-md-10 col-lg-10">
                        {/* Section Heading */}
                        <div className="section-heading">
                        <h2>{this.state.initData.heading}</h2>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                        {this.state.data.map((item, idx) => {
                            return(
                                <div key={`ffd_${idx}`} className="col-12 col-md-6 col-lg-4 my-3 res-margin">
                                    {/* Image Box */}
                                    <div className="image-box text-center icon-1 p-5">
                                    {/* Featured Image */}
                                    <div className="featured-img mb-3">
                                        <img className="avatar-sm" src={item.image} alt="" />
                                    </div>
                                    {/* Icon Text */}
                                    <div className="icon-text">
                                        <h3 className="mb-2">{item.title}</h3>
                                        <p>{item.content}</p>
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