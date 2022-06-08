import React, { useState } from "react";
import "./global.css";
import "./options.css";

const Options = ({ buttons, setActive}) => {
	const doSomethingAfterClick = () => {
		console.log(clickedId);
	}
	const [clickedId, setClickedId] = useState(null);

	const handleClick = (event, genre, id) => {
		setActive(genre)
		setClickedId(id);
		doSomethingAfterClick(event);
	};

	return (
		<>
			<div id="crd">
				{buttons.map((buttonLabel, i) => {
					return (
						<button
							key={buttonLabel.genre}
							name={buttonLabel.name}
							className={`niceButton`}
							onClick={(event) => handleClick(event, i)}
							className={i === clickedId ? "customButton" : "customButton"}
							onClick={() => setActive(buttonLabel.genre)}
						>
							{buttonLabel.name}
						</button>
					)
				})}
			</div>

		</>
	);
};

export default Options;


