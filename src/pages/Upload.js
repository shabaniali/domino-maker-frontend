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

function Upload() {
  const classes = useStyles();
  const [uploadFile, setUploadFile] = useState();
  const [spin, setSpin] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [resImage, setResImage] = useState();
  const [darkCount, setDarkCount] = useState();
  const [lightCount, setLightCount] = useState();
  const [size, setSize] = useState({
    width: 0,
    height: 0
  })

  const onDrop = useCallback((acceptedFiles) => {
    setUploadFile(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const submit = () => {
    if(uploadFile === undefined) return
    setSpin(true);
    const uploadImage = new UploadImage();
    uploadImage
      .uploadImage(uploadFile[0], size)
      .then((res) => {
        setSpin(false);
        console.log(res);
        setDarkCount(res.headers['x-black-count'])
        setLightCount(res.headers['x-white-count'])
        const fileReader = new FileReader();
        fileReader.readAsDataURL(res.data);
        fileReader.onload = () => {
          const base64data = fileReader.result;
          setResImage(base64data);
        };
        setOpenModal(true);
      })
      .catch((err) => {
        setSpin(false);
        console.log(err);
      });
  };

  return (
    <div className={classes.container}>
      <Grid container justifyContent="center">
        <Grid item xs={11} md={7} lg={5}>
          <div className={classes.card}>
            <div className={classes.logo}>دومینو ساز</div>
            <div className={classes.title}>عکستو آپلود کن دومینوشو بگیر</div>
            <div className={classes.dec}>
              عکس خود را آپلود کنید سپس دکمه ثبت را فشار دهید تا نقشه دومینو آن
              را دریافت کنید.
            </div>
            <div {...getRootProps()} className={classes.uploadBox}>
              <input {...getInputProps()} />
              {uploadFile ? (
                <div>
                  <p>{uploadFile[0].name}</p>
                </div>
              ) : (
                <div className={classes.uploadText}>
                  <CloudUploadIcon fontSize="large" className={classes.icon} />
                  <div>بکشید و اینجا رها کنید</div>
                  <br />
                  <span>یا</span>
                  <div>عکس خود را انتخاب کنید.</div>
                </div>
              )}
            </div>
            <div className={classes.inputBox}>
              <div className={classes.inputTitle}>ابعاد زمین دومیتو را وارد کنید.</div>
              <div className={classes.inputs}>
                <TextField type={"number"} onChange={(e) => {setSize({...size, width: e.target.value})}} size="small" placeholder="طول - مثال: 80" className={classes.TextField} variant="outlined" />
                <TextField type={"number"} onChange={(e) => {setSize({...size, height: e.target.value})}} size="small" placeholder="عرض - مثال: 30" className={classes.TextField} variant="outlined" />
              </div>
            </div>
            {spin ? 
              <CircularProgress className={classes.spin} />
              :
              <div className={classes.submitBox}>
              <div
                className={classes.btn}
                variant="contained"
                onClick={() => {
                  submit();
                }}
              >
                ثبت تصویر
              </div>
            </div>
            }
          </div>
        </Grid>
      </Grid>
      <Dialog
        maxWidth="lg"
        onClose={() => setOpenModal(false)}
        open={openModal}
      >
        <DialogContent>
          <Grid justifyContent="center" container>
            <Grid item xs={7}>
              <div className={classes.resultBox}>
                <div>تعداد مهره های سیاه: {darkCount}</div>
                <div>تعداد مهره های سفید: {lightCount}</div>
                <img className={classes.resultImage} src={resImage} />
              </div>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
}
export default Upload;
