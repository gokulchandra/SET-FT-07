import React, { useEffect, useRef } from "react";

function TaskItem({ name, handleClick, done }) {

    const currentLi = useRef(null);

    const markAsDone = () => {
        console.log(currentLi.current)
        handleClick()
    }


    useEffect(() => {
        return () => {
            currentLi.current.removeEventListener('onKeyDown');
        }
    }, []) 


    return <li ref={currentLi} onClick={markAsDone}>{name} {done && ' Task complete'}</li>
}

// class TaskItem extends React.Component {
//     constructor(props) {
//         super(props);
//         this.markAsDone.bind(this);
//     }

//     markAsDone() {
//         this.props.handleClick()
//     }

//     render() {
//         return <li onClick={this.markAsDone}>{this.props.name} {this.props.done && ' Task complete'}</li>
//     }
// }

export default TaskItem;

