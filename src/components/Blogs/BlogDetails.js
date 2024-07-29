import React, { Component } from 'react';
import axios from 'axios';

const BASE_URL = "https://my-json-server.typicode.com/themeland/json-server-2/themeOneBlogDetails";

class BlogDetails extends Component {
    state = {
        data: {
            "title": "О компании",
            "image": "/img/aboutus.jpeg",
            "text_1": "Наша компания, основанная во время пандемии 2020 года, специализируется на разработке готовых IT-решений, которые помогают различным организациям адаптироваться к современным требованиям цифрового мира. За время своего существования мы успешно реализовали более пяти проектов, каждый из которых подтвердил нашу способность предоставлять высококачественные и эффективные решения. ",
            "text_3": "Одним из ключевых направлений нашей деятельности является создание цифровых помощников, которые позволяют руководителям и сотрудникам автоматизировать рутинные задачи и сосредоточиться на стратегически важных аспектах бизнеса. Мы гордимся тем, что наши решения способствуют росту и развитию наших клиентов, помогая им достигать новых высот в своей деятельности. ",
            "quoteText_1": "Мы предлагаем широкий спектр IT-решений для успешного функционирования учебных заведений, системы электронного документооборота, а также индивидуальную разработку. Наши разработки помогают оптимизировать процессы, улучшить взаимодействие с клиентами и обеспечить высокий уровень защиты данных. "
        },
        iconList: [
            {
                "id": 1,
                "icon": "bg-white facebook",
                "iconClass": "fab fa-facebook-f",
                "link": "https://www.facebook.com/ebilimsoft"
              },
              {
                "id": 2,
                "icon": "bg-white twitter",
                "iconClass": "fab fa-instagram",
                "link": "https://www.instagram.com/aisoft.kg/"
              },
              {
                "id": 3,
                "icon": "bg-white google-plus",
                "iconClass": "fab fa-youtube",
                "link": "https://www.youtube.com/@e-Bilim"
              }
        ]
    }
    render() {
        return (
            <div>
                {/* Single Blog Details */}
                <article className="single-blog-details">
                    {/* Blog Thumb */}
                    <div className="blog-thumb">
                    <style>
                                        {`
                @media (min-width: 991px) {
    .blog-thumb {
        width: 50%;
        margin: 0 auto;
    }
}

                
            `}
            </style>
                        <img src={this.state.data.image} alt="" />
                    </div>
                    {/* Blog Content */}
                    <div className="blog-content sApp-blog">
                        {/* Meta Info */}
                        <div className="meta-info d-flex flex-wrap align-items-center py-2">
                            {/* Blog Share */}
                            <div className="blog-share ml-auto d-none d-sm-block">
                                {/* Social Icons */}
                                <div className="social-icons d-flex justify-content-center">
                                    {this.state.iconList.map((item, idx) => {
                                        return (
                                            <a key={`bdi_${idx}`} className={item.icon} href={item.link}>
                                                <i className={item.iconClass} />
                                                <i className={item.iconClass} />
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                        {/* Blog Details */}
                        <div className="blog-details">
                            <h3 className="blog-title py-3"><a href="/#">{this.state.data.title}</a></h3>
                            <p className="d-sm-block">{this.state.data.text_1}</p>
                            <blockquote className="blockquote px-4 py-3 my-3 ml-4">
                                <p className="d-sm-block">{this.state.data.quoteText_1}</p>
                            </blockquote>
                            <p className="d-sm-block">{this.state.data.text_3}</p>
                        </div>
                    </div>
                </article>
            </div>
        );
    }
}

export default BlogDetails;