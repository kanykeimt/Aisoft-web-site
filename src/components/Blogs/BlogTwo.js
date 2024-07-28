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
                "image": "/img/univer-40.png",
                "title": "Современный международный университет (СМУ) "
            },
            {
                "id": 3,
                "image": "/img/univer-21.png",
                "title": "Бишкекский международный медицинский институт "
            },
            {
                "id": 4,
                "image": "/img/univer-28.png",
                "title": "Нарынский государственный университет имени Сатыбалди Нааматова"
            },
            {
                "id": 5,
                "image": "/img/univer-32.png",
                "title": "Военный Институт Вооруженных Сил КР имени Героя Советского Союза генерал-лейтенанта К.Усенбекова"
            },
            {
                "id": 6,
                "image": "/img/univer-27.png",
                "title": "	Каракольский педагогический колледж им. И. Бийбосунова"
            },
            {
                "id": 7,
                "image": "/img/univer-33.png",
                "title": "Чуйский университет"
            },
            {
                "id": 8,
                "image": "/img/univer-35.png",
                "title": "Royal Metropolitan Университет"
            },
            {
                "id": 9,
                "image": "/img/univer-36.png",
                "title": "Академия цифровых инноваций"
            },
            {
                "id": 10,
                "image": "/img/univer-2.png",
                "title": "Иссык-Кульский индустриально-педагогический колледж"
            },
            {
                "id": 11,
                "image": "/img/univer-18.png",
                "title": "Кыргызский государственный университет культуры и искусств им. Б. Бейшеналиевой"
            },
            {
                "id": 12,
                "image": "/img/univer-3.png",
                "title": "Азиатский медицинский институт им. С.Тентишева "
            },
            {
                "id": 13,
                "image": "/img/univer-5.png",
                "title": "Кыргызский экономический университет имени М.Рыскулбекова "
            },
            {
                "id": 14,
                "image": "/img/univer-6.png",
                "title": "Жалал-Абадский гуманитарный колледж (ЖАГК) "
            },
            {
                "id": 15,
                "image": "/img/univer-7.png",
                "title": "Учреждение «Салымбеков Университет» "
            },
            {
                "id": 16,
                "image": "/img/univer-8.png",
                "title": "Кыргызско-Германский Институт Прикладной Информатики (КГИПИ) "
            },
            {
                "id": 17,
                "image": "/img/univer-9.png",
                "title": "Академия МВД КР "
            },
            {
                "id": 18,
                "image": "/img/univer-10.png",
                "title": "КР Саламаттык сактоо министрлиги"
            },
            {
                "id": 19,
                "image": "/img/univer-11.png",
                "title": "Ошский государственный университет"
            },
            {
                "id": 20,
                "image": "/img/univer-34.png",
                "title": "Министерство образования и науки КР"
            },
            {
                "id": 21,
                "image": "/img/univer-12.png",
                "title": "Жалал-Абадский медицинский колледж (ЖАМК) "
            },
            {
                "id": 22,
                "image": "/img/univer-29.png",
                "title": "Бишкекский агроэкономический колледж имени С.Турсунова"
            },
            {
                "id": 23,
                "image": "/img/univer-30.png",
                "title": "Ошский гуманитарно-педагогический университет"
            },
            {
                "id": 24,
                "image": "/img/univer-31.jpeg",
                "title": "Ошский международный медицинский университет"
            },
            {
                "id": 25,
                "image": "/img/univer-13.png",
                "title": "Нарынский медицинский колледж"
            },
            {
                "id": 26,
                "image": "/img/univer-14.png",
                "title": "Центрально Азиатский международный медицинский университет"
            },
            {
                "id": 27,
                "image": "/img/univer-15.png",
                "title": "Майлуу-Сууйский медицинский колледж "
            },
            {
                "id": 28,
                "image": "/img/univer-16.png",
                "title": "Бишкекский финансово-экономический техникум имени А. Токтоналиева  "
            },
            {
                "id": 29,
                "image": "/img/univer-17.png",
                "title": "Технико-экономический колледж при КНАУ им. К.И. Скрябина"
            },
            {
                "id": 30,
                "image": "/img/univer-4.png",
                "title": "Бишкекский музыкально-педагогический колледж им. Т. Эрматова "
            },
            {
                "id": 31,
                "image": "/img/univer-19.png",
                "title": "Таш-кумырский региональный колледж"
            },
            {
                "id": 32,
                "image": "/img/univer-20.png",
                "title": "Евразийский Международный Университет "
            },
            {
                "id": 33,
                "image": "/img/univer-22.png",
                "title": "Агротехнического колледжа им.Султана Ибраимова КНАУ им.К.И.Скрябина"
            },
            {
                "id": 34,
                "image": "/img/univer-23.png",
                "title": "Центрально-Азиатский колледж "
            },
            {
                "id": 35,
                "image": "/img/univer-24.png",
                "title": 'Араванский "Дулдул Тоо" колледж'
            },
            {
                "id": 36,
                "image": "/img/univer-26.png",
                "title": "Кыргызская государственная академия физической культуры и спорта "
            },
            {
                "id": 37,
                "image": "/img/univer-36.png",
                "title": "Академия цифровых инноваций"
            },
            {
                "id": 38,
                "image": "/img/univer-37.png",
                "title": "Кыргызский Горно-Энерготехнологический Колледж"
            },
            {
                "id": 39,
                "image": "/img/univer-38.png",
                "title": "Республиканский колледж культуры и искусства имени Н.Давлесова"
            },
            {
                "id": 40,
                "image": "/img/univer-39.png",
                "title": "Институт экономики и финансов (ИЭФ) "
            }
        ]
    }
    render() {
        return (
            <div>
                <div className="row" >
                {this.state.blogData.map((item, idx) => {
                        return(
                            <div key={`bth_${idx}`} className="col-12 col-md-6 col-lg-3">
                                {/* Single Blog */}
                                <div className="single-blog res-margin">
                                    {/* Blog Thumb */}
                                    <div className="blog-thumb">
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
                                                height: 410px;
                                            }
                                            .blog-content {
                                                position: absolute;
                                                bottom: 20px;
                                                width: 100%;
                                            }
                                        }
                
                                    `}
                                    </style>
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
            </div>
        );
    }
}

export default Blog;