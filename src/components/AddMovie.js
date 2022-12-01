import React, { useRef, useState } from "react";

import classes from "./AddMovie.module.css";
import Button from "./Button";
import Input from "./Input";

function AddMovie(props) {
  const titleRef = useRef("");
  const openingTextRef = useRef("");
  const releaseDateRef = useRef("");

  const [errorMessage, setErrorMessage] = useState("");

  function submitHandler(event) {
    event.preventDefault();

    if (
      titleRef.current.value.length > 1 &&
      openingTextRef.current.value.length > 1 &&
      releaseDateRef.current.value.length > 1
    ) {
      const movie = {
        title: titleRef.current.value,
        openingText: openingTextRef.current.value,
        releaseDate: releaseDateRef.current.value,
      };

      props.onAddMovie(movie);
      setErrorMessage("");
      titleRef.current.value = "";
      openingTextRef.current.value = "";
      releaseDateRef.current.value = "";
    } else {
      setErrorMessage("Please fill all the boxes");
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <Input
        className={classes.control}
        htmlFor={"title"}
        title={"title"}
        type='text'
        id='title'
        ref={titleRef}
      />

      <div className={classes.control}>
        <label htmlFor='opening-text'>Opening Text</label>
        <textarea rows='5' id='opening-text' ref={openingTextRef}></textarea>
      </div>

      <Input
        className={classes.control}
        htmlFor={"date"}
        title={"Release Date"}
        type='text'
        id='title'
        ref={releaseDateRef}
      />

      <div className={classes.error}>{errorMessage}</div>

      <Button style={{ color: "red" }}>Add Movie</Button>
    </form>
  );
}

export default AddMovie;
