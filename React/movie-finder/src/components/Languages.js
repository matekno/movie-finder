import React from "react";
import './global.css';

const Languages = ({ buttons, doSomethingAfterClick }) => {
const [clickedId, setClickedId] = useState(-1);

    
        const handleClick = (event, id) => {
            setClickedId(id);
            doSomethingAfterClick(event);
        };

        return (
            <>
            <div id="crd">
                            {buttons.map((buttonLabel, i) => (
                    <button
                        key={i}
                        name={buttonLabel}
                        onClick={(event) => handleClick(event, i)}
                        className={i === clickedId ? "customButton active" : "customButton"}
                    >
                        {buttonLabel}
                    </button>
                ))}
            </div>
    
            </>
        );
    };
    
export default Footer;
