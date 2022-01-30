import React from "react";
import { rainbow } from "../../sass/rainbow.module.scss"

export default function Rainbow(props) {
    return (
        <div className="blog-post hero is-medium">
            <div className="hero-body">
                <figure className={rainbow}/ >
            </div>
            <div className="hero-foot">
                <h1 className="title is-size-1 is-inline is-family-sans-serif">
                    {props.title}
                </h1>
            </div>
        </div>
    )
}
