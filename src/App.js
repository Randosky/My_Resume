import Header from "./components/UI/header/Header";
import Footer from "./components/UI/footer/Footer";
import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from "./components/AppRouter";
import "./style/App.css"


function App() {
  return (
    <Router>
      <Header />
      <AppRouter />
      <Footer />
    </Router>
  );
}

export default App;
