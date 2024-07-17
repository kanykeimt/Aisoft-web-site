import React, { Component } from 'react';

const data = [
    {
        countHeading: "AiDoc"
    },
    {
        countHeading: "EBilim"
    },
    {
        countHeading: "AiTest"
    }
]

class Counter extends Component {
    render() {
        return (
            <section className="section counter-area ptb_50">
                <div className="container">
                    <div className="row justify-content-center">
                        {data.map((item, idx) => {
                            return(
                                <div key={`c_${idx}`} className="col-5 col-sm-3 single-counter text-center">
                                    <div className="counter-inner p-3 p-md-0">
                                    {/* Counter Item */}
                                    <div className="counter-item d-inline-block mb-3">
                                        <span className="fw-7">{item.countHeading}</span>
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

export default Counter;