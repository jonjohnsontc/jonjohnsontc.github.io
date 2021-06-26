import React from "react"
import { Link } from "gatsby"

function HomeLink(props) {
    return (
        <p className={`px-2 is-size-3`}>
            <Link to={props.link}>
                {props.name}
            </Link>
        </p>
    );
}

export default function Panel(props) {
    return (
        <div className="app">
            <nav className={`navbar`} role="navigation" aria-label="main-navigation">
                <div className={`navbar-brand`}>
                    <div className={`columns is-narrow`}>
                        <div className={`column is-half`}>
                            <HomeLink name="JJ" link="/" />
                        </div>
                        <div className={`column is-2 is-flex`}>
                            <HomeLink name="About" link="/about" />
                            <HomeLink name="Blog" link="/blog" />
                            <HomeLink name="Stuff" link="/stuff" />
                        </div>
                    </div>
                </div>
            </nav>
            {props.children}
        </div>
    );
}

