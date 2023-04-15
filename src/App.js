import "./App.css";
import { Component } from "react";
import { Search } from "./components/search/search";
import { Users } from "./components/users";

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchField: "",
      users: [],
    };
    this.searchFieldChange = this.searchFieldChange.bind(this);
  }

  searchFieldChange(e) {
    this.setState({
      searchField: e.target.value,
    });
  }

  fetchUsersList() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ users: data });
      });
  }

  componentDidMount() {
    this.fetchUsersList();
  }

  render() {
    return (
      <div className="App">
        <Search className="users-search-box" searchFieldChange={this.searchFieldChange} />
        <Users users={this.state.users} searchField={this.state.searchField} />
      </div>
    );
  }
}

export default App;
