import React, { memo, useEffect, useRef, useState } from 'react';
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';
import {Card,Button, Container,  } from '@mui/material';
import ReactPlayer from 'react-player';
import MultiRangeSlider from "multi-range-slider-react";
import videojs from 'video.js';

const VideoCutter = (video) => {
  const playerRef = useRef(null);

  const [videoUrl, setVideoUrl] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [minValue, setMinValue] = useState(25);
  const [maxValue, setMaxValue] = useState(75);
  const [duration, setDuration] = useState(0);

  const handleDuration = (duration) => {
    setDuration(duration);
  };

  const handleInput = (e) => {
    setMinValue(e.minValue);
    setMaxValue(e.maxValue);
  };

  useEffect(() => {
    if (video.video !== undefined) {
      setVideoUrl(video.video.url);
    }
  }, [video]);

  const handleTrim = () => {

    const player = videojs(playerRef.current.getInternalPlayer())
    const start = minValue;
    const end = maxValue;

    console.log(start, end)

  }

 

  return (
    <div style={{flex:1}}>
      {
        videoUrl &&
          <Card sx={{ position: 'relative', padding:10, width:'100%'}}>
            <ReactPlayer
              style={{width: '100%'}}
              ref={playerRef}
              url={video.video.url} 
              playing={playing}
              controls
              onDuration={handleDuration}
            />
            <MultiRangeSlider
              style={{marginTop:20, padding:20}}
              min={0}
              max={duration}
              step={5}
              label={false}
              ruler={false}
              minValue={minValue}
              maxValue={maxValue}
              onInput={(e) => {
                handleInput(e);
              }}
            />
            <Button fullWidth size="large" style={{marginTop:40}} onClick={handleTrim} color="secondary" variant="outlined">
                CUT
            </Button>
         </Card>
      }
    </div>
  );
};


export default VideoCutter;



