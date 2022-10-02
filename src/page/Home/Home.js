import React from 'react';
import { Link } from "react-router-dom";


const Home = () => {
  const posts= [
      {
          id: 1,
          title: "Preparing materials for use, such as pipes and wood",
          description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi deleniti officia ea nesciunt, laudantium reprehenderit et id recusandae,",
          image: "https://www.edcyrhomeimprovements.com/wp-content/uploads/2017/07/HomeImprovement2-1.jpg",
      },
      {
          id: 2,
          title: "Preparing materials for use, such as pipes and wood",
          description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi deleniti officia ea nesciunt, laudantium reprehenderit et id recusandae, ",
          image: "https://revamphomeimprovement.com/wp-content/uploads/2020/02/home-improvement-Atlanta.png",
      },
      {
          id: 3,
          title: "Preparing materials for use, such as pipes and wood",
          description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi deleniti officia ea nesciunt, laudantium reprehenderit et id recusandae,",
          image: "https://www.homestratosphere.com/wp-content/uploads/2020/04/home-improvement-image-apr1.jpg",
      },
      {
          id: 4,
          title: "Preparing materials for use, such as pipes and wood",
          description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi deleniti officia ea nesciunt, laudantium reprehenderit et id recusandae,",
          image: "https://www.edcyrhomeimprovements.com/wp-content/uploads/2017/07/HomeImprovement2-1.jpg",
      },
      {
          id: 5,
          title: "Preparing materials for use, such as pipes and wood",
          description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi deleniti officia ea nesciunt, laudantium reprehenderit et id recusandae,",
          image: "https://www.edcyrhomeimprovements.com/wp-content/uploads/2017/07/HomeImprovement2-1.jpg",
      },
      {
          id: 6,
          title: "Preparing materials for use, such as pipes and wood",
          description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi deleniti officia ea nesciunt, laudantium reprehenderit et id recusandae,",
          image: "https://www.edcyrhomeimprovements.com/wp-content/uploads/2017/07/HomeImprovement2-1.jpg",
      },
  ];



  return (
      <div className="home">
          <div className="posts">
              {posts.map((post) => (
                  <div key={post.id} className="post">
                      <div className="content-image">
                          <img src={post.image} alt={post.title} />
                      </div>
                      <div className="content">
                          <Link className="link" to={`/post/${post.id}`}>
                              <h1>{post.title}</h1>
                          </Link>
                          <p>{post.description}</p>
                          <button>Read More</button>
                      </div>
                  </div>
              ))}
          </div>
      </div>
  );
}

export default Home