import React, { Component } from 'react';

const initData = {
    heading: "Наши партнеры",
    content: "это ведущие банки, с которыми мы сотрудничаем для обеспечения удобной онлайн оплаты. Мы предлагаем надежные и безопасные транзакции."
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
            <section id="home" className="section welcome-area bg-overlay overflow-hidden d-flex align-items-center" style={{ height: '350px'}}>
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                    {/* Welcome Intro Start */}
                    <div className="col-12 col-md-7 col-lg-8">
                        <div className="welcome-intro text-center">
                        <h1 className="text-white">{this.state.data.heading}</h1>
                        <p className="text-white my-4">{this.state.data.content}</p>
                        
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default HeroSection;