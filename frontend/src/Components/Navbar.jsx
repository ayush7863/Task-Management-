import React from "react";
import { Link } from "react-router-dom";
import navbarStyles from "../styles/Navbar.module.css";
import { Button, useToast } from "@chakra-ui/react";

const Navbar = () => {
  const toast = useToast();
  const handleLogout = () => {
    localStorage.clear();
    toast({
      title: "Logout",
      description: `Logout Successful`,
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    window.location.reload();
  };
  return (
    <nav className={navbarStyles.navbar}>
      <div>
        <Link to="/">Simple Task Management App</Link>
      </div>
      <ul className={navbarStyles.menu_links}>
        <li>
          <Link to="/register">SignUp</Link>
        </li>
        <li>
          <Link to="/login">login</Link>
        </li>
        <Button onClick={handleLogout}>LOGOUT</Button>
        <li>
          <Link to="/task">Tasks</Link>
        </li>
        <li>
          <Link to="/addTask">AddTasks</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
