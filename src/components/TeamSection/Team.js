import React, { Component } from 'react';

class Team extends Component {
    state = {
        data: {
            "heading": "Наша команда",
            "headingText": "Мы гордимся нашей командой высококвалифицированных специалистов, которые работают над созданием инновационных решений и предоставлением высококачественных ИТ-услуг.",
            "headingTexttwo": "Мы гордимся нашей командой высококвалифицированных специалистов, которые работают над созданием инновационных решений и предоставлением высококачественных ИТ-услуг. "
        },
        teamData: [
            {
                "id": 1,
                "image": "/img/img/teamphoto1.jpg",
                "title": "Айзада Шабыралиева",
                "teamPost": "Основатель и генеральный директор",
                "socialLinks": {
                    "facebook": "https://www.facebook.com/asamaganbek",
                    "telegram": "https://twitter.com/ayzadas",
                    "googlePlus": "https://plus.google.com/ayzadas",
                    "linkedin": "https://linkedin.com/in/ayzadas"
                }
            },
            {
                "id": 2,
                "image": "/img/img/teamphoto2.jpg",
                "title": "Мээрим Алтынбекова",
                "teamPost": "Разработчик",
                "socialLinks": {
                    "facebook": "https://facebook.com/meerimal",
                    "telegram": "https://twitter.com/meerimal",
                    "googlePlus": "https://plus.google.com/meerimal",
                    "linkedin": "https://linkedin.com/in/meerimal"
                }
            },
            {
                "id": 3,
                "image": "/img/img/teamphoto3.png",
                "title": "Адиля Кадырбекова",
                "teamPost": "IT специалист",
                "socialLinks": {
                    "facebook": "https://facebook.com/adiliak",
                    "telegram": "https://twitter.com/adiliak",
                    "googlePlus": "https://plus.google.com/adiliak",
                    "linkedin": "https://linkedin.com/in/adiliak"
                }
            },
            {
                "id": 4,
                "image": "/img/img/teamphoto4.jpg",
                "title": "Каныкей Маткалык",
                "teamPost": "IT специалист",
                "socialLinks": {
                    "facebook": "https://facebook.com/kanikeym",
                    "telegram": "https://twitter.com/kanikeym",
                    "googlePlus": "https://plus.google.com/kanikeym",
                    "linkedin": "https://linkedin.com/in/kanikeym"
                }
            }
        ],
        teamIcons: [
            {
                "id": 1,
                "iconClass": "fab fa-facebook-f",
                "platform": "facebook"
            },
            {
                "id": 2,
                "iconClass": "fab fa-telegram",
                "platform": "telegram"
            },
            {
                "id": 3,
                "iconClass": "fab fa-google-plus-g",
                "platform": "googlePlus"
            },
            {
                "id": 4,
                "iconClass": "fab fa-linkedin-in",
                "platform": "linkedin"
            }
        ]
    }
    
    render() {
        return (
            <section className="section team-area team-style-two overflow-hidden ptb_100">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-6">
                        {/* Section Heading */}
                        <div className="section-heading text-center">
                        <h2 className="text-capitalize">{this.state.data.heading}</h2>
                        <p className="d-none d-sm-block mt-4">{this.state.data.headingText}</p>
                        <p className="d-block d-sm-none mt-4">{this.state.data.headingTexttwo}</p>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                        {this.state.teamData.map((item, idx) => {
                            return(
                                <div key={`t_${idx}`} className="col-12 col-sm-6 col-md-4 col-lg-3">
                                    {/* Single Team */}
                                    <div className="single-team text-center radius-100 overflow-hidden m-2 m-lg-0">
                                    {/* Team Thumb */}
                                    <div className="team-thumb radius-100 d-inline-block position-relative overflow-hidden">
                                        <img src={item.image} alt="" />
                                        {/* Team Overlay */}
                                        <div className="team-overlay radius-100">
                                        <h4 className="team-name text-white">{item.title}</h4>
                                        <h5 className="team-post text-white mt-2 mb-3">{item.teamPost}</h5>
                                        {/* Team Icons */}
                                        <div className="team-icons">
                                            {this.state.teamIcons.map((icon, idx) => {
                                                return(
                                                    <a key={`ti_${idx}`} className="p-2" href={item.socialLinks[icon.platform]} target="_blank" rel="noopener noreferrer">
                                                        <i className={icon.iconClass} />
                                                    </a>
                                                );
                                            })}
                                        </div>
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

export default Team;
