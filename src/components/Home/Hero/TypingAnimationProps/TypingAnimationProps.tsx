import React, {
  useEffect,
  useRef,
  useState,
} from 'react';

import {
  FaEye,
  FaEyeSlash,
} from 'react-icons/fa';
import Markdown from 'react-markdown';

import { cn } from '@/src/libs/cn';
import {
  Button,
  ScrollShadow,
} from '@nextui-org/react';

import styles
  from './TypingAnimation.module.css'; // Import your CSS styles here

interface Props {
  content: string[];
  typingSpeed: number;
}

const TypingAnimation: React.FC<Props> = ({ content, typingSpeed }) => {
  const [displayedContent, setDisplayedContent] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [phaseIndex, setPhaseIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [mouseOverBox, setMouseOverBox] = useState(false);
  const [highlightState, setHighlightState] = useState(false);

  useEffect(() => {
    const typier = () => {
      const typingInterval = setInterval(() => {
        if (currentIndex < content[phaseIndex].length) {
          setDisplayedContent(
            (prevContent) => prevContent + content[phaseIndex][currentIndex]
          );
          setCurrentIndex((prevIndex) => prevIndex + 1);
        } else {
          if (phaseIndex < content.length - 1) {
            setPhaseIndex((prev) => prev + 1);
            setCurrentIndex(0);
          } else {
            setPhaseIndex(0);
            setCurrentIndex(0);
          }
          clearInterval(typingInterval);
        }
      }, typingSpeed);
      return typingInterval;
    };

    const typing = typier();

    const scrollToBottom = () => {
      const container = scrollContainerRef.current;
      if (container && !mouseOverBox) {
        container.scrollTop = container.scrollHeight + 1;
      }
    };

    scrollToBottom();

    const handleMouseEnter = () => setMouseOverBox(true);
    const handleMouseLeave = () => setMouseOverBox(false);

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      clearInterval(typing);
      if (container) {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [content, currentIndex, typingSpeed, mouseOverBox, phaseIndex]);

  return (
    <div className="relative lg:flex-1 gap-5 w-full bg-light-900 lg:bg-transparent lg:h-[700px] z-[20] p-4 lg:p-0 flex justify-center lg:justify-end">
      <Button
        onClick={() => setHighlightState(!highlightState)}
        name="toggle-typer"
        aria-label="toggle-typer"
        className="absolute bg-dark-900 text-light-900 top-[-20px] min-w-[30px] h-[30px] flex justify-center items-center rounded-[30px] p-0"
      >
        {highlightState ? <FaEye /> : <FaEyeSlash />}
      </Button>
      <div className="chat-bubble">
        <ScrollShadow
          ref={scrollContainerRef}
          hideScrollBar
          style={{ transitionDuration: ".4s" }}
          className={cn(
            "transition-height ease w-full h-[600px] lg:w-[500px] bg-light-900 lg:p-5 leading-10 rounded-lg",
            highlightState && "h-[0]",
            styles.scrollContainer
          )}
        >
          <Markdown className={cn("prose", styles.typingList)}>
            {displayedContent}
          </Markdown>
          <span className={cn(styles.typingCursor)} />
        </ScrollShadow>
      </div>
    </div>
  );
};

export default TypingAnimation;
