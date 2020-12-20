import React from "react";
import { imgText } from "../shared/imgText-location";
import { FadeTransform } from "react-animation-components";

function Location() {
    const imgTexts = imgText.map((item) => {
        if (item.id % 2 === 0) {
            return (
                <FadeTransform
                    in
                    key={item.id}
                    transformProps={{
                        exitTransform: "translateX(100px)",
                    }}
                    fadeProps={{
                        enterOpacity: 0.75,
                    }}
                >
                    <div className="row row-content align-items-center">
                        <div className="col-6">
                            <div className="media">
                                <img
                                    className="d-none d-md-block mr-3 img-thumb"
                                    src={item.src}
                                    alt={item.title}
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h2 className="text-center text-md-right">
                                {item.title}
                            </h2>
                            <p className="text-center text-md-right">
                                {item.desc}
                            </p>
                            <p className="text-center text-md-right">
                                {item.phone}
                            </p>
                        </div>
                    </div>
                </FadeTransform>
            );
        } else {
            return (
                <FadeTransform
                    in
                    key={item.id}
                    transformProps={{
                        exitTransform: "translateX(-100px)",
                    }}
                    fadeProps={{
                        enterOpacity: 0.75,
                    }}
                >
                    <div className="row row-content align-items-center">
                        <div className="col-md-6">
                            <h2 className="text-center text-md-left">
                                {item.title}
                            </h2>
                            <p className="text-center text-md-left">
                                {item.desc}
                            </p>
                            <p className="text-center text-md-left">
                                {item.phone}
                            </p>
                        </div>
                        <div className="col-6">
                            <div className="media">
                                <img
                                    className="d-none d-md-block mr-3 img-thumb"
                                    src={item.src}
                                    alt={item.title}
                                />
                            </div>
                        </div>
                    </div>
                </FadeTransform>
            );
        }
    });
    return (
        <>
            <div className="container">
                <div className="row">
                    <h3 class="text-center mx-auto"> - Locations -</h3>
                </div>
                <div className="row">
                    <p class="text-center mx-auto">
                        We have two locations in Las Vegas
                    </p>
                </div>
                <hr />
                {imgTexts}
            </div>
        </>
    );
}

export default Location;
