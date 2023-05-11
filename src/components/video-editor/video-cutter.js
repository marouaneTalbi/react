import React, { memo, useEffect, useRef, useState } from 'react';
import { Timeline, TimelineEffect, TimelineRow } from '@xzdarcy/react-timeline-editor';
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';
import {Card,Button, Container,  } from '@mui/material';
import ReactPlayer from 'react-player';
import MultiRangeSlider from "multi-range-slider-react";
import videojs from 'video.js';


const VideoCutter = (currentVideo) => {

  const playerRef = useRef(null);
  const [start, setStart] = useState();
  const [videoUrl, setVideoUrl] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [cduration, setDuration] = useState();
  const videoRef = React.useRef(null);
  const [video, setVideo] = useState();
  const [mockData, setMockData] = useState();
  const [mockEffect, setMockEffect] = useState();

  const onDuration = (duration) => {
    setDuration(duration)
  }

  useEffect(() => {
    if (currentVideo.video !== undefined) {
      setVideoUrl(currentVideo.video.url);
      setVideo(
        {
          src: currentVideo.video.url,
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
    <div style={{flex:1}}>
      {
        video &&
          <Card sx={{ position: 'relative', padding:10, width:'100%'}}>
            <ReactPlayer
              key={`${video.src}-${video.start}-${video.end}`}
              url={start}
              controls
              onDuration={onDuration}
              ref={videoRef}
              width={1000}  

            />

            <Timeline
              style={{ height: '100px', width: '100%' }}
              editorData={mockData}
              effects={mockEffect}
              handleEditorDataChange={(e) => console.log(e)}
              onChange={handleEditorDataChange}
              rowHeight={40}
              scaleWidth={49}
              scale={100}
            />
   
            <Button fullWidth size="large" style={{marginTop:40}} color="secondary" variant="outlined">
                CUT
            </Button>
         </Card>
      }
    </div>
  );
};


export default VideoCutter;



