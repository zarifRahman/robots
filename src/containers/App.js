import React from 'react';
import CardList from '../components/CardList';
// import { robots } from '../robots'; /*robots is not default */
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

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
    const { robots, searchField } = this.state;

    const filterRobots = robots.filter(robot => {
      return robot.name.toLocaleLowerCase().includes( searchField.toLocaleLowerCase())
    })

    return robots.length === 0 ?
       <h1>Loading...</h1> :
      (
      <div className='tc'>
        <h1>RoboFriends</h1>
        <SearchBox 
          searchChange={this.onSearchChange}
          inputValue={this.state.searchField}
        />

        <Scroll>
          <ErrorBoundry>
            <CardList robots={filterRobots} />
          </ErrorBoundry>    
        </Scroll>
      </div>
      )
  }
    
}

export default App;