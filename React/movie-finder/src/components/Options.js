import React, { useState } from "react";
import "./global.css";
import "./options.css";


const Options = ({ buttons, doSomethingAfterClick }) => {
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
					className="niceButton"
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

export default Options;


