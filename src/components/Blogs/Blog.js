import React, { Component } from 'react';

class Blog extends Component {
    state = {
        data: {},
        blogData: [
            {
                "id": 1,
                "image": "/img/img/aidocPos1.png",
                "title": "Статистика в различных временных форматах:    ",
                "content": "- в процентном формате % <br /> - в цифровом формате <br /> -  в форме диаграммы"
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
                "content": "Пошаговое создание документа по шаблону."
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
                
            </div>
        );
    }
}

export default Blog;