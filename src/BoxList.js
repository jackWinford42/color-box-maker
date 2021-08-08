import React, { useState } from "react";
import Box from "./Box.js";
import NewBoxForm from "./NewBoxForm.js";

/** This component renders all of the Box components along with the NewBoxForm 
 * component.
 */
function BoxList() {
    const [boxes, setBoxes] = useState([]);

    const remove = id => {
        for (let i = 0; i < boxes.length; i++) {
            if (boxes[i].id === id) {
                setBoxes(boxes => [...boxes.slice(0,i),...boxes.slice(i+1,boxes.length + 1)]);
            }
        }
    };

    const updateBoxList = formData => {
        setBoxes(boxes => [...boxes, formData])
    };

    let displayBoxes = []
    for (let i = 0; i < boxes.length; i++) {
        displayBoxes.push(
            <Box
                key={boxes[i].id}
                id={boxes[i].id}
                width={boxes[i].formData.width}
                height={boxes[i].formData.height}
                color={boxes[i].formData.color}
                handleRemove={remove}
            />
        )
    }
    return (
        <div className="BoxList">
            {displayBoxes}
            <NewBoxForm addBox={updateBoxList}/>
        </div>
    )
}

export default BoxList;