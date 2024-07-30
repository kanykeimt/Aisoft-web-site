import React, { Component } from 'react';

const initData = {
    heading: "Что говорят наши клиенты?",
    headingText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.",
    headingTexttwo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati."
}

const data = [
    // {
    //     id: "1",
    //     avatorImg: "/img/univer-9.png",
    //     reviewer: "Академия МВД КР",
    //     post: "",
    //     text: "Основные преимущества EBILIM - её гибкость и адаптируемость. Команда поддержки всегда готова помочь в добавлении новых функций и настройке системы в соответствии с нашими специфическими требованиями, что делает её ещё более ценным инструментом для нашей академии. ",
    //     comments: "",
    //     quotIcon: "/img/quote.png",
    //     icon_1: "fas fa-star text-warning",
    //     icon_2: "fas fa-star text-warning",
    //     icon_3: "fas fa-star text-warning",
    //     icon_4: "fas fa-star text-warning",
    //     icon_5: "fas fa-star text-warning"
    // },
    // {
    //     id: "2",
    //     avatorImg: "/img/univer-14.png",
    //     reviewer: "Центрально Азиатский международный медицинский университет",
    //     post: "",
    //     text: "Переход на систему EBILIM стал важным шагом в модернизации учебного процесса в нашем университете. Эта система существенно упростила и автоматизировала выполнение множества задач, таких как составление учебных планов, формирование ведомостей, печать отчетов, отслеживание успеваемости студентов и управление расписанием. Благодаря этому, наша работа стала более оперативной, а вероятность ошибок, связанных с ручным вводом данных, значительно снизилась.",
    //     comments: "",
    //     quotIcon: "/img/quote.png",
    //     icon_1: "fas fa-star text-warning",
    //     icon_2: "fas fa-star text-warning",
    //     icon_3: "fas fa-star text-warning",
    //     icon_4: "fas fa-star text-warning",
    //     icon_5: "fas fa-star text-warning"
    // },
    // {
    //     id: "3",
    //     avatorImg: "/img/univer-7.png",
    //     reviewer: "Учреждение «Салымбеков Университет»",
    //     post: "",
    //     text: "Ежедневно система автоматизирует учебный процесс в нашем учреждении, решая рутинные задачи, такие как расчет часов, формирование расписания, ведение электронных журналов. Все эти функции заметно упрощают работу сотрудников. Администрация, преподаватели и студенты могут взаимодействовать и получать доступ к нужной информации с любых устройств и в любое время. ",
    //     comments: "",
    //     quotIcon: "/img/quote.png",
    //     icon_1: "fas fa-star text-warning",
    //     icon_2: "fas fa-star text-warning",
    //     icon_3: "fas fa-star text-warning",
    //     icon_4: "fas fa-star text-warning",
    //     icon_5: "fas fa-star text-warning"
    // },
    {
        id: "4",
        avatorImg: "/img/review.jpg",
        reviewer: "Центр независимой оценки компетенций",
        post: "",
        text: "Разработчики платформы для проведения онлайн тестирования – Ai-test  очень подвижная и динамичная команда которая быстро реагирует на новые вызовы и запросы.  Наша организация пользуется платформой уже более 4-х лет и в течение такого длительного времени у нас остается только положительное впечатление о платформе онлайн тестирования Aitest. ",
        comments: "",
        quotIcon: "/img/quote.png",
        icon_1: "fas fa-star text-warning",
        icon_2: "fas fa-star text-warning",
        icon_3: "fas fa-star text-warning",
        icon_4: "fas fa-star text-warning",
        icon_5: "fas fa-star text-warning"
    }
]

class ReviewSection extends Component {
    state = {
        initData: {},
        data: [],
        showFullText: {} // Initialize state to manage full text visibility
    }

    componentDidMount() {
        this.setState({
            initData: initData,
            data: data
        });
    }

    // Method to toggle text visibility
    toggleText = (id) => {
        this.setState((prevState) => ({
            showFullText: {
                ...prevState.showFullText,
                [id]: !prevState.showFullText[id]
            }
        }));
    }

    render() {
        return (
            <section id="review" className="review-area ptb_100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-8">
                            {/* Section Heading */}
                            <div className="section-heading text-center">
                                <h2 className="text-capitalize">{this.state.initData.heading}</h2>
                                {/* <p className="d-none d-sm-block mt-4">{this.state.initData.headingText}</p>
                                <p className="d-block d-sm-none mt-4">{this.state.initData.headingTexttwo}</p> */}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {this.state.data.map((item, idx) => {
                            const isFullTextVisible = this.state.showFullText[item.id];
                            const truncatedText = item.text.substring(0, 130);

                            return (
                                <div key={`ro_${idx}`} className="col-12 col-md-6 col-lg-4 res-margin">
                                    {/* Single Review */}
                                    <div className="single-review card">
                                        {/* Card Top */}
                                        <div className="card-top p-4">
                                            <div className="review-icon">
                                                <i className={item.icon_1} />
                                                <i className={item.icon_2} />
                                                <i className={item.icon_3} />
                                                <i className={item.icon_4} />
                                                <i className={item.icon_5} />
                                            </div>
                                            <h4 className="text-primary mt-4 mb-3">{item.comments}</h4>
                                            {/* Review Text */}
                                            <div className="review-text" onClick={() => this.toggleText(item.id)}>
                                                <p>{isFullTextVisible ? item.text : truncatedText}<span className="blue-ellipsis" style={{color: 'blue'}}>{!isFullTextVisible && '[...]'}</span></p>
                                            </div>
                                            {/* Quotation Icon */}
                                            <div className="quot-icon">
                                                <img className="avatar-md" src={item.quotIcon} alt="" />
                                            </div>
                                        </div>
                                        {/* Reviewer */}
                                        <div className="reviewer media bg-gray p-4">
                                            {/* Reviewer Thumb */}
                                            <div className="reviewer-thumb">
                                                <img className="avatar-lg radius-100" src={item.avatorImg} alt="" />
                                            </div>
                                            {/* Reviewer Media */}
                                            <div className="reviewer-meta media-body align-self-center ml-4">
                                                <h5 className="reviewer-name color-primary mb-2">{item.reviewer}</h5>
                                                <h6 className="text-secondary fw-6">{item.post}</h6>
                                            </div>
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

export default ReviewSection;
