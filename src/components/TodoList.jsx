import { TodoCard } from "./TodoCard";

export function TodoList(props){

    const {handleCompleteTodo,handleDeleteTodo,selectedTab,todos} = props
    const tab = selectedTab;

    const filterTodoList = tab === 'All'
        ? todos
        : tab === 'Completed'
        ? todos.filter(val => val.complete)
        : todos.filter(val => !val.complete);

    return (
        <>

        {filterTodoList.map((todo, todoIndex)=>{

            const originalIndex = todos.indexOf(todo);

            return (
                <TodoCard key={originalIndex}
                    {...props}
                    todoIndex = {originalIndex}
                    todo = {todo}
                />
            )
        })}

        </>
    )
}