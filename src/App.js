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
      loading: false,
      error:false
    };
    this.searchFieldChange = this.searchFieldChange.bind(this);
  }

  searchFieldChange(e) {
    this.setState({
      searchField: e.target.value,
    });
  }

  async fetchUsersList() {
    return await (
      await fetch("https://jsonplaceholder.typicode.com/users").catch((e)=>{this.setState({error:true})})
    ).json();
  }

  componentDidMount() {
    this.setState({ loading: true });
    this.fetchUsersList().then((data) => {
      this.setState({ users: data });
      this.setState({ loading: false });
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <Search
              className="users-search-box"
              searchFieldChange={this.searchFieldChange}
            />
            <Users
              users={this.state.users}
              searchField={this.state.searchField}
            />
          </>
        )}
        {
          this.state.error && <p>Error....</p>
        }
      </div>
    );
  }
}

export default App;
