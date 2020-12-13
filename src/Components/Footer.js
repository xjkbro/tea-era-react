import React, { Component } from "react";

class Footer extends Component {
    render() {
        return (
            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <a
                                className="btn btn-social-icon btn-instagram"
                                href="http://instagram.com/"
                            >
                                <i className="fa fa-instagram" />
                            </a>{" "}
                            <a
                                className="btn btn-social-icon btn-facebook"
                                href="http://www.facebook.com/"
                            >
                                <i className="fa fa-facebook" />
                            </a>{" "}
                            <a
                                className="btn btn-social-icon btn-twitter"
                                href="http://twitter.com/"
                            >
                                <i className="fa fa-twitter" />
                            </a>{" "}
                            <a
                                className="btn btn-social-icon btn-google"
                                href="http://youtube.com/"
                            >
                                <i className="fa fa-youtube" />
                            </a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="footer-copyright text-center pt-3">
                                © 2020 Copyright:
                                <a href="https://tea-era.netlify.app/">
                                    {" "}
                                    Tea Era
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
