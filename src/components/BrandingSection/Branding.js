import React, { Component } from 'react';

const initData = {
    heading: "Наши партнеры",
    headingText: "Мы гордимся нашими стратегическими партнерствами с ведущими компаниями в сфере технологий и инноваций. Эти партнерства позволяют нам предлагать нашим клиентам самые передовые решения и доступ к последним разработкам.",
    headingTexttwo: "Мы гордимся нашими стратегическими партнерствами с ведущими компаниями в сфере технологий и инноваций. Эти партнерства позволяют нам предлагать нашим клиентам самые передовые решения и доступ к последним разработкам."
}

const data = [
    {
        id: "1",
        image: "/img/img/demirbanklogo.png"
    },
    {
        id: "2",
        image: "/img/img/keremetbanklogo.png"
    },
    {
        id: "3",
        image: "/img/img/pay24logo.png"
    },
    {
        id: "4",
        image: "/img/img/rskbanklogo.png"
    },
    {
        id: "5",
        image: "/img/img/fincabanklogo.png"
    },
    {
        id: "6",
        image: "/img/img/mbanklogo.png"
    },
    {
        id: "7",
        image: "/img/img/onoiterminallogo.png"
    }
    ,
    {
        id: "8",
        image: "/img/img/doscredobanklogo.jpeg"
    },
    {
        id: "9",
        image: "/img/img/aiylbanklogo.png"
    }
]

class BrandingSection extends Component {
    state = {
        initData: {},
        data: []
    }
    componentDidMount(){
        this.setState({
            initData: initData,
            data: data
        })
    }
    render() {
        return (
            <section className="branding-area ptb_100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-8">
                            {/* Section Heading */}
                            <div className="section-heading text-center">
                            <h2>{this.state.initData.heading}</h2>
                            <p className="d-none d-sm-block mt-4">{this.state.initData.headingText}</p>
                            <p className="d-block d-sm-none mt-4">{this.state.initData.headingTexttwo}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/* Branding Slider */}
                        <div className="branding-slider owl-carousel">
                            {/* Single Brand */}
                            {this.state.data.map((item, idx) => {
                                return(
                                    <div key={`b_${idx}`} className="p-3">
                                        <img src={item.image} alt="" />     
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default BrandingSection;