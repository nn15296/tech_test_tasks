import React from 'react';
import { Grid, Button, Stack, Container, Typography, Box } from '@mui/material'
import { List, ListItem, ListItemText} from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import ClearIcon from '@mui/icons-material/Clear';
import AddTaskForm from '../components/AddTaskForm';


function TaskManagerOutline() {

  return (
    <Container>
      <h1>Task Management Tech Test</h1>
      <p>Please see the instructions.md file in Visual Studio Code to complete this tech test</p>
      <AddTaskForm />
      <Grid container>
        <Grid item xs={8}>
          <Typography variant="h5">Projects & Tasks</Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default TaskManagerOutline;
