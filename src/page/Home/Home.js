import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from '../../App';
import { GetPosts } from "../../util/authApi";


const Home = () => {
  const navigate = useNavigate();
  const { setGlobal } = useContext(UserContext);
  const [posts, setPosts] = useState([])
  const category = useLocation().search;

    const getPosts = async() => {
        try {
           const res = await GetPosts(category);
           console.log(res);
           setPosts(res?.data)
        } catch (error) {
            
        }
    }

  useEffect(() => {
      getPosts();
      const path = window?.location?.pathname;
      setGlobal({ pathName: path });
  }, [category]);
  
  const navigateBtn = (id) => {
        if(id){
            navigate(`/post/${id}`)
        }
  }
  

  return (
      <div className="home">
          <div data-aos="fade-down-right" className="posts">
              {posts.map((post) => (
                  <div key={post.id} className="post">
                      <div className="content-image">
                          <img src={post.img} alt={post.title} />
                      </div>
                      <div className="content">
                          <Link className="link" to={`/post/${post.id}`}>
                              <h1>{post.title}</h1>
                          </Link>
                          <p>{post.des}</p>
                          <button onClick={() => navigateBtn(post.id)}>
                              Read More
                          </button>
                      </div>
                  </div>
              ))}
          </div>
      </div>
  );
}

export default Home