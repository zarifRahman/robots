import React from 'react';
import CardList from './CardList';
import { robots } from './robots'; /*robots is not default */
import SearchBox from './SearchBox';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      robots: robots,
      searchField : ' ',
    }
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

export default App;