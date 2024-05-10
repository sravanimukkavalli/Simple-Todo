import './index.css'

const TodoItem = props => {
  const {todoListItem, onChangeTodo} = props
  const {title, id} = todoListItem
  const onClickDelete = () => {
    onChangeTodo(id)
  }

  return (
    <li className="each-item">
      <p className="item-name">{title}</p>
      <button type="button" onClick={onClickDelete} className="button">
        Delete
      </button>
    </li>
  )
}
export default TodoItem
