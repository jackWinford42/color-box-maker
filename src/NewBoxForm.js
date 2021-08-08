import React, { useState } from "react";
import "./NewBoxForm.css";
import {v1 as uuidv1} from "uuid";

function NewBoxForm(addBox) {

    const [formData, setFormData] = useState({
        width: "",
        height: "",
        color: ""
    });

    const handleSubmit = evt => {
        evt.preventDefault();
        addBox.addBox({formData, id: uuidv1()});
        setFormData({
            width: "",
            height: "",
            color: ""
        })
    };

    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }));
    };
    // end handleChange

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="width">Width:</label>
            <input
                id="width"
                name="width"
                value={formData.width}
                onChange={handleChange}
            />
            <label htmlFor="height">Height:</label>
            <input
                id="height"
                name="height"
                value={formData.height}
                onChange={handleChange}
            />
            <label htmlFor="color">Color:</label>
            <input
                id="color"
                name="color"
                value={formData.color}
                onChange={handleChange}
            />
            <button>Add a new box</button>
        </form>
    );
};
// end

export default NewBoxForm;