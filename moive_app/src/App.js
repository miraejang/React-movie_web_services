import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Route path="/react-movie-web-services/" exact={true} component={Home} />
      <Route path="/react-movie-web-services/about" component={About} />
      <Route path="/react-movie-web-services/movie/:id" component={Detail} />
    </BrowserRouter>
  )
}
export default App;
