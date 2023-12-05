// client/src/components/AddTask.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";
import addTaskStyle from "../styles/AddTask.module.css";
import { Button, useToast } from "@chakra-ui/react";

const AddTask = () => {
  const [data, setData] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [checklist, setChecklist] = useState("");
  const [comments, setComments] = useState("");
  const [projectList, setProjectList] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [labels, setLabels] = useState("");
  const toast = useToast();

  const handleAddTask = () => {
    const newTask = {
      taskName,
      description,
      checklist,
      comments,
      projectList,
      assignedTo,
      dueDate,
      labels,
    };
    // console.log(newTask);
    axios
      .post("https://simple-task-a0yi.onrender.com/allTask/task", newTask)
      .then((res) => {
        setTaskName("");
        setDescription("");
        setChecklist("");
        setComments("");
        setProjectList("");
        setAssignedTo("");
        setDueDate("");
        setLabels("");

        toast({
          title: "Added Successfully",
          description: ``,
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get("https://simple-task-a0yi.onrender.com/user/allUsers")
      .then((res) => setData(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={addTaskStyle.container}>
      <div>
        <Navbar />
      </div>
      <div>
        <h2>AddTask Page</h2>
        <div className={addTaskStyle.formContainer}>
          <input
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            placeholder="Enter Task Name"
          />
          <br />

          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
          />

          <br />

          <input
            value={checklist}
            onChange={(e) => setChecklist(e.target.value)}
            placeholder="Checklist"
          />

          <br />

          <input
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            placeholder="Comments"
          />

          <br />

          <input
            type="text"
            value={projectList}
            onChange={(e) => setProjectList(e.target.value)}
            placeholder="Project List"
          />

          <br />

          <select
            value={assignedTo}
            onChange={(e) => setAssignedTo(e.target.value)}
          >
            <option value="Select Assigned">Select Assigned</option>
            {data &&
              data.map((el, index) => {
                return (
                  <option key={index} value={el._id}>
                    {el._id}
                  </option>
                );
              })}
          </select>

          <br />

          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            placeholder="Date"
          />

          <br />

          <input
            type="text"
            value={labels}
            onChange={(e) => setLabels(e.target.value)}
            placeholder="Label"
          />

          <br />
          <Button colorScheme="teal" size="lg" onClick={handleAddTask}>
            AddTask
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
