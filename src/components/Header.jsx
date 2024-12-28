export function Header(props){

    const {todos} = props
    const todoslength = todos.length
    const isTaskPlural = todoslength>1

    return (
        <header>
            <h1>You have {todoslength} Open {isTaskPlural?"Tasks":"Task"}</h1>
        </header>
    )
}