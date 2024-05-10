import {useState} from 'react'
import './index.css'

const TodoItem = props => {
  const {todoListItem, onChangeTodo, onEdit, onSave, onToggleCompletion} = props
  const {title, id, completed, editing} = todoListItem
  const [newTitle, handleNewTitle] = useState(title)
  const onClickDelete = () => {
    onChangeTodo(id)
  }

  const handleChange = e => {
    handleNewTitle(e.target.value)
  }

  return (
    <li className="each-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => onToggleCompletion(id)}
      />
      {editing ? (
        <input type="text" value={newTitle} onChange={handleChange} />
      ) : (
        <p className={completed ? 'item-name completed' : 'item-name'}>
          {title}
        </p>
      )}
      {editing ? (
        <button
          type="button"
          className="button save-edit-btn"
          onClick={() => onSave(id, newTitle)}
        >
          Save
        </button>
      ) : (
        <button
          type="button"
          className="button save-edit-btn"
          onClick={() => onEdit(id)}
        >
          {completed ? 'Completed' : 'Edit'}
        </button>
      )}
      <button type="button" onClick={onClickDelete} className="button">
        Delete
      </button>
    </li>
  )
}
export default TodoItem
