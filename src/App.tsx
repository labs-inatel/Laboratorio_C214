import React, { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { ToDoListRepository } from "./ToDoListRepository";
import { v4 as uuidv4 } from "uuid";
import { Task } from "./types";

type Props = {
  toDoListRepository: ToDoListRepository;
};

function App({ toDoListRepository }: Props) {
  const [task, setTask] = useState<Task>({} as Task);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [openCreateTask, setOpenCreateTask] = useState(false);
  const [openEditTask, setOpenEditTask] = useState(false);
  const [reloadTasks, setReloadTasks] = useState(true);

  const updateTask = (field: string, value: string) => {
    setTask((old) => ({
      ...old,
      [field]: value,
    }));
  };

  const addTask = () => {
    const id = uuidv4();
    toDoListRepository.add({ ...task, id });
    setOpenCreateTask(false);
    setTask({} as Task);
    setReloadTasks(true);
  };

  const editTask = () => {
    toDoListRepository.updateTask(task);
    setOpenEditTask(false);
    setTask({} as Task);
    setReloadTasks(true);
  };

  const removeTask = (id: string) => {
    toDoListRepository.removeTask(id);
    setReloadTasks(true);
  };

  useEffect(() => {
    if (reloadTasks) {
      const tasksFromRepository = toDoListRepository.getTasks();
      setTasks(tasksFromRepository);
    }
    setReloadTasks(false);
  }, [reloadTasks, toDoListRepository]);

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>ToDoList</h1>
      </div>

      <div
        style={{
          width: "100%",
          background:
            "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(187,187,187,1) 35%)",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={styles.taskBox}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              margin: 20,
            }}
          >
            <h2>Tarefas</h2>
            <button
              style={{
                ...styles.button,
                background: "green",
                borderRadius: 100,
                height: 35,
                width: 35,
                color: "#FFF",
              }}
              onClick={() => setOpenCreateTask(true)}
            >
              <AddIcon />
            </button>
          </div>
          {tasks.map((task) => (
            <div style={styles.taskCard} key={task.id}>
              <div style={{ width: "100%" }}>
                <h3
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  {task.title}
                </h3>
                <div style={{ margin: 10 }}>
                  <p>{task.description}</p>
                </div>
                <p>{task.targetDate}</p>
              </div>
              <div style={{ display: "flex" }}>
                <button
                  style={{
                    border: "none",
                    background: "none",
                    margin: 0,
                    padding: 0,
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setTask(task);
                    setOpenEditTask(true);
                  }}
                >
                  <EditIcon />
                </button>
                <button
                  style={{
                    border: "none",
                    background: "none",
                    margin: 0,
                    padding: 0,
                    cursor: "pointer",
                  }}
                  onClick={() => removeTask(task.id)}
                >
                  <DeleteIcon />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {openCreateTask && (
        <div
          style={{
            position: "absolute",
            background: "rgba( 0, 0, 0, 0.5 )",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              height: "auto",
              background: "#FFF",
              width: "50%",
              display: "flex",
              flexDirection: "column",
              gap: 10,
              padding: 10,
              borderRadius: 5,
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "right",
              }}
            >
              <button
                style={{
                  ...styles.button,
                  background: "red",
                  color: "#FFF",
                  borderRadius: 100,
                  height: 25,
                  width: 25,
                }}
                onClick={() => setOpenCreateTask(false)}
              >
                <CloseIcon />
              </button>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label style={{ border: "none" }}>Nome da Tarefa</label>
              <input
                onChange={(e) => updateTask("title", e.target.value)}
              ></input>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label>Descrição</label>
              <input
                onChange={(e) => updateTask("description", e.target.value)}
              ></input>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label>Data</label>
              <input
                onChange={(e) => updateTask("targetDate", e.target.value)}
              ></input>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <button
                style={{
                  ...styles.button,
                  background: "green",
                  color: "#FFF",
                  fontWeight: "bold",
                  width: "90%",
                  borderRadius: 5,
                }}
                onClick={addTask}
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}

      {openEditTask && (
        <div
          style={{
            position: "absolute",
            background: "rgba( 0, 0, 0, 0.5 )",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              height: "auto",
              background: "#FFF",
              width: "50%",
              display: "flex",
              flexDirection: "column",
              gap: 10,
              padding: 10,
              borderRadius: 5,
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "right",
              }}
            >
              <button
                style={{
                  ...styles.button,
                  background: "red",
                  color: "#FFF",
                  borderRadius: 100,
                  height: 25,
                  width: 25,
                }}
                onClick={() => setOpenEditTask(false)}
              >
                <CloseIcon />
              </button>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label style={{ border: "none" }}>Nome da Tarefa</label>
              <input
                value={task.title}
                onChange={(e) => updateTask("title", e.target.value)}
              ></input>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label>Descrição</label>
              <input
                value={task.description}
                onChange={(e) => updateTask("description", e.target.value)}
              ></input>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label>Data</label>
              <input
                value={task.targetDate}
                onChange={(e) => updateTask("targetDate", e.target.value)}
              ></input>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <button
                style={{
                  ...styles.button,
                  background: "green",
                  color: "#FFF",
                  fontWeight: "bold",
                  width: "90%",
                  borderRadius: 5,
                }}
                onClick={editTask}
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    width: "100%",
    maxHeight: "100vh",
    background: "red",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  } as React.CSSProperties,
  header: {
    background:
      "linear-gradient(90deg, rgba(0,0,50,1) 0%, rgba(10,17,144,1) 35%)",
    height: 50,
    display: "flex",
    alignItems: "center",
    paddingLeft: 10,
    color: "#FFF",
  } as React.CSSProperties,
  title: {
    fontWeight: "bold",
    fontSize: 25,
  } as React.CSSProperties,
  taskCard: {
    marginLeft: 20,
    marginRight: 20,
    height: "5rem",
    background: "#FFF",
    borderRadius: 10,
    padding: 10,
    display: "flex",
  } as React.CSSProperties,
  button: {
    border: "none",
    background: "none",
    margin: 0,
    padding: 0,
    cursor: "pointer",
  } as React.CSSProperties,

  taskBox: {
    width: "50%",
    height: "90%",
    borderRadius: 20,
    background: "rgba( 255, 255, 255, 0.25 )",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: "blur( 4px )",
    border: "1px solid rgba( 255, 255, 255, 0.18 )",
    display: "flex",
    flexDirection: "column",
    gap: 10,
  } as React.CSSProperties,

  taskContainer: {
    width: "100%",
    background:
      "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(187,187,187,1) 35%)",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  handleTaskContainer: {
    position: "absolute",
    background: "rgba( 0, 0, 0, 0.5 )",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  } as React.CSSProperties,

  handleTaskBox: {
    height: "auto",
    background: "#FFF",
    width: "50%",
    display: "flex",
    flexDirection: "column",
    gap: 10,
    padding: 10,
    borderRadius: 5,
  } as React.CSSProperties,
};

export default App;