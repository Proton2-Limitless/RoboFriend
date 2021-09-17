/* eslint-disable no-unused-vars */
import { render } from "@testing-library/react";
import React, { Component, useState, useEffect } from "react";
import CardList from "./CardList";
// import { robots } from './robots';
import SearchBox from "./SearchBox";
import "./App.css";
import Scroll from "./Scroll";

const App = () => {
  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setRobots(users));
  }, []);

  const changeText = (event) => {
    setSearchField(event.target.value);
  };

  const filteredRobots = robots.filter((users) => {
    return users.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <div className="tc">
      <h1>RoboFriends</h1>
      <SearchBox changeText={changeText} />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  );
};
export default App;
