import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import Missing from "./Missing";
import About from "./About";
import HomeLayout from "./HomeLayout";

const App = () => {
  const [search, setSearch] = useState("");
  const handleDelete = () => {
    
  }
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Rocco",
      date: "July 01, 2021 11:12:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio cumque quo, neque quas quaerat vel perspiciatis! Dolorum, consectetur! Veniam doloremque quidem quam recusandae beatae sint.",
    },
    {
      id: 2,
      title: "Kanas",
      date: "June 19, 2021 12:12:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, dolore! Maxime itaque voluptas commodi voluptatum quam non, veniam quae incidunt, veritatis amet vitae adipisci inventore.",
    },
    {
      id: 3,
      title: "Muhammad",
      date: "September 21, 2026 12:19:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti perspiciatis laudantium architecto quis harum nobis ut reiciendis recusandae illo nostrum impedit labore earum, omnis non?",
    },
    {
      id: 4,
      title: "Muaz",
      date: "August 03, 2025 13:34:50 PM",
      body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae impedit enim distinctio asperiores, magnam maiores quaerat consectetur voluptatem vel dolores ipsum sed. Illum, aut quo?",
    },
  ]);
  const [searchResult, setSearchResult] = useState([]);
  return (
    <Routes>
      <Route path="" element={<HomeLayout />}>
        <Route index element={<Home posts={posts} />} />
        <Route path="/post" >
        <Route index element={<NewPost />}/>
          <Route path=":id" element={<PostPage posts={posts} handleDelete={handleDelete} />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
};

export default App;
