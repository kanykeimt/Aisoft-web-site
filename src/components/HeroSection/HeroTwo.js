import React, { Component } from 'react';

const initData = {
    heading: "AiDoc - комплексное решение и преобразование вашего учебного заведения",
    content: "Информационная система управления документооборотом для организаций и учебных заведений.",
    btnText: "Get Started",
    heroThumb: "/img/img/aidoc1.png"
}

class HeroSection extends Component {
    state = {
        data: {}
    }
    componentDidMount(){
        this.setState({
            data: initData
        })
    }
    render() {
        return (
            <section id="home" className="section welcome-area bg-inherit h-100vh overflow-hidden">
                <div className="shapes-container">
                    <div className="bg-shape" />
                </div>
                <div className="container h-100">
                    <div className="row align-items-center h-100">
                    {/* Welcome Intro Start */}
                    <div className="col-12 col-md-7">
                        <div className="welcome-intro">
                        <h1>{this.state.data.heading}</h1>
                        <p className="my-4">{this.state.data.content}</p>
                        <a href="/contact-page" className="btn">{this.state.data.btnText}</a>
                        </div>
                    </div>
                    <div className="col-12 col-md-5">
                        {/* Welcome Thumb */}
                        <div className="welcome-thumb">
                        <img src={this.state.data.heroThumb} alt="" />
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default HeroSection;