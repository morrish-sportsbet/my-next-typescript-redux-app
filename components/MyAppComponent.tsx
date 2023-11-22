// components/MyAppComponent.tsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { addTask, removeTask } from "../store/taskSlice";
import { Formik, Field, Form, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import {
  Button,
  TextField,
  List,
  ListItem,
  ListItemButton,
  Typography,
  Container,
  Box,
} from "@mui/material";

interface FormValues {
  taskName: string;
}

interface Task {
  id: number;
  name: string;
}

const validationSchema = Yup.object({
  taskName: Yup.string().required("Task name is required"),
});

const MyAppComponent: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const tasks = useSelector((state: RootState) => state.task.tasks);

  const initialValues: FormValues = {
    taskName: "",
  };

  const handleSubmit = (
    values: FormValues,
    { resetForm }: FormikHelpers<FormValues>
  ) => {
    dispatch(addTask(values.taskName));
    resetForm();
  };

  const handleRemoveTask = (taskId: number) => {
    dispatch(removeTask(taskId));
  };

  return (
    <Container maxWidth="md">
      <Box mt={4}>
        <Typography variant="h4" gutterBottom>
          Task List
        </Typography>
        <List>
          {tasks.map((task: Task) => (
            <ListItem key={task.id}>
              <ListItemButton onClick={() => handleRemoveTask(task.id)}>
                {task.name}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div>
              <Field
                as={TextField}
                type="text"
                id="taskName"
                name="taskName"
                label="Task Name"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <ErrorMessage name="taskName" component="div" />
            </div>
            <div>
              <Button type="submit" variant="contained" color="primary">
                Add Task
              </Button>
            </div>
          </Form>
        </Formik>
      </Box>
    </Container>
  );
};

export default MyAppComponent;
