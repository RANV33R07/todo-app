import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { TodoInput } from "./components/TodoInput"
import { TodoList } from "./components/TodoList"
import { useState } from "react"
import { useEffect} from "react"

function App(){

  const [todos, setTodos] = useState([
    { input: 'Hello! Add your first todo!', complete: true },
    { input: 'Get the groceries!', complete: false },
    { input: 'Learn how to web design', complete: false },
    { input: 'Say hi to gran gran', complete: true },
    ]
    )

  const [selectedTab, setSelectedTab] = useState("All");

  function handleAddTodo(newTodo){
    const newTodoList = [...todos,{input : newTodo , complete : false}]
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function handleCompleteTodo(index){
    const newTodoList = todos.map((todo, i)=>
      i === index ? {...todo, complete: !todo.complete} : todo
    );
    setTodos(newTodoList);
    handleSaveData(newTodoList)
  }

  function handleDeleteTodo(index){
    const newTodoList = todos.filter((val,valIndex)=>{
      return valIndex!==index;
    })
    setTodos(newTodoList) 
    handleSaveData(newTodoList)
  }

  function handleSaveData(currTodos){
    localStorage.setItem("todo-app", JSON.stringify({todos : currTodos}))
  }

  useEffect(()=>{
    if (!localStorage || !localStorage.getItem("todo-app")) { return }
    console.log("here")
    let db = JSON.parse(localStorage.getItem("todo-app"))
    setTodos(db.todos)
  }, [todos])

  return (
    <>
      <Header todos={todos}/>
      <Tabs selectedTab = {selectedTab} setSelectedTab = {setSelectedTab} todos={todos}/>
      <TodoList handleCompleteTodo = {handleCompleteTodo} handleDeleteTodo = {handleDeleteTodo} selectedTab = {selectedTab} todos={todos}/>
      <TodoInput handleAddTodo = {handleAddTodo} />
    </>
  )
}

export default App