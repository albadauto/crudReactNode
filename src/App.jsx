import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Form from "./components/Form";
import axios from 'axios';
import api from "./Api";


const App = () => {

  const [users, setUsers] = useState();

  useEffect(() => {
    api.get('/').then((res) => console.log(res.data));
  })


  return (
    <Router>
      <div className="container">
        <Route path="/" exact component={Form} />
      </div>
    </Router>
  );
};

export default App;
