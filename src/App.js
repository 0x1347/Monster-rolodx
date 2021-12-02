import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/searchBox.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state ={
     monsters:[],
     searchField:''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => this.setState({monsters:users}))
  }

  handleChanger = (e)=> {
    this.setState({searchField:e.target.value})
  }

  render(){

    const {monsters,searchField} = this.state;
    const filteredMonsters = monsters.filter(monster=> monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return( 
       <div className="App">
         <h1>Moster Rolodex</h1>
         <SearchBox 
         placeholder='Monster Search' 
         handleChanger={this.handleChanger}
         />
         <CardList monsters={filteredMonsters} />
     </div>
    )
  }
}
export default App;
