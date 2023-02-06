import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';

import './App.css';
import SearchBox from './components/search-box/search-box.component';

const App = () => {

const [searchField, setSearchField] = useState('');
const [ title, setTitle ] = useState('Monsters Rolodex');
const [monsters, setMonsters] = useState([]);
const [filteredMonsters, setFilteredMonsters] = useState(monsters);

useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())  // convert response to json
    .then((users) => setMonsters(users));
}, []);

useEffect(() => {
  const newFilteredMonsters = monsters.filter((monster) => {
    return monster.name.toLowerCase().includes(searchField);
  });
  setFilteredMonsters(newFilteredMonsters);
}, [monsters, searchField]);

const onSearchChange = (event) => {
      const searchFieldString = event.target.value.toLocaleLowerCase();
      setSearchField(searchFieldString);
}

const onTitleChange = (event) => {
  const searchFieldString = event.target.value.toLocaleLowerCase();
  setTitle(searchFieldString);
}

  return (
    <div className="App">
      <h1 className='app-title'>{title}</h1>

      <SearchBox className='search-box' placeholder='set title' onChangeHandler={onTitleChange}/>
      <br/>
      <SearchBox className='search-box' placeholder='search monsters' onChangeHandler={onSearchChange}/>

      <CardList monsters={filteredMonsters} />      
    </div>
  )

}
// class App extends Component {
// constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: ''
//     };
//     console.log('constructor');
// }

// componentDidMount() {
//   console.log('componentDidMount');
//   fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())  // convert response to json
//     .then((users) => 
//       this.setState(
//         () => { 
//         return { monsters: users } 
//       },
//       () => console.log(this.state.monsters)
//       ));
      
//   }

// onSearchChange = (event) => {
//   const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(
//     () => { 
//       return { searchField } 
//     }
//   );
//   }
// render() {
//     console.log('render');
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <h1 className='app-title'>Monsters Rolodex</h1>
//         <SearchBox className='search-box' placeholder='search monsters' onChangeHandler={onSearchChange}/>
//         <CardList monsters={filteredMonsters}/>
//       </div>
    
      
//     );
//   }

// }

export default App;
