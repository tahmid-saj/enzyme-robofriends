import React, { Component } from "react";
import './MainPage.css';
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";

import ErrorBoundary from "../components/ErrorBoundary";

export default class MainPage extends Component {
  constructor() {
    super();

    this.state = {
      robots: [],
      searchfield: "",
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
      return response.json();
    })
    .then(users => {
      this.setState({ robots: users })
    });
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  }

  filterRobots = robots => {
    return robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
    });
  }

  render() {
    const { robots, searchfield } = this.state;

    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })

    if (!robots.length) {
      return <h1>Loading...</h1>
    } else {
      return (
        <div className="tc">
          <h1 className="f2">RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>

          <Scroll>
            <ErrorBoundary>
              <CardList robots={this.filterRobots(robots)}/>
            </ErrorBoundary>
          </Scroll>
        </div>
      );
    }


  }
};
