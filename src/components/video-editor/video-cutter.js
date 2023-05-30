import React, { memo, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Timeline, TimelineEffect, TimelineRow } from '@xzdarcy/react-timeline-editor';
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';
import {Card,Button, Container, SliderMarkLabel, Slider,  } from '@mui/material';
import ReactPlayer from 'react-player';
import { saveAs } from 'file-saver';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import Loader from '../../utils/Loader';
import { timeConverter } from '../../utils/formatTime';
import { downloadFile } from '../../utils/UtilFunctions';
import { insertUpdatedVideo } from '../../utils/requetes';

const VideoCutter = (currentVideo) => {
  const playerRef = useRef(null);
  const [start, setStart] = useState();
  const [videoUrl, setVideoUrl] = useState(null);
  const [cduration, setDuration] = useState();
  const videoRef = React.useRef(null);
  const [video, setVideo] = useState();
  const [mockData, setMockData] = useState();
  const [mockEffect, setMockEffect] = useState();
  const [action, setAction] = useState('');
  const [showLoader, setShowLoader] = useState(false);
  const [scale, setScale] = useState(20);


  const ffmpeg = createFFmpeg({ log: true });
  const loadFFmpeg = async () => {
    await ffmpeg.load();
  };

  useEffect(() => {
    loadFFmpeg();
  }, []);

  const processVideo = async (video) => {
    if(!ffmpeg.isLoaded()){
      await ffmpeg.load();
    }
    setShowLoader(true)
    const videoUrl = `http://localhost:3100/${video.name}`;
    const {duration, start} = timeConverter(video);
    ffmpeg.FS('writeFile', 'input.mp4', await fetchFile(videoUrl));
    await ffmpeg.run('-i', 'input.mp4', '-ss', start, '-t', duration, 'output.mp4');
    const data = ffmpeg.FS('readFile', 'output.mp4');
    const file = new Blob([data.buffer], { type: 'video/mp4' });
    const uniqueId = uuidv4();
    const urlWithId = `${video.name.split(".mp4")[0]}-${video.id}-${video.chaine_id}-${uniqueId}.mp4`;
    uploadVideo(file,urlWithId)
    insertUpdatedVideo(video, urlWithId)
    await downloadFile(file,urlWithId).then((e) => {
      setShowLoader(false)
    })
  };

  const uploadVideo = async (videoBlob, filename) => {
    const formData = new FormData();
    formData.append('video', videoBlob, filename);
    // await uploadVideo(formData)
    fetch('http://localhost:3100/api/upload', {
      method: 'POST',
      body: formData,
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Erreur lors de la requête vers le serveur');
      }
      console.log('Côté client', response);
    })
    .catch(error => {
      console.log(error)
    });
  };

  const onDuration = (duration) => {
    setDuration(duration)
  }

  useEffect(() => {
    if (currentVideo.video !== undefined) {
      setAction(currentVideo.action)
      setVideoUrl(currentVideo.video.url);
      setVideo(
        {
          src: `../assets/videos/${currentVideo.video.url}`,
          name:currentVideo.video.url,
          id:currentVideo.video.id,
          chaine_id:currentVideo.video.chaine_id,
          start: 0,
          end: cduration !== undefined ? cduration : 10,
          currentTime: 0,
          duration: cduration,
          type: 'video/mp4'
        }
      )
    }
  }, [currentVideo])

  useEffect(() => {

    if(video) {
      setStart(`${video.src}#t=${video.start},${video.end}`);
      setMockEffect({
        effect0: {
          id: 'effect0',
          name: '00'
        }
      })
      setMockData(
        [
          {
            id: '0',
            actions: [
              {
                id: 'action00',
                start: video.start,
                end: video.end,
                effectId: 'effect0',
                src: video.src,
                type: video.type
              }
            ]
          }
        ]
      )
    }
  }, [video])

  const handleEditorDataChange = (editorData) => {
    const newVideo = { ...video };
    newVideo.start = editorData[0].actions[0].start;
    newVideo.end = editorData[0].actions[0].end;
    newVideo.currentTime = newVideo.start;
    newVideo.duration = newVideo.end - newVideo.start;
    setVideo(newVideo);
    setStart(`${newVideo.src}#t=${newVideo.start},${newVideo.end}`);
  };

  useEffect(() => {
    if(cduration) {
      setVideo(prevVideo => ({ 
        ...prevVideo, 
        end: prevVideo.start + cduration,
        duration: cduration 
      }))
    }
  }, [cduration])

  return (
    <>
    {
        showLoader && <Loader/>
    }
    <div >
      {
        video &&
          <Card sx={{ 
              position: 'relative', 
              padding:3, 
              display:'flex', 
              flexDirection:'column', 
              justifyContent:'center',
              alignItems:'center'
            }}>
        
            <ReactPlayer
              key={`${video.src}-${video.start}-${video.end}`}
              url={start}
              controls
              onDuration={onDuration}
              ref={videoRef}
              width={1000}  
              style={{ backgroundColor:'black'}}
            />
            {
              action === 'edit' &&  
              <>
                <Timeline
                  style={{ height: '100px', width: '100%' }}
                  editorData={mockData}
                  effects={mockEffect}
                  handleEditorDataChange={(e) => console.log(e)}
                  onChange={handleEditorDataChange}
                  rowHeight={49}
                  scaleWidth={48}
                  scale={scale}
                />
                <Slider
                  marginTop={20}
                  aria-label="Temperature"
                  defaultValue={30}
                  getAriaValueText={setScale}
                  valueLabelDisplay="auto"
                  step={10}
                  marks
                  min={10}
                  max={110}
                />
                <Button fullWidth size="large" style={{marginTop:40}} color="secondary" variant="outlined" onClick={()=>processVideo(video)}>
                    CUT
                </Button>
              </>
             }
         </Card>
      }
    </div>
    </>
  );
};


export default VideoCutter;



