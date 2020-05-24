import React from "react";

function Diagram(props) {
    const { limbs } = props
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="200"
      height="200"
      viewBox="0 0 640 640"
      preserveAspectRatio="none"
    >
      <defs>
        <path id="c12YuPG74m" d="M475.93 420H123.39"></path>
        <path id="dDkam8NZK" d="M320 66.99H185.4V420"></path>
        {(limbs > 0) ? <path
          id="aOFRxtWi7"
          d="M359.1 127.05c0 22.52-17.52 40.8-39.1 40.8-21.58 0-39.1-18.28-39.1-40.8 0-22.52 17.52-40.8 39.1-40.8 21.58 0 39.1 18.28 39.1 40.8z"
        ></path> : null}
        {(limbs > 1) ? <path id="a1tnXacWQ" d="M320 291.95v-124.1"></path> : null}
        {(limbs > 2) ? <path id="a3z7eQOYxJ" d="M416.9 167.85l-96.9 37.4"></path> : null}
        {(limbs > 3) ? <path id="b9hv6OdxZq" d="M223.1 167.85l96.9 37.4"></path> : null}
        {(limbs > 4) ? <path id="d1k8Q6WPCG" d="M368.45 404.15L320 291.95"></path> : null}
        {(limbs > 5) ? <path id="eZVs1Sm32" d="M271.55 404.15L320 291.95"></path> : null}
      </defs>
      <filter
        id="shadow16571543"
        width="386.54"
        height="34"
        x="109.39"
        y="406"
        filterUnits="userSpaceOnUse"
        primitiveUnits="userSpaceOnUse"
      >
        <feFlood></feFlood>
        <feComposite in2="SourceAlpha" operator="in"></feComposite>
        <feGaussianBlur stdDeviation="1"></feGaussianBlur>
        <feOffset dx="6" dy="6" result="afterOffset"></feOffset>
        <feFlood floodColor="#000" floodOpacity="0.5"></feFlood>
        <feComposite in2="afterOffset" operator="in"></feComposite>
        <feMorphology operator="dilate" radius="1"></feMorphology>
        <feComposite in2="SourceAlpha" operator="out"></feComposite>
      </filter>
      <path
        fill="none"
        stroke="#fff"
        d="M475.93 420H123.39"
        filter="url(#shadow16571543)"
      ></path>
      <use
        fillOpacity="0"
        stroke="#000"
        strokeWidth="6"
        xlinkHref="#c12YuPG74m"
      ></use>
      <use
        fillOpacity="0"
        stroke="#000"
        strokeWidth="5"
        xlinkHref="#dDkam8NZK"
      ></use>
      <use xlinkHref="#aOFRxtWi7"></use>
      <use
        fillOpacity="0"
        stroke="#000"
        strokeWidth="6"
        xlinkHref="#a1tnXacWQ"
      ></use>
      <use
        fillOpacity="0"
        stroke="#000"
        strokeWidth="4"
        xlinkHref="#a3z7eQOYxJ"
      ></use>
      <use
        fillOpacity="0"
        stroke="#000"
        strokeWidth="4"
        xlinkHref="#b9hv6OdxZq"
      ></use>
      <g>
        <use
          fillOpacity="0"
          stroke="#000"
          strokeWidth="4"
          xlinkHref="#d1k8Q6WPCG"
        ></use>
      </g>
      <g>
        <use
          fillOpacity="0"
          stroke="#000"
          strokeWidth="4"
          xlinkHref="#eZVs1Sm32"
        ></use>
      </g>
    </svg>
  );
}

export default Diagram;
