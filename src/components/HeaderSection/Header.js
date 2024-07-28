import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header className="navbar navbar-sticky navbar-expand-lg navbar-dark">
                <div className="container position-relative">
                    <a className="navbar-brand" href="/">
                        <img className="navbar-brand-regular" src={this.props.imageData} alt="brand-logo" />
                        <img className="navbar-brand-sticky" src="/img/LogoAisoft.png" alt="sticky brand-logo" />
                    </a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="navbarToggler" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="navbar-inner">
                        {/*  Mobile Menu Toggler */}
                        <button className="navbar-toggler d-lg-none" type="button" data-toggle="navbarToggler" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <nav>
                            <ul className="navbar-nav" id="navbar-nav">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Продукты
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li>
                                            <a className="dropdown-item" href="/aidoc">AiDoc</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="/ebilim">EBilim</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="/aitest">AiTest</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/clients">Клиенты</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/partners">Партнеры</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/about">О нас</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/contact">Контакты</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
        </header>
        );
    }
}

export default Header;