import { Helmet } from 'react-helmet-async';
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Button, Grid,Card,Typography, Container, Box ,CardContent} from '@mui/material';
import { useEffect, useState } from 'react';
import { getChaines, getEmissions, getUrlUpdatedVideosFromTelechargement, getVideosFromBdd, getVideo } from '../utils/requetes';
import { formatDateTime } from '../utils/UtilFunctions';

const StyledContentUdatedVideos = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

export default function UdatedVideos() {

  const [updatedUrlVideos, setUpdatedUrlVideos] = useState([])
  const [chaines, setChaines] = useState([])
  const [emissions, setEmissions] = useState([])
  const [allUpdatedVideos, setAllUpdatedVideos] = useState()
  const [allVideosData, setAllVideosData] = useState([])
  const [videosList, setVideosList] = useState([])
  const [showVideo, setShowVideo] = useState()
  const [currentVideos, setVideos] = useState()


  useEffect(() => {
    getChaines().then(setChaines)
    getEmissions().then(setEmissions)
    getUrlUpdatedVideosFromTelechargement().then((data) => setUpdatedUrlVideos(data.videos) )
    getVideosFromBdd().then(setVideos);
  }, [])

  const watchvideo = (videoName) => {
    getVideo(videoName.url).then((data) => {
      setShowVideo(data)
    })
  }

  useEffect(() => {
    if(currentVideos && updatedUrlVideos){
      const updatedVideosWithoutExtension = updatedUrlVideos.map((video) => video.replace('.mp4', ''));

      const filteredVideos = currentVideos.filter((video) => {
        const videoNameWithoutExtension = video.url.replace('.mp4', '');
        return updatedVideosWithoutExtension.includes(videoNameWithoutExtension);
      });
     const r =  getChaineEmissionFromArray(filteredVideos, chaines, emissions)
     setVideosList(r)
    }
  }, [currentVideos, updatedUrlVideos]) 

  

  const getChaineEmissionFromArray = (videos, chaines, emissions) => {
    return videos.map((item) => {

    const updatedItem = { ...item };
    chaines.forEach((c) => {
      if( updatedItem.chaine_id === c.id) {
          updatedItem.chaine = c;
      }
    })
    emissions.forEach((e) => {
      if( updatedItem.emission_id === e.id) {
          updatedItem.emissions = e;
      }
    })
    return updatedItem;
  });
  }

  return (
    <>
  
        {
         !showVideo && videosList.length !== 0 && videosList.map((video) => (
          <Container 
          style={{ 
            backgroundColor:'rgba(236, 236, 236)',
            justifyContent:'center', 
            alignContent:'center',
            padding:10,
            width:'100%',
            borderRadius:10,
            display: 'flex', 
            flexWrap: 'wrap' 
            
          }}>
            <div style={{
              margin:5,
              width: '20%',
              backgroundColor:'white',
              padding:10,
              borderRadius:10  }}
               key={video.id}
             >
                {
                  video.chaine && video.emissions && 
                  <div style={{width:'100%',height:330, display: 'flex',  flexDirection:'column', justifyContent : 'space-between', }}>    
                    <div style={{ display: 'flex', justifyContent:'center', alignContent:'center'}}  >
                      {
                        video.emissions &&<img alt="nextui logo" src={`../assets/images/img/${video.emissions.image}`} /> 
                      }
                    </div>
                    <div style={{display: 'flex',  flexDirection:'column', justifyContent : 'space-between'}}>
                      <div style={{ display: 'flex', flexDirection:'row', justifyContent:'flex-end', marginTop:15}}>
                      {
                      video.created_at &&  <p style={{margin:0, fontSize:12}}> {formatDateTime(video.created_at) }</p>
                      }
                      </div>
                      {
                        video.emissions.title && <p style={{margin:0, fontWeight:'bold', fontSize:14}}>Emission: { video.emissions.title}</p> 
                      }
                      {
                      video.chaine.name && <p style={{margin:0, fontWeight:'bold', fontSize:14}}>Chaine: { video.chaine.name}</p> 
                      }
                    
                      {
                        video.chaine.description && <p style={{margin:0, fontWeight:'bold', fontSize:14}}>Emission: {video.chaine.description}</p> 
                      }
                      <div style={{display: 'flex', flexDirection:'row', justifyContent : 'center',  padding:10}}>
                        <Button variant="contained" style={{width:100}} onClick={() => {watchvideo(video)}} >
                            Watch
                        </Button>
                      </div>
                    </div>
                  </div> 
                }
            </div>
    </Container>

          ))
        }
        
     
    {
          showVideo &&
          <div style={{
            backgroundColor:'rgba(236, 236, 236)',
            display:'flex',
            justifyContent:'center', 
            alignContent:'center',
            padding:10,
            width:'100%',
            borderRadius:10,
            }}>
            <video controls  style={{maxWidth:1000, borderRadius:10}}>
              <track kind="captions" src="captions.vtt" label="English" />
              <source src={showVideo} type="video/mp4" />
            </video>
          </div>
     
        }
    </>
  );
}
