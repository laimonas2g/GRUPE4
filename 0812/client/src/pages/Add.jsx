import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [book, setBook] = useState({
    author: "",
    title: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const handleClick = async e => {
    e.preventDefault();
    try {
      await axios.post("http://127.0.0.1:3000/api/books", book);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return <div>
    <h1>Add New Book</h1>
    <form>
      <input type="text" name="title" placeholder="Title" onChange={handleChange} minLength={5} required />
      <input type="text" name="author" placeholder="Author" onChange={handleChange} minLength={5} required />
      <button onClick={handleClick}>Add</button>
    </form>
  </div>;
};

export default Add;
