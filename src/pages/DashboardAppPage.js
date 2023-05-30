import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import { BallTriangle, Bars } from 'react-loading-icons'
import { Audio ,BallTriangle} from 'react-loader-spinner'

import { Helmet } from 'react-helmet-async';
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
import VideoCutter from '../components/video-editor/video-cutter';
import SearchBar from '../components/searchComponent';
import Header from '../layouts/dashboard/header';
import VideoCard from '../sections/@dashboard/video_cutter/VideoCard';
import { getChaines, getEmissions } from '../utils/requetes';

export default function DashboardAppPage() {
  const theme = useTheme();
  const [videoUrl, setVideoUrl] = useState()
  const [chaine, setChaine] = useState();
  const [allChaines, setAllChaines] = useState([]);
  const [allEmissions, setAllEmissions] = useState([]);
  const [filteredEissions, setFilteredEissions] = useState([]);
  const [filteredValue, setFilteredValue] = useState();
  const [action, setAction] = useState('');
  const [open, setOpen] = useState(false);


  useEffect(() => {
    getChaines().then(setAllChaines)
    getEmissions().then(setAllEmissions)
  }, []);
  

  const getChaine = (chaine) => {
    const currentEmissions = allEmissions.filter((emissions) => emissions.chaine_id === chaine.id)
    setFilteredEissions(currentEmissions)
    setVideoUrl('')
    setFilteredValue('')
    setChaine(chaine)
  }

  const getVideos = (video, action) => {
    navigateToPageWithParams('/video-cutter', 1);
    setAction(action)
    setVideoUrl(video)
  }

  
function navigateToPageWithParams(page, params) {

}

  const getValueFromSearchBar = (d) => {
    setFilteredValue(d.target.value)
  }

  return (
    <>
      <Helmet>
        <title>Minimal UI </title>
      </Helmet>
      <Header onOpenNav={() => setOpen(true)} getValue={getValueFromSearchBar}  />
      {
        filteredValue   && 
        <SearchBar getcurrentChaine={getChaine} chaines={allChaines} filterValue={filteredValue}  />
      }
      <Container maxWidth="xl">
        <Grid container  >
          {
            !videoUrl && 
            <Grid container spacing={1} style={{display: 'flex',flexDirection:'column',padding:10, alignItems: 'flex-start',  width:'100%'}}>
              {filteredEissions.map((post, index) => (
                <VideoCard key={post.id} post={post} index={index} handleClick={getVideos} />
              ))} 
            </Grid>
          }
          {/* { videoUrl && <VideoCutter video={videoUrl} action={action}/> } */}
        </Grid>

      </Container> 
    </>
  );
}
