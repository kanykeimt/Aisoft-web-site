import React, { Component } from 'react';

class Blog extends Component {
    state = {
        data: {},
        blogData: [
            {
                "id": 1,
                "image": "/img/img/aidocPos1.png",
                "title": "Активные документы",
                "content": "Статистика в различных временных форматах: <br /> - в процентном формате % <br /> - в цифровом формате <br /> -  в форме диаграммы"
              },
              {
                "id": 2,
                "image": "/img/img/aidocPos2.png",
                "title": "Процесс планирования маршрута пользователей",
                "content": "Распределение уполномочий; <br /> Распределение пользователей; <br /> Установление порядка маршрута;"
              },
              {
                "id": 3,
                "image": "/img/img/aidocPos3.png",
                "title": "Формирование документов по типам",
                "content": "Пошаговая обработка документов по указанному маршруту <br /> - Ручное создание документа <br /> - Создание документа по шаблону"
              },
              {
                "id": 4,
                "image": "/img/img/aidocPos4.png",
                "title": "Создание внутреннего документа",
                "content": "Выбор вида документа, конфигурирование параметров даты, темы, содержания; <br /> Назначение уполномочий каждого пользователя в соответствии с их ролями и обязанностями;"
              },
              {
                "id": 5,
                "image": "/img/img/aidocPos5.png",
                "title": "Документ в процессе обработки",
                "content": "- Формирование документов; <br /> - Поэтапное прохождение документа по указанному маршруту; <br /> - Статусы согласования, утверждения;"
              },
              {
                "id": 6,
                "image": "/img/img/aidocPos6.png",
                "title": "Создание документа по шаблону",
                "content": "Пошаговое создание документа по шаблону"
              },
              {
                "id": 7,
                "image": "/img/blog-7.jpg",
                "title": "How to grow up your business",
                "content": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution."
              },
              {
                "id": 8,
                "image": "/img/blog-8.jpg",
                "title": "Planing to manage your clients?",
                "content": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor."
              },
              {
                "id": 9,
                "image": "/img/blog-9.jpg",
                "title": "Make your successful business with sApp",
                "content": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly."
              }
        ]
    }
    
    render() {
        return (
            <div>
                <div className="row">
                    {this.state.blogData.map((item, idx) => {
                        return(
                            <div key={`bt_${idx}`} className="col-12 col-md-6">
                                {/* Single Blog */}
                                <div className="single-blog res-margin">
                                    {/* Blog Thumb */}
                                    <div className="blog-thumb">
                                    <img src={item.image} alt="" />
                                    </div>
                                    {/* Blog Content */}
                                    <div className="blog-content p-4">
                                        {/* Blog Title */}
                                        <h3 className="blog-title my-3">{item.title}</h3>
                                        <p dangerouslySetInnerHTML={{ __html: item.content }}></p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="row">
                    <div className="col-12">
                        {/* Pagination */}
                        <ul className="pagination justify-content-center py-4">
                            <li className="disabled px-1">
                                <a href="/#" aria-label="Previous">
                                <i className="fas fa-arrow-left" />
                                </a>
                            </li>
                            <li className="px-1"><a href="/#">1</a></li>
                            <li className="active px-1"><a href="/#">2</a></li>
                            <li className="px-1"><a href="/#">3</a></li>
                            <li>
                                <a href="/#" aria-label="Next">
                                <i className="fas fa-arrow-right" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Blog;