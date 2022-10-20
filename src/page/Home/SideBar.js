import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { GetPosts } from "../../util/authApi";

const SideBar = ({ category}) => {
    const navigate = useNavigate()
    const [posts, setPosts] = useState([]);
    const q = `?category=${category?.category}`;
    const getPosts = async () => {
        try {
            const res = await GetPosts(q);
            console.log(res);
            setPosts(res?.data);
        } catch (error) {}
    };

    useEffect(() => {
        getPosts();
    }, [category]);

    return (
        <div className="sidebar">
            <h1>Related Post you may like</h1>
            {posts?.map((post) => (
                <div key={post.id} className="post">
                    <img src={post.img} alt="" />
                    <h2>{post.title}</h2>
                    <button onClick={() => navigate(`/post/${post.id}`)}>
                        Read More
                    </button>
                </div>
            ))}
        </div>
    );
};

export default SideBar;
