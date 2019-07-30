import React from "react";
import M from "../../../../node_modules/materialize-css/dist/css/materialize.css";
import style from "./style.css";

function Title(props) {
    
    return (
    <nav>
        <div className="nav-wrapper blue-grey">
        {/*<a href="https://pngtree.com/free-vectors">free vectors from pngtree.com</a>*/}
           <img className="responsive-img circle resize" src={ require("../../../src/img/stock_chart2SM.jpg")} alt="stock_chart" />
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">JavaScript</a></li>
          </ul>
        </div>
    </nav>
    );
}

export default Title;