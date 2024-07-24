import React, { Component } from 'react';
class Blog extends Component {
    state = {
        data: {},
        blogData: [
            {
                "id": 1,
                "image": "/img/univer-1.png",
                "title": "Талаский государственний университет"
            },
            {
                "id": 2,
                "image": "/img/univer-2.png",
                "title": "Институт современных образовательных технологий в образовании"
            },
            {
                "id": 3,
                "image": "/img/univer-3.png",
                "title": "Азиатский медицинский институт им. С.Тентишева "
            },
            {
                "id": 4,
                "image": "/img/univer-4.png",
                "title": "Бишкекский музыкально-педагогический колледж им. Т. Эрматова "
            },
            {
                "id": 5,
                "image": "/img/univer-5.png",
                "title": "Кыргызский экономический университет имени М.Рыскулбекова "
            },
            {
                "id": 6,
                "image": "/img/univer-6.png",
                "title": "Жалал-Абадский гуманитарный колледж (ЖАГК) "
            },
            {
                "id": 7,
                "image": "/img/univer-7.png",
                "title": "Учреждение «Салымбеков Университет» "
            },
            {
                "id": 8,
                "image": "/img/univer-8.png",
                "title": "Кыргызско-Германский Институт Прикладной Информатики (КГИПИ) "
            },
            {
                "id": 9,
                "image": "/img/univer-9.png",
                "title": "Академия МВД КР "
            },
            {
                "id": 10,
                "image": "/img/univer-10.png",
                "title": "КР Саламаттык сактоо министрлиги"
            },
            {
                "id": 11,
                "image": "/img/univer-11.svg",
                "title": "Ошский государственный университет"
            },
            {
                "id": 12,
                "image": "/img/univer-12.png",
                "title": "Жалал-Абадский медицинский колледж (ЖАМК) "
            },
            {
                "id": 13,
                "image": "/img/univer-13.png",
                "title": "Нарынский медицинский колледж"
            },
            {
                "id": 14,
                "image": "/img/univer-14.png",
                "title": "Научно-исследовательский медико-социальный институт"
            },
            {
                "id": 15,
                "image": "/img/univer-15.png",
                "title": "Майлуу-Сууйский медицинский колледж "
            },
            {
                "id": 16,
                "image": "/img/univer-16.png",
                "title": "Бишкекский финансово-экономический техникум имени А. Токтоналиева  "
            },
            {
                "id": 17,
                "image": "/img/univer-17.png",
                "title": "Технико-экономический колледж при КНАУ им. К.И. Скрябина"
            },
            {
                "id": 18,
                "image": "/img/univer-18.png",
                "title": "Академия труда и социальных отношений"
            },
            {
                "id": 19,
                "image": "/img/univer-19.png",
                "title": "Таш-кумырский региональный колледж"
            },
            {
                "id": 20,
                "image": "/img/univer-20.png",
                "title": "Евразийский Международный Университет "
            }
        ]
    }
    render() {
        return (
            <div>
                <div className="row" style={{ display: 'flex' }}>
                    {this.state.blogData.map((item, idx) => {
                        return (
                            <div key={`bth_${idx}`} className="col-12 col-md-6 col-lg-3">
                                {/* Single Blog */}
                                <div className="single-blog res-margin">
                                    <style>
                                        {`
                @media (min-width: 991px) {
                    .single-blog {
                        height: 360px;
                    }
                    .blog-content {
                        position: absolute;
                        bottom: 20px;
                        width: 100%;
                    }
                }
                @media (min-width: 768px) and (max-width: 990.9px) {
                    .single-blog {
                        height: 450px;
                    }
                    .blog-content {
                        position: absolute;
                        bottom: 20px;
                        width: 100%;
                    }
                }
                
            `}
                                    </style>
                                    {/* Blog Thumb */}
                                    <div className="blog-thumb">
                                        <img src={item.image} alt="" />
                                    </div>
                                </div>
                                {/* Blog Content */}
                                <div className="blog-content p-4">
                                    {/* Blog Title */}
                                    <h5 className="blog-title my-3">{item.title}</h5>
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