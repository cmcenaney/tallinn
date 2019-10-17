import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const data = [
    {
        "country": "AD",
        "hot dog": 54,
        "hot dogColor": "hsl(356, 70%, 50%)",
        "burger": 125,
        "burgerColor": "hsl(183, 70%, 50%)",
        "sandwich": 158,
        "sandwichColor": "hsl(187, 70%, 50%)",
        "kebab": 141,
        "kebabColor": "hsl(185, 70%, 50%)",
        "fries": 3,
        "friesColor": "hsl(53, 70%, 50%)",
        "donut": 72,
        "donutColor": "hsl(293, 70%, 50%)"
    },
    {
        "country": "AE",
        "hot dog": 90,
        "hot dogColor": "hsl(233, 70%, 50%)",
        "burger": 129,
        "burgerColor": "hsl(112, 70%, 50%)",
        "sandwich": 20,
        "sandwichColor": "hsl(136, 70%, 50%)",
        "kebab": 74,
        "kebabColor": "hsl(30, 70%, 50%)",
        "fries": 61,
        "friesColor": "hsl(22, 70%, 50%)",
        "donut": 148,
        "donutColor": "hsl(318, 70%, 50%)"
    },
    {
        "country": "AF",
        "hot dog": 180,
        "hot dogColor": "hsl(123, 70%, 50%)",
        "burger": 70,
        "burgerColor": "hsl(105, 70%, 50%)",
        "sandwich": 145,
        "sandwichColor": "hsl(88, 70%, 50%)",
        "kebab": 8,
        "kebabColor": "hsl(86, 70%, 50%)",
        "fries": 165,
        "friesColor": "hsl(254, 70%, 50%)",
        "donut": 135,
        "donutColor": "hsl(75, 70%, 50%)"
    },
    {
        "country": "AG",
        "hot dog": 113,
        "hot dogColor": "hsl(330, 70%, 50%)",
        "burger": 107,
        "burgerColor": "hsl(32, 70%, 50%)",
        "sandwich": 126,
        "sandwichColor": "hsl(87, 70%, 50%)",
        "kebab": 85,
        "kebabColor": "hsl(20, 70%, 50%)",
        "fries": 47,
        "friesColor": "hsl(61, 70%, 50%)",
        "donut": 53,
        "donutColor": "hsl(15, 70%, 50%)"
    },
    {
        "country": "AI",
        "hot dog": 75,
        "hot dogColor": "hsl(163, 70%, 50%)",
        "burger": 193,
        "burgerColor": "hsl(324, 70%, 50%)",
        "sandwich": 124,
        "sandwichColor": "hsl(79, 70%, 50%)",
        "kebab": 13,
        "kebabColor": "hsl(203, 70%, 50%)",
        "fries": 90,
        "friesColor": "hsl(248, 70%, 50%)",
        "donut": 110,
        "donutColor": "hsl(356, 70%, 50%)"
    },
    {
        "country": "AL",
        "hot dog": 86,
        "hot dogColor": "hsl(355, 70%, 50%)",
        "burger": 82,
        "burgerColor": "hsl(100, 70%, 50%)",
        "sandwich": 152,
        "sandwichColor": "hsl(357, 70%, 50%)",
        "kebab": 161,
        "kebabColor": "hsl(302, 70%, 50%)",
        "fries": 7,
        "friesColor": "hsl(299, 70%, 50%)",
        "donut": 191,
        "donutColor": "hsl(199, 70%, 50%)"
    },
    {
        "country": "AM",
        "hot dog": 159,
        "hot dogColor": "hsl(178, 70%, 50%)",
        "burger": 103,
        "burgerColor": "hsl(255, 70%, 50%)",
        "sandwich": 7,
        "sandwichColor": "hsl(0, 70%, 50%)",
        "kebab": 47,
        "kebabColor": "hsl(7, 70%, 50%)",
        "fries": 13,
        "friesColor": "hsl(31, 70%, 50%)",
        "donut": 102,
        "donutColor": "hsl(169, 70%, 50%)"
    }
];

const MyResponsiveBar = () => (
  <ResponsiveBar
    data={data}
    keys={['hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut']}
    indexBy="country"
    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    padding={0.3}
    colors={{ scheme: 'nivo' }}
    defs={[
      {
        id: 'dots',
        type: 'patternDots',
        background: 'inherit',
        color: '#38bcb2',
        size: 4,
        padding: 1,
        stagger: true,
      },
      {
        id: 'lines',
        type: 'patternLines',
        background: 'inherit',
        color: '#eed312',
        rotation: -45,
        lineWidth: 6,
        spacing: 10,
      },
    ]}
    fill={[
      {
        match: {
          id: 'fries',
        },
        id: 'dots',
      },
      {
        match: {
          id: 'sandwich',
        },
        id: 'lines',
      },
    ]}
    borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'country',
      legendPosition: 'middle',
      legendOffset: 32,
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'food',
      legendPosition: 'middle',
      legendOffset: -40,
    }}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
    legends={[
      {
        dataFrom: 'keys',
        anchor: 'bottom-right',
        direction: 'column',
        justify: false,
        translateX: 120,
        translateY: 0,
        itemsSpacing: 2,
        itemWidth: 100,
        itemHeight: 20,
        itemDirection: 'left-to-right',
        itemOpacity: 0.85,
        symbolSize: 20,
        effects: [
          {
            on: 'hover',
            style: {
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
    animate={true}
    motionStiffness={90}
    motionDamping={15}
  />
);

export default MyResponsiveBar;
