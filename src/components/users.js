import { Component } from "react";

export class Users extends Component {
  render() {
    return (
      <div>
        {this.props.users.map((user) => {
          if (user.name.toString().toLowerCase().startsWith(this.props.searchField)) {
            return <h1 key={user.id}>{user.name}</h1>;
          }
        })}
      </div>
    );
  }
}
