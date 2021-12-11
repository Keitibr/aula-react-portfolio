import React from 'react';
import ReactDOM from 'react-dom';
import '../css/main.css';

export default class Intro extends React.Component {
    render() {
        return (
            <section id="intro">

                <div className="intro-overlay"></div>

                <div className="intro-content">
                    <div className="row">

                        <div className="col-twelve">

                            <h5>Venha estudar.</h5>
                            <h1>{this.props.nome}</h1>

                            <p className="intro-position">
                                <span>Front-end Developer</span>
                                <span>UI/UX Designer</span>
                            </p>

                            <a className="button stroke smoothscroll" href="#about" title="">More About Me</a>

                        </div>

                    </div>
                </div>

                <ul className="intro-social">
                    <li><a href="https://linkedin.com/in/gustavo-keiti-kawamoto-210a9a59" target="_blank"><i className="fa fa-linkedin" ></i></a></li>
                    <li><a href="mailto:keitibr@gmail.com"><i className="fa fa-envelope" /></a></li>
                    <li><a href="https://github.com/Keitibr"><i className="fa fa-github" /></a></li>

                </ul>

            </section>
        );
    };
};