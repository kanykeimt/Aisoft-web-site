import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Breadcrumb extends Component {
    render() {
        return (
            <section className="section breadcrumb-area bg-overlay d-flex align-items-center" style={{ height: '350px'}}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            {/* Breamcrumb Content */}
                            <div className="breadcrumb-content d-flex flex-column align-items-center text-center">
                                <h3 className="text-white">{this.props.title}</h3>
                                <p className="text-white">это высшие и средние учебные заведения, обучающие студентов с разными интересами и специализациями, выпускающие специалистов в различных областях.</p>
                            </div>
                            {/* <div className="welcome-thumb mx-auto">
                                <img src="/img/blog-2.jpg" alt="" />
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Breadcrumb;