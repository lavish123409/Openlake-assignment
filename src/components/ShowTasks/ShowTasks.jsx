import axios from "axios";
import React, { useEffect, useState } from "react";
import "./showtasks.css";

function ShowTasks() {
  const [tasks, setTasks] = useState([]);
  const serverurl = process.env.REACT_APP_SERVER_URL;

  useEffect(() => {
    axios
      .get(serverurl + "/tasks")
      .then((res) => setTasks(res.data))
      .catch((err) => console.log(err));
  }, [serverurl]);

  function checkedbox(value, id) {
    value = !value;

    const url = serverurl + `/done/${id}`;
    axios
      .put(url, { chk: value })
      .then((res) => {
        // console.log(res.data);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  }

  function deleteit(id) {
    const url = serverurl + `/remove/${id}`;
    axios
      .delete(url)
      .then((res) => {
        // console.log(res.data);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  }

  function computedmessage(str) {
    var res = "";
    if (str.length <= 35) return str;

    for (var i = 0; i < 32; i++) res += str[i];
    res += "...";
    return res;
  }

  return (
    <div className="show-tasks">
      <h1>
        Tasks
        {console.log(serverurl)}
      </h1>
      {tasks.map((tsk) => (
        <div className="task-box" key={tsk.id} id={tsk.id}>
          <h3>
            <div class="tooltip">
              {computedmessage(tsk.task)}
              <span class="tooltiptext">{tsk.task}</span>
            </div>
            {/*
                    computedmessage(tsk.task)
                    // tsk.task + `${tsk.task.length}`
                    */}{" "}
          </h3>
          {tsk.done ? (
            <input
              type="checkbox"
              checked
              onChange={() => checkedbox(true, tsk.id)}
            />
          ) : (
            <input type="checkbox" onChange={() => checkedbox(false, tsk.id)} />
          )}
          <button onClick={() => deleteit(tsk.id)}>Delete</button>
        </div>
      ))}
      {/* {console.log(tasks)} */}
    </div>
  );
}

export default ShowTasks;
