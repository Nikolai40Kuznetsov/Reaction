function ToDoList ({props1, task}) {
    return (
        <div> {props1.map (elem => {
            return (<>
                <p>{elem}</p> 
                <p> : {Math.random() > 0.5 ? task[0] : task[1]}</p>
                </>
            )
    })}</div>
    )
}
export default ToDoList