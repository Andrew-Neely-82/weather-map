import React from "react";

interface Props {
  style: React.CSSProperties;
}

const PartlyCloudy: React.FC<Props> = ({ style }) => {
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
        <clipPath id="__lottie_element_15">
          <rect width="50" height="50" x="0" y="0"></rect>
        </clipPath>
        <filter id="__lottie_element_20" filterUnits="objectBoundingBox" x="0%" y="0%" width="100%" height="100%">
          <feComponentTransfer in="SourceGraphic">
            <feFuncA type="table" tableValues="1.0 0.0"></feFuncA>
          </feComponentTransfer>
        </filter>
        <mask id="__lottie_element_19" mask-type="alpha">
          <g filter="url(#__lottie_element_20)">
            <rect width="50" height="50" x="0" y="0" fill="#ffffff" opacity="0"></rect>
            <g transform="matrix(1,0,0,1,0,0)" opacity="1" style={innerStyles}>
              <g opacity="1" transform="matrix(1,0,0,1,30.5,28.5)">
                <path fill="rgb(71,255,34)" fillOpacity="1" d=" M-10.5,14.5 C-15.461999893188477,14.5 -19.5,10.463000297546387 -19.5,5.5 C-19.5,1.6380000114440918 -17.017000198364258,-1.7419999837875366 -13.489999771118164,-2.990000009536743 C-13.232000350952148,-9.380000114440918 -7.953000068664551,-14.5 -1.5,-14.5 C3.257999897003174,-14.5 7.521999835968018,-11.677000045776367 9.430000305175781,-7.448999881744385 C9.784000396728516,-7.482999801635742 10.142000198364258,-7.5 10.5,-7.5 C16.565000534057617,-7.5 21.5,-2.565000057220459 21.5,3.5 C21.5,9.5649995803833 16.565000534057617,14.5 10.5,14.5 C10.5,14.5 -10.5,14.5 -10.5,14.5z"></path>
              </g>
            </g>
          </g>
        </mask>
      </defs>
      <g clipPath="url(#__lottie_element_15)">
        <g mask="url(#__lottie_element_19)" style={innerStyles}>
          <g transform="matrix(1,0,0,1,0,0)" opacity="1">
            <g opacity="1" transform="matrix(1,0,0,1,17,21)">
              <path fill="yellow" fillOpacity="1" d=" M8,0 C8,4.418000221252441 4.418000221252441,8 0,8 C-4.418000221252441,8 -8,4.418000221252441 -8,0 C-8,-4.418000221252441 -4.418000221252441,-8 0,-8 C4.418000221252441,-8 8,-4.418000221252441 8,0z"></path>
            </g>
            <g opacity="1" transform="matrix(0.9841238260269165,0.17748329043388367,-0.17748329043388367,0.9841238260269165,3.997044563293457,-2.683816909790039)">
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path fill="yellow" strokeLinecap="round" strokeLinejoin="round" fillOpacity="1" stroke="yellow" strokeOpacity="1" strokeWidth="2" d=" M17,32.45399856567383 C17,33.404998779296875 17,35.595001220703125 17,36.54600143432617"></path>
              </g>
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path fill="yellow" strokeLinecap="round" strokeLinejoin="round" fillOpacity="1" stroke="yellow" strokeOpacity="1" strokeWidth="2" d=" M32.54600143432617,21 C31.594999313354492,21 29.405000686645508,21 28.45400047302246,21"></path>
              </g>
              <g opacity="1" transform="matrix(1,0,0,1,26.54599952697754,30.54599952697754)">
                <path fill="yellow" strokeLinecap="round" strokeLinejoin="round" fillOpacity="1" stroke="yellow" strokeOpacity="1" strokeWidth="2" d=" M1.4470000267028809,1.4470000267028809 C0.7739999890327454,0.7739999890327454 -0.7739999890327454,-0.7739999890327454 -1.4470000267028809,-1.4470000267028809"></path>
              </g>
              <g fill="yellow" opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path strokeLinecap="round" strokeLinejoin="round" fillOpacity="1" stroke="yellow" strokeOpacity="1" strokeWidth="2" d=" M17,5.453999996185303 C17,6.40500020980835 17,8.595000267028809 17,9.545999526977539"></path>
              </g>
              <g opacity="1" transform="matrix(1,0,0,1,26.54599952697754,11.454000473022461)">
                <path strokeLinecap="round" strokeLinejoin="round" fillOpacity="1" stroke="yellow" strokeOpacity="1" strokeWidth="2" d=" M1.4470000267028809,-1.4470000267028809 C0.7739999890327454,-0.7739999890327454 -0.7739999890327454,0.7739999890327454 -1.4470000267028809,1.4470000267028809"></path>
              </g>
              <g opacity="1" transform="matrix(1,0,0,1,7.453999996185303,30.54599952697754)">
                <path strokeLinecap="round" strokeLinejoin="round" fillOpacity="1" stroke="yellow" strokeOpacity="1" strokeWidth="2" d=" M1.4470000267028809,-1.4470000267028809 C0.7739999890327454,-0.7739999890327454 -0.7739999890327454,0.7739999890327454 -1.4470000267028809,1.4470000267028809"></path>
              </g>
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path strokeLinecap="round" strokeLinejoin="round" fillOpacity="1" stroke="yellow" strokeOpacity="1" strokeWidth="2" d=" M5.546000003814697,21 C4.59499979019165,21 2.4049999713897705,21 1.4539999961853027,21"></path>
              </g>
              <g opacity="1" transform="matrix(1,0,0,1,7.453999996185303,11.454000473022461)">
                <path strokeLinecap="round" strokeLinejoin="round" fillOpacity="1" stroke="yellow" strokeOpacity="1" strokeWidth="2" d=" M1.4470000267028809,1.4470000267028809 C0.7739999890327454,0.7739999890327454 -0.7739999890327454,-0.7739999890327454 -1.4470000267028809,-1.4470000267028809"></path>
              </g>
            </g>
          </g>
        </g>
        <g transform="matrix(1,0,0,1,0,0)" opacity="1" style={innerStyles}>
          <g opacity="1" transform="matrix(1,0,0,1,31.5,28.5)">
            <path fill="gray" fillOpacity="1" d=" M9.5,12.5 C9.5,12.5 -11.5,12.5 -11.5,12.5 C-15.359999656677246,12.5 -18.5,9.359000205993652 -18.5,5.5 C-18.5,1.9589999914169312 -15.857000350952148,-0.9769999980926514 -12.4399995803833,-1.437999963760376 C-12.479999542236328,-1.7940000295639038 -12.5,-2.1480000019073486 -12.5,-2.5 C-12.5,-8.013999938964844 -8.013999938964844,-12.5 -2.5,-12.5 C2.065999984741211,-12.5 5.943999767303467,-9.487000465393066 7.125999927520752,-5.184000015258789 C7.894999980926514,-5.394000053405762 8.689000129699707,-5.5 9.5,-5.5 C14.463000297546387,-5.5 18.5,-1.4630000591278076 18.5,3.5 C18.5,8.463000297546387 14.463000297546387,12.5 9.5,12.5z"></path>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default PartlyCloudy;
