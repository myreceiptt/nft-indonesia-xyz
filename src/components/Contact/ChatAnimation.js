"use client";
import React from "react";
import { DotLottiePlayer } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";

const ChatAnimation = () => {
  return (
    <DotLottiePlayer
      src="/animation_bubble_chat.lottie"
      autoplay
      loop
    ></DotLottiePlayer>
  );
};

export default ChatAnimation;
