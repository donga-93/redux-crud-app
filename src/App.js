import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AddUser } from './features/users/AddUser';
import { EditUser } from './features/users/EditUser';
import React from "react";
import {UserList} from "./features/users/UserList"


function App() {
  return (
    <Router>
      <div>
      <Routes>
          <Route exact path="/add-user" element={<AddUser />} />
          <Route exact path="/edit-user/:id" element={<EditUser />} />
          <Route exact path="/" element={<UserList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
