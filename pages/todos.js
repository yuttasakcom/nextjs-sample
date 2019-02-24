import { Component } from 'react'
import axios from 'axios'

import BaseLayout from '../components/layouts/BaseLayout'

export default class Todos extends Component {
  static async getInitialProps() {
    let todos = {}
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
      todos = res.data.slice(0, 10)
    } catch (err) {
      console.log(err)
    }

    return { todos }
  }

  render() {
    const { todos } = this.props

    return (
      <BaseLayout>
        <p>Todos</p>
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </BaseLayout>
    )
  }
}
