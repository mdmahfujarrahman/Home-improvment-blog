import React, { useState } from "react";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const WriteBlog = () => {
    const [value, setValue] = useState("");

    console.log(value);
    return (
        <div className="white-blog">
            <div className="content">
                <input
                    type="text"
                    placeholder="Enter Blog Title"
                    name="title"
                />
                <div className="editContainer">
                    <ReactQuill
                        theme="snow"
                        className="editor"
                        value={value}
                        onChange={setValue}
                    />
                </div>
            </div>
            <div className="side-bar">
                <div className="editorBox">
                    <h1>Publish</h1>
                    <span>
                        <b>Status: </b> Draft
                    </span>
                    <span>
                        <b>Visibility: </b> Public
                    </span>
                    <input
                        style={{ display: "none" }}
                        type="file"
                        name="file"
                        id="file"
                    />
                    <label htmlFor="file">Upload Image</label>
                    <div className="buttons">
                        <button>Save as a Draft</button>
                        <button>Update</button>
                    </div>
                </div>
                <div className="editorBox">
                    <h1>Category</h1>
                    <div className="singleCategory">
                        <input
                            type="radio"
                            name="category"
                            value="design"
                            id="design"
                        />
                        <label htmlFor="design">Design</label>
                    </div>
                    <div className="singleCategory">
                        <input
                            type="radio"
                            name="category"
                            value="remodel"
                            id="remodel"
                        />
                        <label htmlFor="remodel">Remodel</label>
                    </div>
                    <div className="singleCategory">
                        <input
                            type="radio"
                            name="category"
                            value="floring"
                            id="floring"
                        />
                        <label htmlFor="floring">Floring</label>
                    </div>
                    <div className="singleCategory">
                        <input
                            type="radio"
                            name="category"
                            value="plumbing"
                            id="plumbing"
                        />
                        <label htmlFor="plumbing">Plumbing</label>
                    </div>
                    <div className="singleCategory">
                        <input
                            type="radio"
                            name="category"
                            value="electrical"
                            id="electrical"
                        />
                        <label htmlFor="electrical">Electrical</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WriteBlog;