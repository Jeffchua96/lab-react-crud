import { useState } from "react";
import { createShow } from "../../api/fetch"
import "./ShowsForm.css";
import { useNavigate } from "react-router-dom";

export default function ShowsForm() {
  const [show, setShow] = useState({
    type: "",
    title: "",
    country: "",
    dateAdded: "",
    description: "",
    duration: "",
    listedIn: "",
    rating: "",
    releaseYear: "",
  });

  const navigate = useNavigate();


  function handleSubmit(event) {
    <event.preventDefault();  //prevents the page from refreshing
    createShow(show) 
    .then ((createShow) => createShow.show)
    console.log( createdShow )
    alert (`Show created: ${createShow.title}, id: ${createShow.id}`)
    navigate('/show')
    .then((data) => {
      console.log(data);
    }


  }
// this handles the change in some input

  function handleTextChange(event) {
    //event is passed from React change detection 
    setShow({
      ...show,
      // passing id from the event as tge key is the object
      // passing the value from the event as the value of the object
      // "title" whatever value is in the input
      [event.target.id]: event.target.value,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        value={show.title}
        onChange={handleTextChange}
      />

      <label htmlFor="description">Description:</label>
      <input
        type="text"
        id="description"
        value={show.description}
        onChange={handleTextChange}
      />

      <label htmlFor="type">Type</label>
      <input
        type="text"
        id="type"
        value={show.type}
        onChange={handleTextChange}
      />

      <label htmlFor="rating">Rating:</label>
      <input
        type="text"
        id="rating"
        value={show.rating}
        onChange={handleTextChange}
      />

      <label htmlFor="listedIn">Listed in</label>
      <input
        type="text"
        id="listedIn"
        value={show.listedIn}
        onChange={handleTextChange}
      />

      <label htmlFor="duration">Duration</label>
      <input
        type="text"
        id="duration"
        value={show.duration}
        onChange={handleTextChange}
      />

      <label htmlFor="releaseYear">Release Year</label>
      <input
        type="text"
        id="releaseYear"
        value={show.releaseYear}
        onChange={handleTextChange}
      />

      <label htmlFor="country">Country</label>
      <input
        type="text"
        id="country"
        value={show.country}
        onChange={handleTextChange}
      />

      <label htmlFor="dateAdded">Date added:</label>
      <input
        type="text"
        id="dateAdded"
        value={show.dateAdded}
        onChange={handleTextChange}
      />

      <br />

      <input type="submit" />
    </form>
  );
}
