import React, { useState } from "react";
import "./global.css";


const Options = ({ buttons, doSomethingAfterClick }) => {
	const [clickedId, setClickedId] = useState(-1);

	const handleClick = (event, id) => {
		setClickedId(id);
		doSomethingAfterClick(event);
	};

	return (
		<>
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
		</>
	);
};

export default Options;


