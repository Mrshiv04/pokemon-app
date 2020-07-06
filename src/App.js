import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import Title from './TitleBar';
import Page from './Page';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        stat_name:[],
        stat_value:[],
        name:"",
        type:"",
        image:"",
        weight:"",
      }
    this.performSearch("1")
  }

  searchChange = (event) =>{

    let searchTerm = this.state.term;
    searchTerm = event.target.value;
    if(searchTerm){
    this.performSearch(searchTerm)
    }
    else{
      this.performSearch("1")
    }
  }

  performSearch(searchTerm){
    console.log("Hello")
    const urlString = "https://pokeapi.co/api/v2/pokemon/" + searchTerm;
    $.ajax({
      url: urlString,
      success: (searchResult) =>{
        this.setState({weight:searchResult.weight,
                       name: searchResult.name,
                       type:searchResult.types[0].type.name,
                       image:searchResult.sprites.front_default})
        searchResult.stats.map( (Stat) => this.setState({stat_name:this.state.stat_name.concat(Stat.stat.name)}))
        searchResult.stats.map( (Stat) => this.setState({stat_value:this.state.stat_value.concat(Stat.base_stat)})) 
        console.log(this.state.weight, this.state.name, this.state.type,this.state.stat_name, this.state.stat_value);
      },
      error: (xhr,status,err) =>{
        console.error("failure")
      }
    })
  }

  render() { 
    return ( 
      <div>
      <Title />
      <input style = {{fontSize:24,
                       display:'block',
                       width:"98%",
                       paddingTop:8,
                       paddingBottom:8,
                       padding:16}} onChange = {this.searchChange} placeholder = "Enter Pokemon Name"/>
        <Page name      = {this.state.name}
              image     = {this.state.image}
              stat_name = {this.state.stat_name}
              stat_value= {this.state.stat_value}
              type      = {this.state.type}
              weight    = {this.state.weight}/>
      </div>
     );
  }
}
 
export default App;