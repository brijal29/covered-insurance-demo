import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  BrowserRouter,
} from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import FooterPage from "./components/FooterPage";
import UserForm from "./components/UserForm";
import Result from "./components/Result";
import "./style/main.css";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={(props) => <UserForm />} />
        <Route exact path="/result" component={(props) => <Result />} />
      </Switch>
      <FooterPage />
    </BrowserRouter>
  );
};

export default App;
