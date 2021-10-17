import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './showtasks.css';

function ShowTasks() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/tasks')
        .then(res => setTasks(res.data))
        .catch(err => console.log(err));
    }, []);

    function checkedbox(value , id)
    {
        value = !value;

        const url = `http://localhost:4000/done/${id}`;
        axios.put(url , {chk : value})
        .then(res => {
            // console.log(res.data);
            window.location.reload();
        })
        .catch(err => console.log(err));   

    }

    function deleteit(id)
    {
        const url = `http://localhost:4000/remove/${id}`;
        axios.delete(url)
        .then(res => {
            // console.log(res.data);
            window.location.reload();
        })
        .catch(err => console.log(err));
    }


    return (
        <div className = "show-tasks">
        <h1>
          Tasks
        </h1>
        {
            tasks.map( tsk => (
                <div className = "task-box" key={tsk.id} id={tsk.id} >
                <h3>{tsk.task}</h3>
                {
                    tsk.done ?
                    (<input type="checkbox" checked onChange={() => checkedbox(true , tsk.id)}/>)
                    :
                    (<input type="checkbox" onChange={() => checkedbox(false , tsk.id)}/>)
                }
                <button onClick = {() => deleteit(tsk.id)}>Delete</button>
                </div>
            ))
        }
        {/* {console.log(tasks)} */}
        </div>
    )
}

export default ShowTasks
