import React, { useState } from "react";

export default function Tasklist() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");

  const addTask = () => {
    if (taskText.trim() !== "") {
      setTasks([...tasks, taskText]);
      setTaskText("");
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <>
      <div className="flex justify-center">
        <table className="tbl font-sans border-collapse w-max border-2 border-white mt-[1rem]">
          <tbody>
            <tr>
              <td>
                <input
                  placeholder="Enter Task here"
                  className="txtArea"
                  type="text"
                  value={taskText}
                  onChange={(e) => setTaskText(e.target.value)}
                />
              </td>
              <td>
                <button
                  className="bg-white w-[80px] h-[30px] block rounded-md"
                  type="button"
                  onClick={addTask}
                >
                  Add
                </button>
              </td>
            </tr>
            {tasks.map((task, index) => (
              <tr className="border-r-2 border-white" key={index}>
                <td className="text-white">{task}</td>
                <td>
                  <button
                    className="bg-white w-[80px] h-[30px] block rounded-md"
                    type="button"
                    onClick={() => removeTask(index)}
                  >
                    Done
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
