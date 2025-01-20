import {Component} from 'react'
import TodoItem from '../TodoItem'
const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here
class SimpleTodos extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todoList: initialTodosList,
    }
    this.onDelete = this.onDelete.bind(this)
  }
  onDelete(id) {
    console.log('Deletion' + id)
    this.setState(prevState => ({
      todoList: prevState.todoList.filter(item => item.id !== id),
    }))
  }
  render() {
    return (
      <div>
        <h1>Simple Todos</h1>
        {this.state.todoList.map(item => (
          <TodoItem key={item.id} item={item} onDelete={this.onDelete} />
        ))}
      </div>
    )
  }
}

export default SimpleTodos
