import { useRef, useEffect, useState } from "react";
import { AiFillLeftSquare } from "react-icons/ai";

const Setting = ({ id, name, functionComponent }) => {
    const [isOpen, setIsOpen] = useState(true);
    const [settingContainerHeight, setSettingContainerHeight] = useState(false);
    const settingContainerRef = useRef();
    useEffect(() => {
        setSettingContainerHeight(settingContainerRef.current.offsetHeight);
        setIsOpen(false);
    }, []);

    return (
        <div id={id + "-container"} className={`setting-container`}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`setting-button ${isOpen ? "open" : ""}`}
            >
                <AiFillLeftSquare className={`icon left ${!isOpen ? "left" : "down"}`} />
                <p className="button-text">{name}</p>
            </button>
            <div
                className={`form-container ${isOpen ? "open" : ""}`}
                ref={settingContainerRef}
                style={isOpen ? { height: `${settingContainerHeight}px` } : { height: "0px" }}
            >
                {functionComponent}
            </div>


        </div>

    );
}

export default Setting;