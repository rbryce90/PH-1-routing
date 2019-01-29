import React, { Component } from 'react';
import { getPeople } from '../../usersService.js';
import { Link } from 'react-router-dom';
 
export default class People extends Component {
  constructor() {
    super()
    this.state = {
      people: []
    }
  }

  componentDidMount() {
    // axios call would go here to get data
    let people = getPeople() // getting people data from service file
    this.setState({
      people: people // updating state with people data
    })
  }

  render() {
    const people = this.state.people.map((e, i) => {
      return (
        <Link key={e.id} to={`/people/${e.id}`}>
         <h3>{e.name}</h3>
        </Link> 
      )
    })
    return (
      <div>
        <h1>This is the people component</h1>
        {people}
      </div>
    )
  }
}