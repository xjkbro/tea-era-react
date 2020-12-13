import React from "react";
import { imgText } from "../shared/imgText-tea";
import { FadeTransform } from "react-animation-components";

function Tea() {
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
    return <div className="container">{imgTexts}</div>;
}

export default Tea;
