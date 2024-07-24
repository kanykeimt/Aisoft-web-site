import React, { Component } from 'react';
class Blog extends Component {
    state = {
        data: {},
        blogData: [
            {
                "id": 1,
                "image": "/img/univer-21.png",
                "title": "Бишкекский международный медицинский институт "
            },
            {
                "id": 2,
                "image": "/img/univer-22.png",
                "title": "Агротехнического колледжа им.Султана Ибраимова КНАУ им.К.И.Скрябина"
            },
            {
                "id": 3,
                "image": "/img/univer-23.png",
                "title": "Центрально-Азиатский колледж "
            },
            {
                "id": 4,
                "image": "/img/univer-24.png",
                "title": 'Араванский "Дулдул Тоо" колледж'
            },
            {
                "id": 5,
                "image": "/img/univer-25.png",
                "title": "Кочкор-Атинский колледж Жалал-Абадского государственного университета"
            },
            {
                "id": 6,
                "image": "/img/univer-26.png",
                "title": "Кыргызская государственная академия физической культуры и спорта "
            },
            {
                "id": 7,
                "image": "/img/univer-27.png",
                "title": "	Каракольский педагогический колледж им. И. Бийбосунова"
            },
            {
                "id": 8,
                "image": "/img/univer-28.png",
                "title": "Нарынский государственный университет имени Сатыбалди Нааматова"
            },
            {
                "id": 9,
                "image": "/img/univer-29.png",
                "title": "Бишкекский агроэкономический колледж имени С.Турсунова"
            },
            {
                "id": 10,
                "image": "/img/univer-30.png",
                "title": "Кыргызский медико-социальный колледж «Уникум» "
            },
            {
                "id": 11,
                "image": "/img/univer-31.png",
                "title": "Кара-Балтинский государственный медицинский колледж"
            },
            {
                "id": 12,
                "image": "/img/univer-32.png",
                "title": "Военный Институт Вооруженных Сил КР имени Героя Советского Союза генерал-лейтенанта К.Усенбекова"
            },
            {
                "id": 13,
                "image": "/img/univer-33.png",
                "title": "Чуйский университет"
            },
            {
                "id": 14,
                "image": "/img/univer-34.png",
                "title": "Жалал-Абадский Техникум культуры"
            },
            {
                "id": 15,
                "image": "/img/univer-35.png",
                "title": "Royal Metropolitan Университет"
            },
            {
                "id": 16,
                "image": "/img/univer-36.png",
                "title": "Академия цифровых инноваций"
            },
            {
                "id": 17,
                "image": "/img/univer-37.png",
                "title": "Кыргызский Горно-Энерготехнологический Колледж"
            },
            {
                "id": 18,
                "image": "/img/univer-38.png",
                "title": "Республиканский колледж культуры и искусства имени Н.Давлесова"
            },
            {
                "id": 19,
                "image": "/img/univer-39.png",
                "title": "Институт экономики и финансов (ИЭФ) "
            },
            {
                "id": 20,
                "image": "/img/univer-40.png",
                "title": "Современный международный университет (СМУ) "
            }
        ]
    }
    render() {
        return (
            <div>
                <div className="row">
                    {this.state.blogData.map((item, idx) => {
                        return(
                            <div key={`bth_${idx}`} className="col-12 col-md-6 col-lg-3">
                                {/* Single Blog */}
                                <div className="single-blog res-margin">
                                    {/* Blog Thumb */}
                                    <div className="blog-thumb">
                                    <img src={item.image} alt="" />
                                    </div>
                                    {/* Blog Content */}
                                    <div className="blog-content p-4">
                                        {/* Blog Title */}
                                        <h5 className="blog-title my-3">{item.title}</h5>
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
                                <a href="/clients" aria-label="Previous">
                                <i className="fas fa-arrow-left" />
                                </a>
                            </li>
                            <li>
                                <a href="/clients-2" aria-label="Next">
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