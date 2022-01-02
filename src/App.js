import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import Header from "./component/Header.js";
import Tasks from "./component/Tasks.js";
import AddTask from "./component/AddTask.js";
import Footer from "./component/Footer.js";
import About from "./component/About.js";
import Login from "./component/Login.js";

function App() {
  const isLogged = useSelector((state) => state.isLogged);
  const [showTask, setShowTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: "true"
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: "true"
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "Feb 5th at 3:00pm",
      reminder: "false"
    }
  ]);

  //Add task -
  const addTask = async (task) => {
    console.log(task);

    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
    console.log(task);
  };

  //delete task -
  const deleteTask = async (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //Toggle Reminder
  const toggle = async (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <Router>
      {isLogged || <Login />}
      {isLogged && (
        <div className="container">
          <Header onAdd={() => setShowTask(!showTask)} showAddTask={showTask} />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  {showTask && <AddTask addTask={addTask} />}

                  {tasks.length > 0 ? (
                    <Tasks
                      tasks={tasks}
                      onDelete={deleteTask}
                      onToggle={toggle}
                    />
                  ) : (
                    <p>No Task Available</p>
                  )}
                </>
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>

          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;
