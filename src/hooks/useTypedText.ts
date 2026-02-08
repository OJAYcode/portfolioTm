"use client";

import { useState, useEffect, useCallback, useRef } from "react";

export function useTypedText(words: string[], speed: number = 80) {
  const [displayText, setDisplayText] = useState("");
  const wordIndex = useRef(0);
  const charIndex = useRef(0);
  const isDeleting = useRef(false);

  const type = useCallback(() => {
    const current = words[wordIndex.current];
    if (!current) return;

    if (isDeleting.current) {
      charIndex.current--;
      setDisplayText(current.substring(0, charIndex.current));
    } else {
      charIndex.current++;
      setDisplayText(current.substring(0, charIndex.current));
    }

    let delay = isDeleting.current ? 40 : speed;

    if (!isDeleting.current && charIndex.current === current.length) {
      delay = 2000;
      isDeleting.current = true;
    } else if (isDeleting.current && charIndex.current === 0) {
      isDeleting.current = false;
      wordIndex.current = (wordIndex.current + 1) % words.length;
      delay = 500;
    }

    return delay;
  }, [words, speed]);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const tick = () => {
      const delay = type();
      if (delay !== undefined) {
        timeoutId = setTimeout(tick, delay);
      }
    };

    tick();
    return () => clearTimeout(timeoutId);
  }, [type]);

  return displayText;
}
