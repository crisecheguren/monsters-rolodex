import { useState, useEffect, ChangeEvent } from 'react';
import CardList from './components/card-list/card-list.component.tsx';

import './App.css';
import SearchBox from './components/search-box/search-box.component.tsx';
import { getData } from './utils/data.utils.ts';

export type Monster = {
  id: string;
  name: string;
  email: string;
};

const App = () => {

const [searchField, setSearchField] = useState('');
const [ title, setTitle ] = useState('Monsters Rolodex');
const [monsters, setMonsters] = useState<Monster[]>([]);
const [filteredMonsters, setFilteredMonsters] = useState(monsters);

useEffect(() => {
  const fechUsers = async () => {
    const users = await getData<Monster[]>("https://jsonplaceholder.typicode.com/users");
    setMonsters(users);
  };
  fechUsers();
}, []);

useEffect(() => {
  const newFilteredMonsters = monsters.filter((monster) => {
    return monster.name.toLowerCase().includes(searchField);
  });
  setFilteredMonsters(newFilteredMonsters);
}, [monsters, searchField]);

const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
      const searchFieldString = event.target.value.toLocaleLowerCase();
      setSearchField(searchFieldString);
}

const onTitleChange = (event: ChangeEvent<HTMLInputElement>): void => {
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

export default App;
