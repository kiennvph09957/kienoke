import {Text, View} from 'react-native';
import React, {Component} from 'react';
import Svg, {Path, G, Defs} from 'react-native-svg';
import sizes from './sizes';
export class CustomSvgBottom extends React.Component {
  render() {
    return (
      <Svg width={414} height={161} viewBox="0 0 414 161" fill="none">
        <Path
          d="M410.064 277.024l12.917-213.53-2.215-.134-.007.006c-14.163 49.68-68.096 84.642-129.567 80.923l-87.344-5.283c-117.62-7.115-202.41 51.674-218.83 112.312l425.046 25.712v-.006z"
          fill="#ED1B2F"
          fillOpacity={0.2}
        />
        <G filter="url(#filter0_d_310_1022)">
          <Path
            d="M381.633 315.806L419 61.906l-2.192-.322-.008.006c-19.813 58.253-77.571 96.019-138.404 87.065l-86.437-12.721C75.561 118.803-15.681 182.741-39 253.906l420.631 61.907.002-.007z"
            fill="#ED1B2F"
            fillOpacity={0.2}
            shapeRendering="crispEdges"
          />
        </G>
        <G filter="url(#filter1_d_310_1022)">
          <Path
            d="M416 269.9V56.906h-2.194l-.007.006c-11.011 50.226-62.149 88.216-123.035 88.216h-86.513C87.751 145.128 7.584 208.654-5 269.906h421v-.006z"
            fill="#EF0B0B"
          />
        </G>
        <Defs></Defs>
      </Svg>
    );
  }
}

export default CustomSvgBottom;

{
  /* <path
  xmlns="http://www.w3.org/2000/svg"
  d="M416 213.9V0.90625H413.806L413.799 0.912126C402.788 51.1383 351.65 89.128 290.764 89.128H204.251C87.7507 89.128 7.58369 152.654 -5 213.906H416V213.9Z"
  fill="#EF0B0B"
/>; */
}

{
  /* <path
  xmlns="http://www.w3.org/2000/svg"
  d="M381.633 254.806L419 0.906305L416.808 0.583681L416.8 0.58969C396.987 58.8426 339.229 96.6086 278.396 87.6555L191.959 74.9341C75.5606 57.8032 -15.6812 121.741 -38.9999 192.906L381.631 254.813L381.633 254.806Z"
  fill="#ED1B2F"
  fill-opacity="0.2"
  shape-rendering="crispEdges"
/>; */
}

{
  /* <path
  xmlns="http://www.w3.org/2000/svg"
  d="M410.064 214.024L422.981 0.494375L420.766 0.360378L420.759 0.365855C406.596 50.0459 352.663 85.008 291.192 81.2894L203.848 76.0057C86.2277 68.8905 1.43787 127.68 -14.9814 188.318L410.064 214.03L410.064 214.024Z"
  fill="#ED1B2F"
  fill-opacity="0.2"
/>; */
}
