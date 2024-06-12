import {
  useRef,
  useState,
} from 'react';

import {
  FaPause,
  FaPlay,
} from 'react-icons/fa';

import { cn } from '@/src/libs/cn';
import { Button } from '@nextui-org/react';

export default function VideoPlayer({
  posterSrc,
  videoSrc,
}: {
  posterSrc: string;
  videoSrc: string;
}) {
  const video = useRef<any>();
  const [videoStatus, setVideoStatus] = useState({
    isPlaying: false,
    isMuted: false,
    isPosterActive: true,
  });

  const toggleVideo = () => {
    setVideoStatus((prev) => ({
      ...prev,
      isPosterActive: false,
    }));
    if (video.current.paused) {
      video.current.play();
      setVideoStatus((prev) => ({
        ...prev,
        isPlaying: !video.current.paused,
      }));
      return;
    }
    video.current.pause();
    setVideoStatus((prev) => ({
      ...prev,
      isPlaying: !video.current.paused,
    }));
  };

  return (
    <div className="w-full h-max  relative rounded-md lg:rounded-2xl overflow-hidden">
      <video
        poster={posterSrc}
        ref={video}
        id="video-player"
        className="w-full h-full overflow-hidden"
      >
        <source src={videoSrc} type="video/mp4" />
        <track
          src="captions_en.vtt"
          kind="captions"
          srcLang="en"
          label="english_captions"
        />
        <track
          src="captions_es.vtt"
          kind="captions"
          srcLang="es"
          label="spanish_captions"
        ></track>
      </video>

      <div className="absolute bottom-[-20px] right-[-15px] lg:bottom-0 lg:right-0 w-full p-5">
        <Button
          aria-label="play video"
          onClick={toggleVideo}
          variant="light"
          className={cn(
            "lg:min-w-[50px] lg:h-[50px] min-w-[40px] h-[40px] rounded-[40px] p-0 mb-2  lg:rounded-[50px] text-main-900 bg-default/40",
            videoStatus.isPosterActive && "bg-default-800"
          )}
        >
          {videoStatus.isPlaying ? <FaPause /> : <FaPlay />}
        </Button>
      </div>
    </div>
  );
}
