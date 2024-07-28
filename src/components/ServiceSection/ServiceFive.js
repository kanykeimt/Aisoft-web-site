import React, { Component } from 'react';
import axios from 'axios';

const BASE_URL = "https://my-json-server.typicode.com/themeland/sapp/themeOneServiceSection";

class ServiceSection extends Component {
    state = {
        data: {
            "heading": "Make your Device Manage Everything For you",
            "thumbTwo": "/img/service_thumb_2.png",

        },
        serviceData: [
            {
                "id": 1,
                "iconClass": "fab fa-buffer",
                "text": "Fully layered dolor sit amet, consectetur adipisicing elit. Facere, nobis, id expedita dolores officiis laboriosam."
              },
              {
                "id": 2,
                "iconClass": "fas fa-brush",
                "text": "Customizable design dolor sit amet, consectetur adipisicing elit. Facere, nobis, id expedita dolores officiis laboriosam."
              },
              {
                "id": 3,
                "iconClass": "fas fa-burn",
                "text": "Drop ipsum dolor sit amet, consectetur adipisicing elit. Facere, nobis, id expedita dolores officiis laboriosam."
              },
              {
                "id": 4,
                "iconClass": "fas fa-cart-arrow-down",
                "text": "Marketing chart dolor sit amet, consectetur adipisicing elit. Facere, nobis, id expedita dolores officiis laboriosam."
              }
        ]
    }
    render() {
        return (
            <section className="section service-area overflow-hidden ptb_50">
                <div className="container">
                    <div className="row justify-content-between">
                    <div className="col-12 col-lg-6 order-2 order-lg-1">
                        {/* Service Text */}
                        <div className="service-text pt-4 pt-lg-0">
                        <h2 className="text-capitalize mb-4">{this.state.data.heading}</h2>
                        {/* Service List */}
                        <ul className="service-list">
                            {this.state.serviceData.map((item, idx) => {
                                return(
                                    <div key={`so_${idx}`}>
                                        {/* Single Service */}
                                        <li className="single-service media py-2">
                                            <div className="service-icon pr-4">
                                                <span><i className={item.iconClass} /></span>
                                            </div>
                                            <div className="service-text media-body">
                                                <p>{item.text}</p>
                                            </div>
                                        </li>
                                    </div>
                                );
                            })}
                        </ul>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 order-1 order-lg-2 d-none d-lg-block">
                        {/* Service Thumb */}
                        <div className="service-thumb mx-auto">
                        <img src={this.state.data.thumbTwo} alt="" />
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ServiceSection;