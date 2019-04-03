import React from 'react';
import CardList from './CardList';
import { robots } from './robots'; /*robots is not default */
import SearchBox from './SearchBox';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      robots: [],
      searchField : ' ',
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users }) )  /*getting the users from response and updating the users */  
  }

  onSearchChange = (event) => {
      this.setState({
        searchField : event.target.value
      })
  }

  render() {
    const filterRobots = this.state.robots.filter(robot => {
      return robot.name.toLocaleLowerCase().includes(this.state.searchField.toLocaleLowerCase())
    })

    if(this.state.robots.length === 0){
      return <h1>Loading...</h1>
    }else{
      return (
        <div className='tc'>
          <h1>RoboFriends</h1>
          <SearchBox 
            searchChange={this.onSearchChange}
            inputValue={this.state.searchField}
          />
          <CardList robots={filterRobots} />
        </div>
      )
    }
  }
    
}

export default App;