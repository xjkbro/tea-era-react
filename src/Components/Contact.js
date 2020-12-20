import React from "react";
import { FadeTransform } from "react-animation-components";

function Contact() {
    return (
        <div className="container">
            <FadeTransform
                in
                transformProps={{
                    exitTransform: "translateX(100px)",
                }}
                fadeProps={{
                    enterOpacity: 0.75,
                }}
            >
                <div class="row row-content align-items-center">
                    <div class="col-6">
                        <div class="media">
                            <img
                                class="d-none d-md-block mr-3 img-thumb"
                                src="images/carousel-1.jpg"
                            />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <h2 class="text-center text-md-right">Contact Us</h2>
                        <p class="text-center text-md-right">
                            jkdelara@tea.era
                        </p>
                        <p class="text-center text-md-right">702-555-1234</p>

                        <h2 class="text-center text-md-right">Opening Hours</h2>
                        <p class="text-center text-md-right">
                            <b>Mon-Fri:</b> 10:00am - 8:30pm
                        </p>
                        <p class="text-center text-md-right">
                            <b>Sat:</b> 11:00am - 9:00pm
                        </p>
                        <p class="text-center text-md-right">
                            <b>Sun:</b> 11:00am - 6:00pm
                        </p>
                    </div>
                </div>
            </FadeTransform>
        </div>
    );
}

export default Contact;
