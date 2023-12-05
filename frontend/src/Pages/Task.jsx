import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import axios from "axios";
import taskStyle from "../styles/Task.module.css";

const Task = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // setToken(localStorage.getItem("token"));
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://simple-task-a0yi.onrender.com/allTask/`, {
          headers: {
            Authorization: `${localStorage.getItem("token")}`, // Replace 'yourAccessToken' with your actual access token
            "Content-Type": "application/json", // You can add other headers as needed
          },
        });

        // Assuming the response.data contains the data you want
        // console.log(response);
        setData(response.data.allTask);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className={taskStyle.container}>
      <div>
        <Navbar />
      </div>
      <div>
        <h2>Display All Task Page</h2>
        <div className={taskStyle.cards}>
         
          {data.length > 0 ? (
            data.map((el, index) => {
              return (
                <div key={index}>
                  <p>
                    <b>TaskName:</b> {el.taskName}
                  </p>
                  <p>
                    <b>Description:</b> {el.description}
                  </p>
                  <p>
                    <b>ProjectList:</b> {el.projectList}
                  </p>
                  <p>
                    <b>Comments: </b>
                    {el.comments}
                  </p>
                  <p>
                    <b>Assigned To:</b> {el.assignedTo}
                  </p>
                  <p>
                    <b>Due Date: </b>
                    {el.dueDate}
                  </p>
                  <p>
                    <b>Labels:</b> {el.labels}
                  </p>
                  <p>
                    <b>CreatedBy:</b> {el.createdBy}
                  </p>
                </div>
              );
            })
          ) : (
            <h1>No Data for this user please add it</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Task;
