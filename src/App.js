import React from "react";
import Upload from "./pages/Upload";
import { StyleSheetManager } from "styled-components";
import rtlPlugin from "stylis-plugin-rtl";
import { makeStyles } from "@mui/styles";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Result from "./pages/Result";

const useStyles = makeStyles({
  root: {
    position: 'relative',
    overflow: 'hidden',
    background: "url(./assets/svg/wave-haikei.svg)",
    minHeight: "100vh",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: 'hidden',
    position: 'relative'
  },
});

function App() {
  const classes = useStyles();
  return (
    <StyleSheetManager stylisPlugins={[rtlPlugin]}>
      <div className={classes.root}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Upload />} />
          <Route path="result" element={<Result />} />
        </Routes>
      </BrowserRouter>
      </div>
    </StyleSheetManager>
  );
}

export default App;
