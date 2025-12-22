"use client";
import React, { useEffect } from "react";

const ChatAnimation = () => {
  useEffect(() => {
    import("@dotlottie/player-component");
  }, []);

  return (
    <dotlottie-player
      src="/animation_bubble_chat.lottie"
      autoplay
      loop
    ></dotlottie-player>
  );
};

export default ChatAnimation;
