import {
  lazy,
  Suspense,
  useEffect,
  useState,
} from 'react';

import { Spinner } from '@nextui-org/react';

import Title from './Title';

const VideoPlayer = lazy(
  () => import("@/src/components/Common/Layout/VideoPlayer")
);

export default function Info() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <div className="flex flex-col justify-center items-center gap-[40px]">
      <Title />
      {isClient && (
        <Suspense fallback={<Spinner />}>
          <VideoPlayer
            posterSrc="/assets/course.webp"
            // videoSrc="/Earth-3d.mp4"
            videoSrc="http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4"
          />
        </Suspense>
      )}
    </div>
  );
}
