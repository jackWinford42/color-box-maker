import React from "react";

/** A box with variable dimensions and color.
 * Accepts id, width of div, height of div, color of div, and handleRemove a 
 * function for removing the div.
 */
function Box({id, width, height, color, handleRemove}) {
    const backgroundColor = color;
    const remove = () => handleRemove(id);
    return (
        <>
            <div className="Box" style={{
                    width: `${width}px`,
                    height: `${height}px`,
                    border: "3px solid black",
                    backgroundColor
                }}>
            </div>
            <button onClick={remove}>X</button>
        </>
    );
}

export default Box;