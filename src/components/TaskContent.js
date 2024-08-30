import { Grid, Header, Icon } from "semantic-ui-react";
import { Task } from "./Task";

export const TaskContent = ({tasks, deleteTask}) => {

    if (tasks.length === 0) {
        return null;
    }

  return (
    <>
      <Grid className="tasks-content">
        <Header as='h2' icon textAlign="center">
            <Icon name='settings' />
            Administra tus tarea
        </Header>
        <Grid.Row>
            {
                tasks.map((task, index) => (
                    <Task  key={index} task={task} deleteTask={deleteTask} />

                ))
            }
        </Grid.Row>
      </Grid>
    </>
  )
}
