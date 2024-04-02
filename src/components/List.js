import Header from './Header';
import MenuItem from './MenuItem';
import Navbar from './Navbar';
import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListComponent from './ListComponent';
import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. 

function List(){
const [lists, setLists] = useState([]);
const [listName, setListName] = useState('');

useEffect(() => {
// Load lists from localStorage when component mounts
const storedLists = JSON.parse(localStorage.getItem('lists')) || [];
setLists(storedLists);
}, []);

const handleAddList = (e) => {
e.preventDefault();
if (!listName.trim()) return;
const updatedLists = [...lists, listName];
setLists([...lists, listName]);
setListName('');
localStorage.setItem('lists', JSON.stringify(updatedLists));
};

const handleDeleteList = (name) => {
setLists(lists.filter(list => list !== name));
};


    return( <div> 

<Navbar />
        <form onSubmit={handleAddList}>
        
        <input
        type="text"
        placeholder="Enter list name"
        value={listName}
        onChange={(e) => setListName(e.target.value)}
        />
        <button type="submit">Add List</button>
    </form>
    <div>
        {lists.map((name, index) => (
        <ListComponent key={index} name={name} onDelete={handleDeleteList} />
        ))}
    </div>
    </div>
    );
}

export default List;