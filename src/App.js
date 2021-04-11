import './App.css';
import { Component } from 'react';
import { CartList } from './components/card-list/CordList';
import { SearchBox } from './components/search-box/SearchBox';

class App extends Component {
  constructor(){
    super();
    // this.state = {
    //   monsters: [
    //     {name: 'dada', id:1 },
    //     {name: 'rada', id:2 },
    //     {name: 'nada', id:3 },
    //     {name: 'sada', id:4 }
    //   ]
    // }; 
    this.state = { 
      monsters : []
    }
  }

  // componentDidMount(){
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(response => response.json())
  //   .then(data => this.setState({ monsters: data }));
  // }

  async componentDidMount(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    this.setState({
       monsters: data,
       searchField: ''      
      });
  }
  render(){
    const { monsters, searchField } = this.state;
    const feltredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <header className="App-header">
          <SearchBox placeholder='search' 
            handleChange= {e => this.setState({ searchField: e.target.value })}
          />
          <CartList monsters={feltredMonsters} />
        </header>
      </div>
    );
  }
}

export default App;
