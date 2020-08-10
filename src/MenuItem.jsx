import React, { Component, useState, useRef} from 'react';
import Chevron from "./Chevron";

import "./MenuItem.scss"

function MenuItem(props){
    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const [setRotate, setRotateState] = useState("Menu-Item-Icon");

    const content = useRef(null);

    function toggleMenuItem(){
        setActiveState(setActive === "" ? "active" : "");
        setHeightState(
            setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
        );
        setRotateState(
            setActive === "active" ? "Menu-Item-Icon" : "Menu-Item-Icon rotate"
        );
    }

    return (
        <div className="Menu-Item-Section">
            <button className={`Menu-Item ${setActive}`} onClick={toggleMenuItem}>
                <img className="Menu-Item-Img" src={props.img} alt="menu-item-image"/>
                <p className="Menu-Item-Title">{props.title}</p>
                <Chevron className={`${setRotate}`} width={10} fill={"#777"} />
            </button>
            <div
              ref={content}
              style={{ maxHeight: `${setHeight}`}}
              className="Menu-Item-Content">
                
                <div className="Menu-Item-Text"
                    dangerouslySetInnerHTML={{ __html: props.content }}
                />

            </div>

        </div>
    )
}

export default MenuItem;