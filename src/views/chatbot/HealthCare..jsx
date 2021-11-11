import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  makeStyles,
  Modal,
  useMediaQuery,
} from "@material-ui/core";
import Chatbot from "../../components/Chatbot/Chatbot";
import Feedback from "./../../components/Chatbot/Feedback";
import { useSelector } from "react-redux";
import { getChat } from "./../../store/slices/chatbot";
import { getUserSignedIn, getUser, getToken } from "./../../store/slices/auth";
import { Redirect } from "react-router";
import api from "./../../api/index";
import { toast, ToastContainer } from "react-toastify";
import Newsfeed from "../../components/Chatbot/Newsfeed";

const useStyles = makeStyles((theme) => ({
  root: {
    background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.dark} 90%)`,
    minHeight: "calc(100vh - 115px)",
    display: "flex",
    alignItems: "center",
    paddingTop:"20px",
    paddingBottom:"20px"
  },
  row: {
    marginTop: theme.spacing(5),
  },
  title: {
    color: theme.palette.primary.contrastText,
    fontWeight: "600",
    marginBottom: theme.spacing(2),
  },
}));

const HealthCare = () => {
  const classes = useStyles();
  const chat = useSelector(getChat);
  const signedIn = useSelector(getUserSignedIn);
  const user = useSelector(getUser);
  const token = useSelector(getToken);
  const [newsfeed, setNewsfeed] = useState({"posts":[], "instructions":[]})

  const bk_1 = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  const [displayFeedback, updateDisplayFeedback] = useState(false);

  const submit = async (index, feedback) => {
    updateDisplayFeedback(false);
    console.log(index);
    console.log(feedback);
    const chatJSON = JSON.stringify(chat);
    try {
      await api.feedback.POST.feedback(
        token.access,
        user.id,
        "health care",
        index,
        feedback,
        chatJSON
      );
      toast.success("Feedback added");
    } catch (err) {
      console.log(err.response);
      toast.error("Something went wrong");
    }
  };

  const getNewsfeedContent = async ()=>{
    try{
      let posts = await api.newsfeed.GET.getNews(token.access, "healthcare")
      let instructions = await api.newsfeed.GET.getInstructions(token.access, "healthcare")
      setNewsfeed({"posts":posts.data, "instructions": instructions.data})
    }
    catch(err){
      toast.error("Data fetch failed");
    }
  }

  useEffect(() => {
    getNewsfeedContent()
  },[])


  if (!signedIn) return <Redirect to="/home" />;

  return (
    <div className={classes.root}>
      <Container>
        <ToastContainer />
        <Grid
          container
          alignItems="center"
          justifyContent={bk_1 ? "space-between" : "space-around"}
          spacing={4}
        >
          <Grid item alignItems="center" sm={12} md={6}>
            <Newsfeed
              domain="Health Care"
              domainImg="/healthcare_1.svg"
              posts={newsfeed.posts}
              instructions={newsfeed.instructions}
            />
          </Grid>
          <Grid item alignItems="center" justifyContent="center" sm={12} md={5}>
            <Chatbot
              finish={() => updateDisplayFeedback(true)}
              domain="healthcare"
            />
          </Grid>
        </Grid>

        <Modal
          open={displayFeedback}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <Feedback submit={(index, feedback) => submit(index, feedback)} />
        </Modal>
      </Container>
    </div>
  );
};

export default HealthCare;
