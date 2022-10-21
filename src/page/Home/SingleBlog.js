import DOMPurify from "dompurify";
import moment from "moment";
import React, { useContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../App";
import deletePhoto from "../../asset/delete.png";
import editPhoto from "../../asset/edit.png";
import { DeletePosts, GetSinglePosts } from "../../util/authApi";
import useAuth from "../hooks/useAuth";
import SideBar from './SideBar';

const SingleBlog = () => {
    const navigate = useNavigate();
    const {user} =useAuth()
    const { setGlobal } = useContext(UserContext);
    const [post, setPost] = useState({});
    const location = useLocation();
    const {postId}  = useParams()
    console.log(postId);

    const getSinglePosts = async () => {
        try {
            const res = await GetSinglePosts(postId);
            console.log(res);
            setPost(res?.data);
        } catch (error) {}
    };

    useEffect(() => {
        getSinglePosts();
        const path = location?.pathname;
        setGlobal({ pathName: path });
    }, [postId]);


    const handleDelete = async () => {
        console.log(post?.id);
        try {
            await DeletePosts(post?.id);
            toast.success("Post Deleted");
            navigate('/')
        } catch (error) {
            toast.error(error)
        }

    }
    console.log(post);
    console.log(post?.category);
    return (
        <div className="single-blog">
            <Toaster position="top-right" />
            <div className="content">
                <img src={post?.img} alt="" />
                <div className="user">
                    <img
                        src="https://media.istockphoto.com/photos/profile-of-young-man-picture-id1322275410?b=1&k=20&m=1322275410&s=170667a&w=0&h=ZW7c2uyCDXxefncSb-Gk3ccPVBpkC3Obm5NYToo9sbE="
                        alt=""
                    />
                    <div className="userInfo">
                        <span>Mahfuj</span>
                        <p>Posted {moment(post.date).fromNow()}</p>
                    </div>
                    {user && user?.name === post?.name && (
                        <div className="action">
                            <Link to={`/write?edit=2`} state={post}>
                                <img src={editPhoto} alt="editPhoto" />
                            </Link>
                            <img
                                onClick={handleDelete}
                                src={deletePhoto}
                                alt="editPhoto"
                            />
                        </div>
                    )}
                </div>
                <h1>{post.title}</h1>
                <p
                    dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(post.des),
                    }}
                ></p>
            </div>
            <SideBar category={post} />
        </div>
    );
}

export default SingleBlog