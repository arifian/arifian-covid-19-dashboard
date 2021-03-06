import React from 'react';
import ReactDOM from 'react-dom';
import { Application } from './App';
import './index.css';
import { Provider } from "react-redux";
import { store } from "./store";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider>
        <CssBaseline/>
        <Application/>
      </ThemeProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
