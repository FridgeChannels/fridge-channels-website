"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import Image from "next/image";
import { Volume2, VolumeX } from "lucide-react";

interface HeroSectionProps {
  videoSrc?: string | null;
  overlayImageSrc?: string | null;
}

export const HeroSection = ({ videoSrc, overlayImageSrc }: HeroSectionProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const [showOverlay, setShowOverlay] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const isMutedRef = useRef(true);
  const resolvedVideo = videoSrc ?? "/hero1215.mp4";
  const hasOverlayImage = Boolean(overlayImageSrc);

  const startPlayback = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    if (hasOverlayImage) {
      setShowOverlay(false);
    }
    video.currentTime = 0;
    video.muted = isMutedRef.current;
    video.defaultMuted = isMutedRef.current;
    video.play().catch(() => {});
  }, [hasOverlayImage]);

  const scheduleNextLoop = useCallback(() => {
    if (!hasOverlayImage) {
      startPlayback();
      return;
    }
    if (overlayTimerRef.current) {
      clearTimeout(overlayTimerRef.current);
    }
    setShowOverlay(true);
    overlayTimerRef.current = setTimeout(startPlayback, 2000);
  }, [hasOverlayImage, startPlayback]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.defaultMuted = true;

    const handleEnded = () => {
      scheduleNextLoop();
    };

    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("ended", handleEnded);
      if (overlayTimerRef.current) {
        clearTimeout(overlayTimerRef.current);
      }
    };
  }, [scheduleNextLoop, resolvedVideo]);

  useEffect(() => {
    // When video source changes, reset overlay state to ensure 2s display before playing
    setShowOverlay(hasOverlayImage);
    const video = videoRef.current;

    const initPlayback = () => {
      scheduleNextLoop();
    };

    if (video) {
      video.muted = true;
      video.defaultMuted = true;
      if (video.readyState >= 2) {
        initPlayback();
      } else {
        video.addEventListener("loadeddata", initPlayback, { once: true });
      }
    } else {
      scheduleNextLoop();
    }

    return () => {
      if (overlayTimerRef.current) {
        clearTimeout(overlayTimerRef.current);
      }
    };
  }, [resolvedVideo, scheduleNextLoop, hasOverlayImage]);

  const handleToggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    isMutedRef.current = nextMuted;

    if (!nextMuted) {
      video.muted = false;
      video.defaultMuted = false;
      video.play().catch(() => {});
    } else {
      video.muted = true;
      video.defaultMuted = true;
    }
  };

  return (
    <section id="home" className="relative pt-16 min-h-[700px] overflow-hidden bg-white pb-0">
      {/* Background video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          src={resolvedVideo}
          muted
          playsInline
          preload="auto"
        />
        {hasOverlayImage && overlayImageSrc && (
          <div
            className="absolute inset-0 transition-opacity duration-500 ease-in-out"
            style={{ opacity: showOverlay ? 1 : 0 }}
          >
            <Image
              src={overlayImageSrc}
              alt="Hero overlay"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>
        )}
        <div className="absolute inset-0 bg-white/40 pointer-events-none" />
      </div>

      <div className="absolute bottom-6 right-6 z-20">
        <button
          onClick={handleToggleMute}
          className="flex items-center gap-2 rounded-full bg-white/85 px-4 py-2 text-sm font-medium text-foreground shadow-xl backdrop-blur transition hover:bg-white"
        >
          {isMuted ? (
            <>
              <VolumeX className="h-4 w-4" />
              {/* <span>Enable sound</span> */}
            </>
          ) : (
            <>
              <Volume2 className="h-4 w-4" />
              {/* <span>Sound on</span> */}
            </>
          )}
        </button>
      </div>

      <div className="flex flex-col items-center justify-center px-6 text-center relative z-10 min-h-[700px] mt-6">
        <div className="mx-auto max-w-5xl" style={{ marginTop: '80px' }}>
          <div className="relative mx-auto h-full pt-24 pb-12 p-6">
            <h1 className="text-center text-2xl md:text-5xl mt-2 text-black">
              Boost your newsletter's C.O.R.E in the heart of your readers' homes
            </h1>
          </div>

          <div className="flex items-center justify-center" style={{ marginTop: '40px' }}>
            <Link href="#join-pilot">
              <ShimmerButton 
                className="shadow-2xl transition-transform duration-300 hover:scale-110"
                background="linear-gradient(120deg, #9f1026, #f25f6c)"
                shimmerColor="#ffe5e9"
              >
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg">
                  Start your Fridge Channel
                </span>
              </ShimmerButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
