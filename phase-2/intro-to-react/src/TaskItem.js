function TaskItem({ name, handleClick, done }) {

    const markAsDone = () => {
        handleClick()
    }

    return <li onClick={markAsDone}>{name} {done && ' Task complete'}</li>
}

export default TaskItem;