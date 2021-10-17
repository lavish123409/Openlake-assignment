import React from 'react';
import axios from 'axios';
import './addtask.css';

function onSubmit() {
  var inp = document.getElementById('taskMessage');
  // console.log(inp.value);
  var url = 'http://localhost:4000/adddata';

  axios.post(url , {mssg : inp.value})
  .then(res => {
    // console.log('Data added');
    window.location.reload();
    inp.value = '';
  }).catch( err => console.log(err));

  
}


function enterkey(e)
{
  // console.log(e.which);
  if(e.which === 13)
  onSubmit();
}



function AddTask() {
    return (
        <div className = "add-task">
        <h1>
          Add Task
        </h1>
        <div className = "input-area">
          <input type="text" id='taskMessage' onKeyPress={enterkey}/>
          <button onClick = {onSubmit}>Add Task</button>
        </div>
        </div>
    )
}

export default AddTask
