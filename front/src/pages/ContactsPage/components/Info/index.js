import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./index.css"
import imgPlaceholder from "../../../../assests/placeholder.png";

export default function Info(props) {
    return (
        <article className="bg-section" id="contact-info">
            <section id="info">
                <div>
                    <h4>
                        <FontAwesomeIcon icon="map-marker" /> ADDRESS
                    </h4>
                    <p>
                        {props.address ||
                            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, voluptate?"}
                    </p>
                </div>
                <div>
                    <h4>
                        <FontAwesomeIcon icon="mail-bulk" /> EMAIL
                    </h4>
                    <p>{props.email || "example@domain.com"}</p>
                </div>
                <div>
                    <h4>
                        <FontAwesomeIcon icon="phone" /> PHONE
                    </h4>
                    <p>{props.phone || "+201223456789"}</p>
                </div>
            </section>
            <section id="map">
                <h2>OUR LOCATION</h2>
                <img src={props.image || imgPlaceholder} alt="map" />
            </section>
        </article>
    );
}
