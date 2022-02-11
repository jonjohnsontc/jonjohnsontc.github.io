import React from "react";

export default function Rainbow(props) {
    return (
        <div className="hero is-medium">
            <div>
                <figure className="rainbow" aria-label="A rainbow extending over the title" />
                <h1 className="title is-size-1 is-inline is-family-sans-serif">
                    {props.title}
                </h1>
            </div>
        </div>
    )
}
