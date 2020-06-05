import React, { Component } from 'react';
import { Table, Card } from 'reactstrap';

export class ListTodos extends Component {
  constructor(props) {
    super();
    this.state = {
      todos: [
        {
          id: 1,
          description: 'Learn react',
          done: false,
          targetDate: new Date(),
        },
        {
          id: 2,
          description: 'fvck men',
          done: false,
          targetDate: new Date(),
        },
        {
          id: 3,
          description: 'love',
          done: false,
          targetDate: new Date(),
        },
      ],
    };
  }

  render() {
    return (
      <Card className="ListTodos">
        <h1>List Todos</h1>
        <Table striped hover responsive>
          <thead>
            <tr>
              <th scope="row">id</th>
              <th>description</th>
              <th>Target Date</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody>
            {this.state.todos.map((todo) => (
              <tr>
                <td>{todo.id}</td>
                <td>{todo.description}</td>
                <td>{todo.targetDate.toDateString()}</td>
                <td>{todo.done.toString()}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    );
  }
}

export default ListTodos;
