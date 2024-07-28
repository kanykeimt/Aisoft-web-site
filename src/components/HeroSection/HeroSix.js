import React, { Component } from 'react';

const initData = {
    heading: "Наши партнеры"
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
            <section id="home" className="section welcome-area bg-overlay overflow-hidden d-flex align-items-center" style={{ height: '100px'}}>
            </section>
        );
    }
}

export default HeroSection;