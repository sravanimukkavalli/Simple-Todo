import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import TodoItem from '../TodoItem'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
    completed: false,
    editing: false,
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
    completed: false,
    editing: false,
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
    completed: false,
    editing: false,
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
    completed: false,
    editing: false,
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
    completed: false,
    editing: false,
  },
  {
    id: 6,
    title: 'Fix the production issue',
    completed: false,
    editing: false,
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
    completed: false,
    editing: false,
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
    completed: false,
    editing: false,
  },
]

class SimpleTodos extends Component {
  state = {todoList: initialTodosList, newTodoTitle: ''}

  onChangeTodo = id => {
    const {todoList} = this.state
    const filteredList = todoList.filter(each => each.id !== id)
    this.setState({todoList: filteredList})
  }

  handleChange = event => {
    this.setState({newTodoTitle: event.target.value})
  }

  onEdit = id => {
    this.setState(prevState => ({
      todoList: prevState.todoList.map(each => {
        if (each.id === id) {
          return {...each, editing: true}
        }
        return each
      }),
    }))
  }

  onSave = (id, newTitle) => {
    this.setState(prevState => ({
      todoList: prevState.todoList.map(each => {
        if (each.id === id) {
          return {...each, title: newTitle, editing: false}
        }
        return each
      }),
    }))
  }

  onToggleCompletion = id => {
    this.setState(prevState => ({
      todoList: prevState.todoList.map(each => {
        if (each.id === id) {
          return {...each, completed: !each.completed}
        }
        return each
      }),
    }))
  }

  handleAddTodo = () => {
    const {newTodoTitle} = this.state
    const newTodoInput = newTodoTitle.trim()
    // const idCounter = todoList.length + 1
    if (newTodoInput !== '') {
      const newTodos = {
        id: uuidv4(),
        title: newTodoInput,
        completed: false,
        editing: false,
      }
      this.setState(prevState => ({
        todoList: [...prevState.todoList, newTodos],
        newTodoTitle: '',
      }))
    }
  }

  render() {
    const {todoList, newTodoTitle} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Simple Todos</h1>
          <div>
            <input
              type="text"
              placeholder="Enter new todo..."
              value={newTodoTitle}
              onChange={this.handleChange}
            />
            <button type="button" onClick={this.handleAddTodo}>
              Add
            </button>
          </div>
          <ul className="todos-container">
            {todoList.map(eachItem => (
              <TodoItem
                todoListItem={eachItem}
                key={eachItem.id}
                onChangeTodo={this.onChangeTodo}
                onEdit={this.onEdit}
                onSave={this.onSave}
                onToggleCompletion={this.handleToggleCompletion}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default SimpleTodos
