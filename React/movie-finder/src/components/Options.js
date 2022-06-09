import React, { useState } from "react";
import "./global.css";
import "./options.css";

const Options = ({ buttons, setActive, active}) => {
	return (
		<>
			<div id="crd">
				{buttons.map((buttonLabel, i) => {
					return (
						<button
							key={buttonLabel.genre}
							name={buttonLabel.name}
							className={`customButton ${active === buttonLabel.genre && "active"}`}
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


