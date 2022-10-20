import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { UpdateImages } from "../../util/authApi";


const WriteBlog = () => {
    const [value, setValue] = useState();
    const [title, setTitle] = useState('');
    const [file, setFile] = useState([]);
    const [category, setCategory] = useState()
    const [imgUrl, setImgUrl] = useState('')

    console.log(value, title, file,category);

    const handleSubmit = async(e) => {
        e.preventDefault();

    }

    const uploadImage = async (image) => {
        const formData = new FormData();
        formData.append("file", image[0]);
        let data
        data = await UpdateImages(formData);
        setImgUrl(data?.data?.link)
        return data;
    }

    useEffect(() => {
        if (file.length > 0){
            const upload = uploadImage(file)
            toast.promise(upload, {
                loading: "Uploading",
                success: `Successfully Upload`,
                error: `Upload Failed`,
            });
        } 
    }, [file]);
    console.log(imgUrl);

    return (
        <div className="white-blog">
            <Toaster position="top-right" reverseOrder={false} />
            <div className="content">
                <input
                    type="text"
                    placeholder="Enter Blog Title"
                    onChange={(e) => setTitle(e.target.value)}
                    name="title"
                />
                <div className="editContainer">
                    <ReactQuill
                        theme="snow"
                        className="editor"
                        value={value}
                        name="des"
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
                        onChange={(e) => setFile(e.target.files)}
                        name="file"
                        id="file"
                    />
                    <label htmlFor="file">Upload Image</label>
                    <div className="buttons">
                        <button>Save as a Draft</button>
                        <button onClick={() => handleSubmit()}>Publish</button>
                    </div>
                </div>
                <div className="editorBox">
                    <h1>Category</h1>
                    <div className="singleCategory">
                        <input
                            type="radio"
                            name="category"
                            onChange={(e) => setCategory(e.target.value)}
                            value="design"
                            id="design"
                        />
                        <label htmlFor="design">Design</label>
                    </div>
                    <div className="singleCategory">
                        <input
                            type="radio"
                            name="category"
                            onChange={(e) => setCategory(e.target.value)}
                            value="remodel"
                            id="remodel"
                        />
                        <label htmlFor="remodel">Remodel</label>
                    </div>
                    <div className="singleCategory">
                        <input
                            type="radio"
                            name="category"
                            onChange={(e) => setCategory(e.target.value)}
                            value="floring"
                            id="floring"
                        />
                        <label htmlFor="floring">Floring</label>
                    </div>
                    <div className="singleCategory">
                        <input
                            type="radio"
                            name="category"
                            onChange={(e) => setCategory(e.target.value)}
                            value="plumbing"
                            id="plumbing"
                        />
                        <label htmlFor="plumbing">Plumbing</label>
                    </div>
                    <div className="singleCategory">
                        <input
                            type="radio"
                            name="category"
                            onChange={(e) => setCategory(e.target.value)}
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