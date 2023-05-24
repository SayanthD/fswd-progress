import React from "react";
import Blogpage from "./Blog";

function Menu() {
        return (<div><nav>
                <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Blog</a></li>
                        <Blogpage/>
                        <li>Contact</li>
                        <li>About</li>
                </ul>
                </nav></div>)
}

export default Menu;