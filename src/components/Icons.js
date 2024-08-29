import React from "react";
import { cx } from "../utils";

export const SunIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={cx("w-full h-auto", className)}
  >
    <rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" />
    <g
      fill="none"
      stroke="currentColor"
      strokeDasharray="2"
      strokeDashoffset="2"
      strokeLinecap="round"
      strokeWidth="2"
    >
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.2s"
          dur="0.2s"
          values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.2s"
          dur="0.2s"
          values="2;0"
        />
      </path>
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.5s"
          dur="0.2s"
          values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.5s"
          dur="1.2s"
          values="2;0"
        />
      </path>
      <animateTransform
        attributeName="transform"
        dur="30s"
        repeatCount="indefinite"
        type="rotate"
        values="0 12 12;360 12 12"
      />
    </g>
    <g fill="currentColor">
      <path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <g
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" />
      <set attributeName="opacity" begin="0.6s" to="0" />
    </g>
    <mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="18" cy="6" r="12" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="12;3"
        />
      </circle>
      <circle cx="18" cy="6" r="10">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="10;1"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="10"
      fill="currentColor"
      mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)"
      opacity="0"
    >
      <set attributeName="opacity" begin="0.6s" to="1" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.6s"
        dur="0.4s"
        values="10;6"
      />
    </circle>
  </svg>
);

export const MoonIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={cx("w-full h-auto", className)}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <g strokeDasharray="2">
        <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.2s"
            values="4;2"
          />
        </path>
        <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.2s"
            dur="0.2s"
            values="4;2"
          />
        </path>
      </g>
      <path
        fill="currentColor"
        d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
        opacity="0"
      >
        <set attributeName="opacity" begin="0.5s" to="1" />
      </path>
    </g>
    <g fill="currentColor" fillOpacity="0">
      <path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
        <animate
          id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0"
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="22" cy="2" r="3" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="3;12"
        />
      </circle>
      <circle cx="22" cy="2" r="1">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="1;10"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="6"
      fill="currentColor"
      mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)"
    >
      <set attributeName="opacity" begin="0.5s" to="0" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.1s"
        dur="0.4s"
        values="6;10"
      />
    </circle>
  </svg>
);

export const TwitterIcon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={50}
      height={50}
      viewBox="0 0 50 50"
      className={cx("w-full h-auto", className)}
      {...rest}
    >
      <path
        fillRule="evenodd"
        d="m8.43,0.14c-4.58,0 -8.29,3.7 -8.29,8.29l0,33.14c0,4.58 3.7,8.29 8.29,8.29l33.14,0c4.58,0 8.29,-3.7 8.29,-8.29l0,-33.14c0,-4.58 -3.7,-8.29 -8.29,-8.29l-33.14,0zm2.47,10.65l9.39,0l6.68,9.48l8.1,-9.48l2.96,0l-9.72,11.37l11.98,17.03l-9.39,0l-7.74,-11l-9.4,11l-2.96,0l11.02,-12.9l-10.91,-15.51zm4.52,2.37l16.7,23.67l3.63,0l-16.7,-23.67l-3.63,0z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export const InstagramIcon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={50}
      height={50}
      viewBox="0 0 50 50"
      className={cx("w-full h-auto", className)}
      {...rest}
    >
      <path
        fillRule="evenodd"
        d="m14.81,0.1c-8.12,0 -14.71,6.6 -14.71,14.71l0,20.37c0,8.12 6.6,14.71 14.71,14.71l20.37,0c8.12,0 14.71,-6.6 14.71,-14.71l0,-20.37c0,-8.12 -6.6,-14.71 -14.71,-14.71l-20.37,0zm23.77,9.05c1.25,0 2.26,1.02 2.26,2.26c0,1.25 -1.02,2.26 -2.26,2.26c-1.25,0 -2.26,-1.02 -2.26,-2.26c0,-1.25 1.02,-2.26 2.26,-2.26zm-13.58,3.4c6.87,0 12.45,5.58 12.45,12.45c0,6.87 -5.58,12.45 -12.45,12.45c-6.87,0 -12.45,-5.58 -12.45,-12.45c0,-6.87 5.58,-12.45 12.45,-12.45zm0,2.26c-5.61,0 -10.19,4.57 -10.19,10.19c0,5.61 4.57,10.19 10.19,10.19c5.61,0 10.19,-4.57 10.19,-10.19c0,-5.61 -4.57,-10.19 -10.19,-10.19z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export const DiscordIcon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={50}
      height={50}
      viewBox="0 0 50 50"
      className={cx("w-full h-auto", className)}
      {...rest}
    >
      <path
        fillRule="evenodd"
        d="m30.54,20.25c-1.44,0 -2.6,1.33 -2.6,2.96c0,1.63 1.16,2.96 2.6,2.96s2.6,-1.33 2.6,-2.96c0,-1.63 -1.16,-2.96 -2.6,-2.96zm-11.06,0c-1.44,0 -2.6,1.33 -2.6,2.96c0,1.63 1.16,2.96 2.6,2.96s2.6,-1.33 2.6,-2.96c0,-1.63 -1.16,-2.96 -2.6,-2.96zm11.06,0c-1.44,0 -2.6,1.33 -2.6,2.96c0,1.63 1.16,2.96 2.6,2.96s2.6,-1.33 2.6,-2.96c0,-1.63 -1.16,-2.96 -2.6,-2.96zm-11.06,0c-1.44,0 -2.6,1.33 -2.6,2.96c0,1.63 1.16,2.96 2.6,2.96s2.6,-1.33 2.6,-2.96c0,-1.63 -1.16,-2.96 -2.6,-2.96zm22.12,-20.12l-33.18,0c-4.59,0 -8.3,3.36 -8.3,7.53l0,30.1c0,4.16 3.71,7.53 8.3,7.53l30.42,0l-1.05,-3.54l8.32,7.6c1.41,1.28 3.79,0.38 3.79,-1.4l0,-40.29c0,-4.16 -3.71,-7.53 -8.3,-7.53zm-1.19,29.45c-3.79,3.14 -8.74,3.16 -8.74,3.16l-1.19,-1.45c1.22,-0.38 2.27,-0.88 3.35,-1.63l-0.25,-0.6c-1.99,0.83 -4.56,1.33 -8.57,1.33s-6.58,-0.5 -8.57,-1.33l-0.25,0.6c1.08,0.75 2.13,1.25 3.35,1.63l-1.19,1.45c0,0 -4.95,-0.03 -8.74,-3.16c-0.61,-0.5 -0.86,-1.28 -0.8,-2.01c0.69,-7.25 3.15,-11.64 4.04,-12.99c0.19,-0.33 0.47,-0.58 0.8,-0.8c1.05,-0.63 3.68,-2.03 6.91,-2.33l0.83,1.53c1.19,-0.2 2.49,-0.35 3.62,-0.35c1.11,0 2.38,0.15 3.62,0.35l0.83,-1.53c3.1,0.23 5.83,1.68 6.91,2.33c0.33,0.23 0.61,0.48 0.8,0.8c0.88,1.38 3.35,5.74 4.04,12.99c0.06,0.73 -0.19,1.51 -0.8,2.01zm-9.87,-9.33c-1.44,0 -2.6,1.33 -2.6,2.96c0,1.63 1.16,2.96 2.6,2.96s2.6,-1.33 2.6,-2.96c0,-1.63 -1.16,-2.96 -2.6,-2.96zm-11.06,0c-1.44,0 -2.6,1.33 -2.6,2.96c0,1.63 1.16,2.96 2.6,2.96s2.6,-1.33 2.6,-2.96c0,-1.63 -1.16,-2.96 -2.6,-2.96z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export const FarcasterIcon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={50}
      height={50}
      viewBox="0 0 50 50"
      className={cx("w-full h-auto", className)}
      {...rest}
    >
      <path
        fillRule="evenodd"
        d="m8.64,0.12l32.13,0l0,49.76l-4.72,0l0,-22.79l-0.04,0c-0.52,-6.31 -5.39,-11.24 -11.3,-11.24c-5.92,0 -10.78,4.93 -11.3,11.24l-0.04,0l0,22.79l-4.72,0l0,-49.76zm0,0"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="m0.09,7.19l1.91,7.05l1.62,0l0,28.58c-0.81,0 -1.47,0.72 -1.47,1.62l0,1.92l-0.29,0c-0.82,0 -1.47,0.71 -1.47,1.6l0,1.92l16.5,0l0,-1.92c0,-0.9 -0.66,-1.6 -1.47,-1.6l-0.29,0l0,-1.92c0,-0.9 -0.66,-1.62 -1.47,-1.62l-1.78,0l0,-35.63l-11.78,0zm0,0"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="m36.35,42.82c-0.82,0 -1.47,0.72 -1.47,1.62l0,1.92l-0.29,0c-0.82,0 -1.49,0.71 -1.49,1.6l0,1.92l16.52,0l0,-1.92c0,-0.9 -0.66,-1.6 -1.47,-1.6l-0.29,0l0,-1.92c0,-0.9 -0.66,-1.62 -1.49,-1.62l0,-28.58l1.62,0l1.92,-7.05l-11.79,0l0,35.63l-1.76,0zm0,0"
        clipRule="evenodd"
      />
    </svg>
  );
};

export const ThehugxyzIcon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={50}
      height={50}
      viewBox="0 0 50 50"
      className={cx("w-full h-auto", className)}
      {...rest}
    >
      <path
        fillRule="evenodd"
        d="M 3.242188 0.492188 C 2.671875 0.753906 1.894531 1.296875 1.503906 1.710938 C -0.0507812 3.398438 0 2.464844 0 25.078125 C 0 44.65625 0.0273438 45.824219 0.492188 46.808594 C 0.753906 47.378906 1.296875 48.160156 1.710938 48.546875 C 3.398438 50.105469 2.464844 50.050781 25.027344 50.050781 C 47.589844 50.050781 46.65625 50.105469 48.339844 48.546875 C 48.753906 48.160156 49.300781 47.378906 49.558594 46.808594 C 50.027344 45.824219 50.050781 44.65625 50.050781 25.078125 C 50.050781 2.464844 50.105469 3.398438 48.546875 1.710938 C 48.160156 1.296875 47.378906 0.753906 46.808594 0.492188 C 45.824219 0.0273438 44.683594 0 25.027344 0 C 5.367188 0 4.226562 0.0273438 3.242188 0.492188 Z M 22.535156 8.273438 C 23.054688 8.636719 23.675781 9.492188 24.09375 10.347656 C 24.714844 11.722656 24.765625 12.085938 24.894531 16.726562 C 25.027344 21.445312 25.050781 21.65625 25.542969 21.65625 C 26.039062 21.65625 26.0625 21.445312 26.191406 16.597656 C 26.347656 10.867188 26.609375 9.90625 28.371094 8.351562 C 29.203125 7.625 29.488281 7.519531 30.835938 7.519531 C 31.976562 7.519531 32.546875 7.675781 33.222656 8.117188 C 34.308594 8.84375 35.425781 10.996094 35.917969 13.355469 C 36.878906 17.867188 37.007812 30.03125 36.175781 35.789062 C 35.347656 41.46875 33.222656 43.957031 29.980469 43.050781 C 28.554688 42.660156 27.59375 41.777344 26.867188 40.195312 C 26.425781 39.1875 26.324219 38.355469 26.191406 34.230469 C 26.0625 29.640625 26.039062 29.433594 25.542969 29.433594 C 25.050781 29.433594 25.027344 29.640625 24.894531 34.230469 C 24.765625 38.328125 24.664062 39.210938 24.222656 40.195312 C 23.574219 41.597656 22.378906 42.660156 21.058594 43.050781 C 19.710938 43.414062 19.242188 43.386719 18.050781 42.789062 C 15.378906 41.492188 14.367188 37.757812 14.082031 28.269531 C 13.925781 22.875 14.261719 16.675781 14.910156 13.640625 C 15.457031 11.074219 16.625 8.6875 17.6875 8.039062 C 18.878906 7.289062 21.316406 7.417969 22.535156 8.273438 Z M 22.535156 8.273438 "
        clipRule="evenodd"
      />
    </svg>
  );
};
