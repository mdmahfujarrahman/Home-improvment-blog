import moment from "moment";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useLocation, useNavigate } from "react-router";
import { UpdateImages, UpdatePosts, WritePosts } from "../../util/authApi";


const WriteBlog = () => {
    const state = useLocation().state
    const navigate = useNavigate()
    const [value, setValue] = useState(state?.des || "");
    const [title, setTitle] = useState(state?.title || "");
    const [file, setFile] = useState([]);
    const [category, setCategory] = useState(state?.category || "");
    const [imgUrl, setImgUrl] = useState(state?.img || "");

    console.log(value, title, file,category);

    const handleSubmit = async () => {
        try {
            const updateInfo = {
                title: title,
                img: imgUrl || "",
                des: value,
                category: category,
            };
            const newInfo = {
                title: title,
                img: imgUrl || "",
                des: value,
                category: category,
                date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")
            };
            if(state){
                const updatePosts = await UpdatePosts(state.id, updateInfo);
                if (updatePosts.status === 200){
                    toast.success("Successfully Updated!");
                    navigate("/");
                }
            } else {
                const addPosts = await WritePosts(newInfo);
                if (addPosts.status === 200) {
                    toast.success("Post Published");
                    navigate("/");
                }
            }
            
        } catch (error) {
            toast.error(error.message);
        }

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

    return (
        <div className="white-blog">
            <div className="content">
                <input
                    type="text"
                    value={title}
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
                        <button onClick={() => handleSubmit()}>{state ? "Update" : "Publish"}</button>
                    </div>
                </div>
                <div className="editorBox">
                    <h1>Category</h1>
                    <div className="singleCategory">
                        <input
                            type="radio"
                            checked={category === "design"}
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
                            checked={category === "remodel"}
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
                            checked={category === "floring"}
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
                            checked={category === "plumbing"}
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
                            checked={category === "electrical"}
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