import React from "react";
import ReactDOM from "react-dom";
import AppContextProvider from "./store/AppContext";
import CreateTeamContextProvider from "./store/CreateTeamContext";
import ViewTeamProvider from "./store/TeamContext";
import "../node_modules/antd/dist/antd.css";
import "./tailwind.css";
import "./index.scss";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { DndProvider } from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <ViewTeamProvider>
        <CreateTeamContextProvider>
          <DndProvider backend={HTML5Backend}>
            <App />
          </DndProvider>
        </CreateTeamContextProvider>
      </ViewTeamProvider>
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
