import React from 'react';
import './App.css';
import todoList from './todoList.json'


// filter the list baseed on a checkbox
// Add an input form to allow creaing todo items with cotnetn and priorty
// Have each 

function TodoItem(props) {
  return <p className='card' onClick={() => props.removeTask(props.id)}>{props.content}</p>
}

class TodoList extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      todoList,
      hideCompletedItems:false
  
    }
    this.currentId = 4;
  }
  addTask(e){
    console.log(this.refs.taskContent)
    let todoList = this.state.todoList
    todoList.push(
      { id: this.currentId, "completed": true, "priority": 1, "content": this.refs.taskContent.value})
      this.currentId++
      this.setState({todoList:todoList})
  }
  removeTask(id){
    let todoList = this.state.todoList
    todoList = todoList.filter((v) => v.id !== id)
    this.setState({todoList})
  }
  render() {
    return (
      <>
      <input type="text" ref="taskContent" />
      <input type="button" value="Add task" onClick={(e) => this.addTask(e)} />
      <input ref="hideCompletedItemsCheckbox" type="checkbox" id="hideCompletedItems" 
      name="hideCompletedItems" value="hideCompletedItems" 
      onChange={(e) => this.setState({ hideCompletedItems: e.target.checked})}/>
      <label htmlFor="hideCompletedItems">I have a bike</label><br/><br/>
       { ((this.state.hideCompletedItems) ? this.state.todoList
        .filter((v) => !v.completed) : this.state.todoList)
        .map((v) => <TodoItem id={v.id} removeTask={(id) => this.removeTask(id)} key={v.id} content={v.content} 
        priority={v.priority} 
        completed={v.completed} />)
       }
    </>);
  }
}
function App(props) {
  
  return (
    <TodoList />
  )
}

export default App;
