import { Button, Container, Flex, Input, Item, Spacer } from "./styles";

import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [listTask, setListTask] = useState([]);
  const [description, setDescription] = useState("");

  const addTask = () => {
    if (!task) return alert("Preencha uma tarefa");
    const newTask = {
      id: Math.random(),
      task: task,
      description: description, 
      checked: false,
    };
    setListTask([...listTask, newTask]);
    setTask("");
    setDescription(""); 
  };

  const removeTask = (id) => {
    const newList = listTask.filter((task) => task.id !== id);
    setListTask(newList);
  };

  const toggleChecked = (id, checked) => {
    const index = listTask.findIndex((task) => task.id === id);
    const newList = listTask;
    newList[index].checked = !checked;
    setListTask([...newList]);
  };

  return (
    <Container>
      <h1 className="title">TO-DO LIST</h1>
      <Spacer />

    <Flex direction="column">
      <Input
        value={task}
        placeholder="Digite sua tarefa"
        onChange={(e) => setTask(e.target.value)}
      />
      <Input
        value={description}
        placeholder="Digite a descrição"
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button onClick={addTask}>Adicionar</Button>
    </Flex>

    <Spacer margin="16px" />


    <ul>
      {listTask.map((task) => (
        <>
          <Item Item checked={task.checked} key={task.id}>
            <p>{task.task}</p>
            <p>{task.description}</p>
            <Flex direction="row">
              <button onClick={() => toggleChecked(task.id, task.checked)}>
                <i class="bx bx-check"></i>
              </button>
              <button onClick={() => removeTask(task.id)}>
                <i class="bx bx-trash"></i>
              </button>
            </Flex>
          </Item>
          <Spacer margin="12px" />
        </>
      ))}
    </ul>

    </Container>
  );
}

export default App;
