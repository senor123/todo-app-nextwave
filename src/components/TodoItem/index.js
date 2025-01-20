// Write your code here
import {Component} from 'react'

const TodoItem = props => {
  const onDeleteItem = () => {
    props.onDelete(props.item.id)
  }
  return (
    <li>
      <p>{props.item.title}</p>
      <button onClick={onDeleteItem}>Delete</button>
    </li>
  )
}
export default TodoItem
