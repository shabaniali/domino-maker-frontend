import { CircularProgress, Grid, TextField } from "@mui/material";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { makeStyles } from "@mui/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DialogContent from "@mui/material/DialogContent";
import Dialog from "@mui/material/Dialog";
import { UploadImage } from "../services/Services";

const useStyles = makeStyles({
  container: {
    width: "100%",
  },
  card: {
    width: "100%",
    padding: "10px 0px",
    boxShadow: "3px 20px 59px 37px rgba(0,0,0,0.1)",
    display: "flex",

    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
  },
  logo: {
    color: "#0043fd",
    textAlign: "center",
    fontWeight: 600,
    fontSize: 22,
    marginTop: 15,
    marginBottom: 20,
  },
  title: {
    fontSize: 17,
    fontWeight: 400,
  },
  dec: {
    fontSize: 15,
    fontWeight: 300,
    marginTop: 10,
    padding: "0px 10px",
    textAlign: "center",
  },
  uploadBox: {
    height: 250,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "4px dashed rgba(0,0,0,0.5)",
    width: "90%",
    margin: "30px 15px",
    cursor: "pointer",
    position: "relative",
  },
  uploadText: {
    userSelect: "none",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "rgba(0,0,0,0.6)",
  },
  icon: {
    marginBottom: 20,
  },
  submitBox: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    marginBottom: 15,
  },
  btn: {
    width: 200,
    background: "#0043fd",
    color: "#fff",
    padding: "8px 0px",
    textAlign: "center",
    fontSize: 15,
    borderRadius: 7,
    cursor: "pointer",
  },
  resultBox: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  resultImage: {
    width: "100%",
  },
  spin: {
    marginBottom: 15
  },
  inputBox: {
    marginBottom: 25,
    width: '100%',
  },
  inputs: {
    display:'flex',
    justifyContent: 'space-around'
  },
  TextField: {
    textAlign: 'center'
  },
  inputTitle: {
    marginBottom: 15,
    textAlign: 'center'
  },
});

function Result() {
  const classes = useStyles();

  return (
    <div className={classes.container}>

    </div>
  );
}
export default Result;
