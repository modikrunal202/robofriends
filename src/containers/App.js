import React, { Component } from 'react';
//import { robots } from '../components/robots';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css'
import Scroll from '../components/Scroll';



class App extends Component{
    constructor(){
        super();
        this.state = {
            robots : [],
            searchfield : ''
        };
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(resoponse => resoponse.json())
        .then(users => {this.setState({ robots:users })});
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
        
    }
    render(){
        const filteredRobots = this.state.robots.filter(robo => {
            return robo.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if(!this.state.robots.length){
            return <h1>Loading...</h1>
        }else {
            return(
            <div className="tc">
                <h1 className="f1">ROBOFRIENDS</h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
            );
        } 
    }
}

export default App; 