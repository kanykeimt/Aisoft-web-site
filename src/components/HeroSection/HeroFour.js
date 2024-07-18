import React, { Component } from 'react';

const initData = {
    heading: "AiDoc",
    headingTwo: "комплексное решение и преобразование вашего учебного заведения",
    heroThumb: "/img/img/aidoc1.png",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nihil tenetur minus quidem est deserunt molestias accusamus harum ullam tempore debitis et, expedita, repellat delectus aspernatur neque itaque qui quod."
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
                        <h3 className="text-white">{this.state.data.headingTwo}</h3>
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