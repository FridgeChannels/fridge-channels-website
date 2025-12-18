"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
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
  const [isOverlayPhase, setIsOverlayPhase] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const isMutedRef = useRef(true);
  const resolvedVideo = videoSrc ?? "/hero1215.mp4";
  const hasOverlayImage = Boolean(overlayImageSrc);
  const [currentVideo, setCurrentVideo] = useState<"videoA" | "videoB">("videoA");
  const videoSources = useMemo(
    () => ({
      videoA: "/video2.mp4",
      videoB: resolvedVideo,
    }),
    [resolvedVideo]
  );
  const currentVideoSrc = currentVideo === "videoA" ? videoSources.videoA : videoSources.videoB;

  const clearOverlayTimer = useCallback(() => {
    if (overlayTimerRef.current) {
      clearTimeout(overlayTimerRef.current);
      overlayTimerRef.current = null;
    }
  }, []);

  const advanceVideo = useCallback(() => {
    setCurrentVideo((prev) => (prev === "videoA" ? "videoB" : "videoA"));
  }, []);

  const triggerOverlayPhase = useCallback(() => {
    clearOverlayTimer();
    if (!hasOverlayImage) {
      advanceVideo();
      return;
    }
    setIsOverlayPhase(true);
    overlayTimerRef.current = setTimeout(() => {
      setIsOverlayPhase(false);
      advanceVideo();
    }, 3000);
  }, [advanceVideo, clearOverlayTimer, hasOverlayImage]);

  useEffect(() => {
    return () => {
      clearOverlayTimer();
    };
  }, [clearOverlayTimer]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !currentVideoSrc) return;

    const handleCanPlay = () => {
      video.currentTime = 0;
      video.muted = isMutedRef.current;
      video.defaultMuted = isMutedRef.current;
      video.play().catch(() => {});
    };

    video.pause();
    video.load();

    if (video.readyState >= 2) {
      handleCanPlay();
    } else {
      video.addEventListener("loadeddata", handleCanPlay, { once: true });
    }

    return () => {
      video.removeEventListener("loadeddata", handleCanPlay);
    };
  }, [currentVideoSrc]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      triggerOverlayPhase();
    };

    video.addEventListener("ended", handleEnded);
    return () => {
      video.removeEventListener("ended", handleEnded);
    };
  }, [triggerOverlayPhase]);

  useEffect(() => {
    clearOverlayTimer();
    setIsOverlayPhase(false);
    setCurrentVideo("videoA");
  }, [resolvedVideo, clearOverlayTimer]);

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

  const overlayVisible = hasOverlayImage && overlayImageSrc;

  return (
    <section id="home" className="relative pt-16 min-h-[700px] overflow-hidden bg-white pb-0">
      {/* Background video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          src={currentVideoSrc}
          muted={isMuted}
          playsInline
          preload="auto"
          autoPlay
        />
        {overlayVisible && (
          <div
            className="absolute inset-0 transition-opacity duration-500 ease-in-out"
            style={{ opacity: isOverlayPhase ? 1 : 0 }}
          >
            <div className="absolute inset-0 overflow-hidden">
              <div className={`absolute inset-0 ${isOverlayPhase ? "hero-overlay-pan" : ""}`}>
                <Image
                  src={overlayImageSrc}
                  alt="Hero overlay"
                  fill
                  className="object-cover scale-105"
                  priority
                  sizes="100vw"
                />
              </div>
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white font-semibold tracking-[0.3em] uppercase text-sm md:text-base drop-shadow-lg md:left-auto md:right-12 md:translate-x-0">
                Channel Owned
              </div>
            </div>
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
