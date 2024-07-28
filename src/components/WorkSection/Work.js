import React, { Component } from 'react';

class Work extends Component {
    state = {
        data: {
            "heading": "Внедрение системы"
        },
        workData: [
            {
                "id": 1,
                "image": "/img/work_thumb_1.png",
                "title": "Установка программы",
                "content": "Установка программы на сервер учебного заведения согласно техническим требованиям и настройкам."
            },
            {
                "id": 2,
                "image": "/img/img/work_thumb_2.png",
                "title": "Обучение администратора",
                "content": "Проведение обучения администратора по системе. Выдача ключей и доступа для управления системой."
            },
            {
                "id": 3,
                "image": "/img/img/work_thumb_3.png",
                "title": "Выдача справочных материалов",
                "content": "Предоставление подробных инструкций, руководств и ресурсов для пользователей системы."
            },
            {
                "id": 4,
                "image": "/img/work_thumb_3.png",
                "title": "Техническая поддержка",
                "content": "Обеспечение технической поддержки пользователям при возникновении вопросов, проблем или запросов. "
            }
        ]
    }
   
    render() {
        return (
            <section className="section work-area bg-overlay overflow-hidden ptb_50">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-6">
                            {/* Work Content */}
                            <div className="work-content text-center">
                                <h2 className="text-white">{this.state.data.heading}</h2>
                                <p className="text-white my-3 mt-sm-4 mb-sm-5">{this.state.data.headingText}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {this.state.workData.map((item, idx) => {
                            return(
                                <div key={`w_${idx}`} className="col-12 col-md-3">
                                {/* Single Work */}
                                <div className="single-work text-center p-3">
                                    {/* Work Icon */}
                                    <div className="work-icon">
                                        <img className="avatar-md" src={item.image} alt="" />
                                    </div>
                                    <h3 className="text-white py-3">{item.title}</h3>
                                    <p className="text-white">{item.content}</p>
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

export default Work;