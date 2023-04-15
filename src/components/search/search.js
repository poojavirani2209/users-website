import { Component } from "react";
import "./search.css";


export class Search extends Component{
    constructor(){
        super();
    }

    render(){
        return(
           <input className={`search-box ${this.props.id}`} onChange={this.props.searchFieldChange}/> 
        );
    }
}