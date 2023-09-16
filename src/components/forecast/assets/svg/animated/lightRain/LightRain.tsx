import React from "react";

interface Props {
  style: React.CSSProperties;
}

const LightRain: React.FC<Props> = ({ style }) => {
  const svgStyles: React.CSSProperties = {
    width: "100%",
    height: "100%",
    transform: "translate3d(0px, 0px, 0px)",
    ...style,
  };

  const innerStyles: React.CSSProperties = {
    display: "block",
  };

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50" height="50" preserveAspectRatio="xMidYMid meet" style={svgStyles}>
      <defs>
        <clipPath id="__lottie_element_39">
          <rect width="50" height="50" x="0" y="0"></rect>
        </clipPath>
      </defs>
      <g clipPath="url(#__lottie_element_39)">
        <g transform="matrix(1,0,0,1,0,0)" opacity="1" style={innerStyles}>
          <path fill="rgb(0,0,0)" fillOpacity="1" d=" M36,31 C40.97,31 45,26.97 45,22 C45,17.03 40.97,13 36,13 C34.51,13 33.11,13.37 31.87,14.01 C31.15,9.47 27.24,6 22.5,6 C17.25,6 13,10.25 13,15.5 C13,16.05 13.06,16.58 13.15,17.1 C12.77,17.04 12.39,17 12,17 C8.13,17 5,20.13 5,24 C5,27.87 8.13,31 12,31 C12,31 36,31 36,31z"></path>
          <g opacity="1" transform="matrix(1,0,0,1,25,18.5)">
            <path strokeLinecap="round" strokeLinejoin="miter" fillOpacity="0" strokeMiterlimit="10" stroke="rgb(0,0,0)" strokeOpacity="1" strokeWidth="2" d=" M11,12.5 C15.970999717712402,12.5 20,8.470999717712402 20,3.5 C20,-1.4709999561309814 15.970999717712402,-5.5 11,-5.5 C9.510000228881836,-5.5 8.109000205993652,-5.131999969482422 6.870999813079834,-4.492000102996826 C6.1539998054504395,-9.027999877929688 2.23799991607666,-12.5 -2.5,-12.5 C-7.745999813079834,-12.5 -12,-8.246999740600586 -12,-3 C-12,-2.453000068664551 -11.942999839782715,-1.9199999570846558 -11.854000091552734,-1.3980000019073486 C-12.229000091552734,-1.4600000381469727 -12.609000205993652,-1.5 -13,-1.5 C-16.865999221801758,-1.5 -20,1.6339999437332153 -20,5.5 C-20,9.366000175476074 -16.865999221801758,12.5 -13,12.5 C-13,12.5 11,12.5 11,12.5z"></path>
          </g>
        </g>
        <g style={innerStyles} transform="matrix(1,0,0,1,0,0)" opacity="1">
          <g opacity="1" transform="matrix(1,0,0,1,19.929000854492188,31.229999542236328)">
            <path strokeLinecap="round" strokeLinejoin="miter" fillOpacity="0" strokeMiterlimit="10" stroke="rgb(0,0,0)" strokeOpacity="1" strokeWidth="2" d=" M-0.3050000071525574,0.8960000276565552 C-0.34299999475479126,1.0729999542236328 -0.3700000047683716,1.2029999494552612 -0.3700000047683716,1.2029999494552612"></path>
          </g>
        </g>
        <g style={innerStyles} transform="matrix(1,0,0,1,0,0)" opacity="1">
          <g opacity="1" transform="matrix(1,0,0,1,26.086000442504883,30.719999313354492)">
            <path strokeLinecap="round" strokeLinejoin="miter" fillOpacity="0" strokeMiterlimit="10" stroke="rgb(0,0,0)" strokeOpacity="1" strokeWidth="2" d=" M0.006000000052154064,0.29499998688697815 C0.006000000052154064,0.29499998688697815 -0.38100001215934753,1.2359999418258667 -0.38100001215934753,1.2359999418258667"></path>
          </g>
        </g>
        <g style={innerStyles} transform="matrix(1,0,0,1,0,0)" opacity="1">
          <g opacity="1" transform="matrix(1,0,0,1,17.91200065612793,37.784000396728516)">
            <path strokeLinecap="round" strokeLinejoin="miter" fillOpacity="0" strokeMiterlimit="10" stroke="rgb(0,0,0)" strokeOpacity="1" strokeWidth="2" d=" M0.22100000083446503,-0.7170000076293945 C0.22100000083446503,-0.7170000076293945 0.15800000727176666,-0.5120000243186951 0.07900000363588333,-0.25699999928474426"></path>
          </g>
        </g>
        <g style={innerStyles} transform="matrix(1,0,0,1,0,0)" opacity="1">
          <g opacity="1" transform="matrix(1,0,0,1,24.27899932861328,36.59299850463867)">
            <path strokeLinecap="round" strokeLinejoin="miter" fillOpacity="0" strokeMiterlimit="10" stroke="rgb(0,0,0)" strokeOpacity="1" strokeWidth="2" d="M0 0"></path>
          </g>
        </g>
        <g style={{ display: "none" }} transform="matrix(1,0,0,1,0,0)" opacity="1">
          <g opacity="1" transform="matrix(1,0,0,1,22.756999969482422,41.53799819946289)">
            <path strokeLinecap="round" strokeLinejoin="miter" fillOpacity="0" strokeMiterlimit="10" stroke="rgb(0,0,0)" strokeOpacity="1" strokeWidth="2" d=" M0.14800000190734863,-0.4779999852180481 C0.14800000190734863,-0.4779999852180481 0.05900000035762787,-0.1899999976158142 -0.02199999988079071,0.0689999982714653"></path>
          </g>
        </g>
        <g transform="matrix(1,0,0,1,0,0)" opacity="1" style={innerStyles}>
          <g opacity="1" transform="matrix(1,0,0,1,22.756999969482422,41.53799819946289)">
            <path strokeLinecap="round" strokeLinejoin="miter" fillOpacity="0" strokeMiterlimit="10" stroke="rgb(0,0,0)" strokeOpacity="1" strokeWidth="2" d="M0 0"></path>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default LightRain;
