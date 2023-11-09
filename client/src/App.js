import React, {useState, useEffect} from 'react';
import './App.css';
import { useDispatch } from "react-redux";
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';
import AllRoutes from './Components/AllRoutes';
import DrawerSidebar from './Components/LeftSideBar/DrawerSidebar';
import CreateEditChanel from './Pages/Chanel/CreateEditChanel';
import VideoUpload from "./Pages/VideoUpload/VideoUpload";

import { fetchAllChanel } from "./actions/chanelUser";
import { getAllVideo } from "./actions/video";
 import { getAlllikedVideo } from "./actions/likedVideo";
import { getAllwatchLater } from "./actions/watchLater";
import { getAllHistory } from "./actions/History";


function App() {

  const [EditCreateChanelBtn, setEditCreateChanelBtn] = useState(false);
  const [vidUploadPage, setVidUploadPage] = useState(false);
  const [toggleDrawerSidebar, setToggleDrawerSidebar] = useState({
    display: "none",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllChanel());
    dispatch(getAllVideo());
    dispatch(getAlllikedVideo());
    dispatch(getAllwatchLater());
   dispatch(getAllHistory());
  }, [dispatch]);



  const toggleDrawer = () => {
    if (toggleDrawerSidebar.display === "none") {
      setToggleDrawerSidebar({
        display: "flex",
      });
    } else {
      setToggleDrawerSidebar({
        display: "none",
      });
    }
  };


  return (
    <Router>
        {vidUploadPage && <VideoUpload  setVidUploadPage={setVidUploadPage}/>}
      {EditCreateChanelBtn && (
        <CreateEditChanel setEditCreateChanelBtn={setEditCreateChanelBtn} />
      )}

      <Navbar  toggleDrawer={toggleDrawer}  setEditCreateChanelBtn={setEditCreateChanelBtn}/>
      {
        <DrawerSidebar  toggleDrawer={toggleDrawer}
        toggleDrawerSidebar={toggleDrawerSidebar}/>
      }
      <AllRoutes setVidUploadPage={setVidUploadPage} setEditCreateChanelBtn={setEditCreateChanelBtn}/>
    </Router>
  );
}

export default App;
