import React from 'react'
import {Routes, Route, Link} from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Library from '../Pages/Library/Library';
import WatchHistory from '../Pages/WatchHistory/WatchHistory';
import WatchLater from '../Pages/WatchLater/WatchLater';
import LikedVideo from '../Pages/LikedVideo/LikedVideo';
import YourVideo from '../Pages/YourVideo/YourVideo';
import VideoPage from '../Pages/VideoPage/VideoPage';
import Search from '../Pages/Search/Search';
import Chanel from "../Pages/Chanel/Chanel";

function AllRoutes({ setEditCreateChanelBtn,setVidUploadPage}) {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/library' element={<Library/>}/>
        <Route path="/history" element={<WatchHistory />} />
      <Route path="/watchlater" element={<WatchLater />} />
      <Route path="/likedvideo" element={<LikedVideo />} />
      <Route path="/yourvideos" element={<YourVideo />} />
      <Route path="/videopage/:vid" element={<VideoPage />} />
      <Route path="/seacrh/:searchQuery" element={<Search />} />
      <Route
        path="/chanel/:Cid"
        element={<Chanel 
          setEditCreateChanelBtn={setEditCreateChanelBtn}
          setVidUploadPage={setVidUploadPage} />}
      />


    </Routes>
  )
}

export default AllRoutes