import React, { Component } from 'react';

const initData = {
    heading: "AiDoc",
    heroThumb: "/img/img/aidoc1.png",
    content: "это продвинутая система управления документооборотом, разработанная для оптимизации и автоматизации процессов обработки документов в различных организациях и предприятиях. AiDoc позволяет эффективно управлять документами, снижать трудозатраты и повышать общую продуктивность работы с документами. Ниже представлены основные характеристики и преимущества системы AiDoc."
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
            <section id="home" className="section welcome-area bg-overlay overflow-hidden d-flex align-items-center">
                <style>
        </style>
                <div className="container">
                    <div className="row align-items-center">
                    <div className="col-12 col-md-6 order-2 order-md-1">
                        {/* Welcome Thumb */}
                        <div className="welcome-thumb mx-auto">
                        <img src={this.state.data.heroThumb} alt="" />
                        </div>
                    </div>
                    {/* Welcome Intro Start */}
                    <div className="col-12 col-md-6 order-1 order-md-2">
                        <div className="welcome-intro px-0 px-lg-4">
                        <h1 className="text-white font-italic mb-2 mb-md-3">{this.state.data.heading}</h1>
                        <p className="text-white mt-3 mb-4">{this.state.data.content}</p>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default HeroSection;