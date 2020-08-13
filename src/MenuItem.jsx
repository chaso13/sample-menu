import React, {  useState, useRef} from 'react';
import Chevron from "./Chevron";
import LazyLoad from 'react-lazy-load';

import "./MenuItem.scss"

function MenuItem(props){
    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const [setRotate, setRotateState] = useState("Menu-Item-Icon");
    const [setImg, setImgState] = useState("Menu-Item-Img");
    const [setTitle, setTitleState] = useState("Menu-Item-Title");
    const [setPrice, setPriceState] = useState("Menu-Item-Price")
    const [setOverlay, setOverlayState] = useState("");

    const content = useRef(null);

    function toggleMenuItem(){
        setActiveState(setActive === "" ? "active" : "");
        setHeightState(
            setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
        );
        setRotateState(
            setActive === "active" ? "Menu-Item-Icon" : "Menu-Item-Icon rotate"
        );
        setImgState(
            setActive === "active" ? "Menu-Item-Img" : "Menu-Item-Img-Bg"
        );
        setTitleState(
            setActive === "active" ? "Menu-Item-Title" : "Menu-Item-Title-Bg"
        );
        setPriceState(
            setActive === "active" ? "Menu-Item-Price" : "Menu-Item-Price-Bg"
        );
        setOverlayState(
            setActive === "active" ? "" : "overlay"
        );
    }

    return (
        <div className="Menu-Item-Section">
            <button className={`Menu-Item ${setActive}`} onClick={toggleMenuItem}>
                <LazyLoad debounce={false} >
                <img className={`${setImg}`} src={props.img} alt="menu-item-image"/>
                </LazyLoad>
                <div className={`${setOverlay}`}></div>
                <p className={`${setTitle}`}>{props.title}</p>
                <h3 className={`${setPrice}`}>{props.price}</h3>
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