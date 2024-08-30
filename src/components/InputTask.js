import React, { useState } from "react";
import { Select, Input, Button, Grid, Header, Icon } from "semantic-ui-react";
//import { imported as uuidv4 } from 'uuid';
import { v4 as uuidv4 } from "uuid";

const options = [
  { key: "deporte", text: "Deporte", value: "deporte" },
  { key: "casa", text: "Casa", value: "casa" },
  { key: "otras", text: "Otras", value: "otras" },
];

export const InputTask = ({ crearTask }) => {
  const [task, setTask] = useState({
    idTask: "",
    taskName: "",
    categoryTask: "",
  });
  const [error, setError] = useState(false);

  const onChangeTask = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const onChangeCategoryTask = (e, data) => {
    setTask({
      ...task,
      [data.name]: data.value,
    });
  };

  const onSubmitTask = (e) => {
    e.preventDefault();
    //validar
    if (task.taskName.trim() === "") {
      setError(true);
      return;
    }
    //eliminar
    setError(false);
    //asignar id
    task.idTask = uuidv4();
    //crear tarea
    crearTask(task);
    //limpiar
    setTask({
      idTask: "",
      taskName: "",
      categoryTask: "",
    });
  };
  return (
    <>
      <Grid centered columns={2}>
        <Input type="text" action>
          <Input
            size="small"
            icon="add"
            placeholder="Escribe tu Tarea..."
            iconPosition="left"
            name="taskName"
            value={task.taskName}
            onChange={onChangeTask}
          />
          <Select
            compact
            options={options}
            className="select-from-task"
            name="categoryTask"
            placeholder="Categoria"
            value={task.categoryTask}
            onChange={onChangeCategoryTask}
          />
          <Button type="submit" color="violet" onClick={onSubmitTask}>
            Añadir Tarea
          </Button>
        </Input>
      </Grid>
      {error && (
        <Grid centered>
          <Header as="h4" color="red" className="alert-error-form">
            <Icon name="close" />
            <Header.Content>La tarea es obligatoria</Header.Content>
            <Icon name="close" />
          </Header>
        </Grid>
      )}
    </>
  );
};
