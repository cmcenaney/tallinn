import React from 'react';
import { ResponsiveBubble } from '@nivo/circle-packing';
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const root = {
    "name": "nivo",
    "color": "hsl(13, 70%, 50%)",
    "children": [
        {
            "name": "viz",
            "color": "hsl(49, 70%, 50%)",
            "children": [
                {
                    "name": "stack",
                    "color": "hsl(68, 70%, 50%)",
                    "children": [
                        {
                            "name": "chart",
                            "color": "hsl(87, 70%, 50%)",
                            "loc": 1741
                        },
                        {
                            "name": "xAxis",
                            "color": "hsl(343, 70%, 50%)",
                            "loc": 188079
                        },
                        {
                            "name": "yAxis",
                            "color": "hsl(216, 70%, 50%)",
                            "loc": 176226
                        },
                        {
                            "name": "layers",
                            "color": "hsl(192, 70%, 50%)",
                            "loc": 112188
                        }
                    ]
                },
                {
                    "name": "pie",
                    "color": "hsl(134, 70%, 50%)",
                    "children": [
                        {
                            "name": "chart",
                            "color": "hsl(315, 70%, 50%)",
                            "children": [
                                {
                                    "name": "pie",
                                    "color": "hsl(5, 70%, 50%)",
                                    "children": [
                                        {
                                            "name": "outline",
                                            "color": "hsl(359, 70%, 50%)",
                                            "loc": 148603
                                        },
                                        {
                                            "name": "slices",
                                            "color": "hsl(89, 70%, 50%)",
                                            "loc": 84418
                                        },
                                        {
                                            "name": "bbox",
                                            "color": "hsl(41, 70%, 50%)",
                                            "loc": 170553
                                        }
                                    ]
                                },
                                {
                                    "name": "donut",
                                    "color": "hsl(272, 70%, 50%)",
                                    "loc": 103174
                                },
                                {
                                    "name": "gauge",
                                    "color": "hsl(70, 70%, 50%)",
                                    "loc": 136082
                                }
                            ]
                        },
                        {
                            "name": "legends",
                            "color": "hsl(148, 70%, 50%)",
                            "loc": 26036
                        }
                    ]
                }
            ]
        },
        {
            "name": "colors",
            "color": "hsl(182, 70%, 50%)",
            "children": [
                {
                    "name": "rgb",
                    "color": "hsl(42, 70%, 50%)",
                    "loc": 72781
                },
                {
                    "name": "hsl",
                    "color": "hsl(40, 70%, 50%)",
                    "loc": 12018
                }
            ]
        },
        {
            "name": "utils",
            "color": "hsl(10, 70%, 50%)",
            "children": [
                {
                    "name": "randomize",
                    "color": "hsl(357, 70%, 50%)",
                    "loc": 44841
                },
                {
                    "name": "resetClock",
                    "color": "hsl(193, 70%, 50%)",
                    "loc": 185883
                },
                {
                    "name": "noop",
                    "color": "hsl(334, 70%, 50%)",
                    "loc": 47166
                },
                {
                    "name": "tick",
                    "color": "hsl(332, 70%, 50%)",
                    "loc": 132365
                },
                {
                    "name": "forceGC",
                    "color": "hsl(343, 70%, 50%)",
                    "loc": 42423
                },
                {
                    "name": "stackTrace",
                    "color": "hsl(272, 70%, 50%)",
                    "loc": 12271
                },
                {
                    "name": "dbg",
                    "color": "hsl(165, 70%, 50%)",
                    "loc": 167071
                }
            ]
        },
        {
            "name": "generators",
            "color": "hsl(270, 70%, 50%)",
            "children": [
                {
                    "name": "address",
                    "color": "hsl(222, 70%, 50%)",
                    "loc": 50272
                },
                {
                    "name": "city",
                    "color": "hsl(260, 70%, 50%)",
                    "loc": 143661
                },
                {
                    "name": "animal",
                    "color": "hsl(26, 70%, 50%)",
                    "loc": 111304
                },
                {
                    "name": "movie",
                    "color": "hsl(16, 70%, 50%)",
                    "loc": 18204
                },
                {
                    "name": "user",
                    "color": "hsl(30, 70%, 50%)",
                    "loc": 25203
                }
            ]
        },
        {
            "name": "set",
            "color": "hsl(90, 70%, 50%)",
            "children": [
                {
                    "name": "clone",
                    "color": "hsl(246, 70%, 50%)",
                    "loc": 33132
                },
                {
                    "name": "intersect",
                    "color": "hsl(288, 70%, 50%)",
                    "loc": 109127
                },
                {
                    "name": "merge",
                    "color": "hsl(329, 70%, 50%)",
                    "loc": 31510
                },
                {
                    "name": "reverse",
                    "color": "hsl(328, 70%, 50%)",
                    "loc": 21703
                },
                {
                    "name": "toArray",
                    "color": "hsl(122, 70%, 50%)",
                    "loc": 146387
                },
                {
                    "name": "toObject",
                    "color": "hsl(303, 70%, 50%)",
                    "loc": 137035
                },
                {
                    "name": "fromCSV",
                    "color": "hsl(220, 70%, 50%)",
                    "loc": 61495
                },
                {
                    "name": "slice",
                    "color": "hsl(16, 70%, 50%)",
                    "loc": 10914
                },
                {
                    "name": "append",
                    "color": "hsl(114, 70%, 50%)",
                    "loc": 29416
                },
                {
                    "name": "prepend",
                    "color": "hsl(196, 70%, 50%)",
                    "loc": 146303
                },
                {
                    "name": "shuffle",
                    "color": "hsl(181, 70%, 50%)",
                    "loc": 100570
                },
                {
                    "name": "pick",
                    "color": "hsl(178, 70%, 50%)",
                    "loc": 47173
                },
                {
                    "name": "plouc",
                    "color": "hsl(272, 70%, 50%)",
                    "loc": 45547
                }
            ]
        },
        {
            "name": "text",
            "color": "hsl(296, 70%, 50%)",
            "children": [
                {
                    "name": "trim",
                    "color": "hsl(213, 70%, 50%)",
                    "loc": 46175
                },
                {
                    "name": "slugify",
                    "color": "hsl(242, 70%, 50%)",
                    "loc": 28714
                },
                {
                    "name": "snakeCase",
                    "color": "hsl(241, 70%, 50%)",
                    "loc": 172791
                },
                {
                    "name": "camelCase",
                    "color": "hsl(31, 70%, 50%)",
                    "loc": 149606
                },
                {
                    "name": "repeat",
                    "color": "hsl(128, 70%, 50%)",
                    "loc": 190181
                },
                {
                    "name": "padLeft",
                    "color": "hsl(18, 70%, 50%)",
                    "loc": 85289
                },
                {
                    "name": "padRight",
                    "color": "hsl(311, 70%, 50%)",
                    "loc": 191386
                },
                {
                    "name": "sanitize",
                    "color": "hsl(217, 70%, 50%)",
                    "loc": 117256
                },
                {
                    "name": "ploucify",
                    "color": "hsl(217, 70%, 50%)",
                    "loc": 38856
                }
            ]
        },
        {
            "name": "misc",
            "color": "hsl(222, 70%, 50%)",
            "children": [
                {
                    "name": "whatever",
                    "color": "hsl(338, 70%, 50%)",
                    "children": [
                        {
                            "name": "hey",
                            "color": "hsl(193, 70%, 50%)",
                            "loc": 113595
                        },
                        {
                            "name": "WTF",
                            "color": "hsl(216, 70%, 50%)",
                            "loc": 65093
                        },
                        {
                            "name": "lol",
                            "color": "hsl(276, 70%, 50%)",
                            "loc": 15701
                        },
                        {
                            "name": "IMHO",
                            "color": "hsl(139, 70%, 50%)",
                            "loc": 70525
                        }
                    ]
                },
                {
                    "name": "other",
                    "color": "hsl(86, 70%, 50%)",
                    "loc": 90952
                },
                {
                    "name": "crap",
                    "color": "hsl(183, 70%, 50%)",
                    "children": [
                        {
                            "name": "crapA",
                            "color": "hsl(126, 70%, 50%)",
                            "loc": 144270
                        },
                        {
                            "name": "crapB",
                            "color": "hsl(12, 70%, 50%)",
                            "children": [
                                {
                                    "name": "crapB1",
                                    "color": "hsl(228, 70%, 50%)",
                                    "loc": 6630
                                },
                                {
                                    "name": "crapB2",
                                    "color": "hsl(51, 70%, 50%)",
                                    "loc": 24516
                                },
                                {
                                    "name": "crapB3",
                                    "color": "hsl(35, 70%, 50%)",
                                    "loc": 127456
                                },
                                {
                                    "name": "crapB4",
                                    "color": "hsl(198, 70%, 50%)",
                                    "loc": 20466
                                }
                            ]
                        },
                        {
                            "name": "crapC",
                            "color": "hsl(116, 70%, 50%)",
                            "children": [
                                {
                                    "name": "crapC1",
                                    "color": "hsl(136, 70%, 50%)",
                                    "loc": 143851
                                },
                                {
                                    "name": "crapC2",
                                    "color": "hsl(91, 70%, 50%)",
                                    "loc": 165667
                                },
                                {
                                    "name": "crapC3",
                                    "color": "hsl(103, 70%, 50%)",
                                    "loc": 120535
                                },
                                {
                                    "name": "crapC4",
                                    "color": "hsl(352, 70%, 50%)",
                                    "loc": 161428
                                },
                                {
                                    "name": "crapC5",
                                    "color": "hsl(2, 70%, 50%)",
                                    "loc": 51252
                                },
                                {
                                    "name": "crapC6",
                                    "color": "hsl(345, 70%, 50%)",
                                    "loc": 191816
                                },
                                {
                                    "name": "crapC7",
                                    "color": "hsl(101, 70%, 50%)",
                                    "loc": 133529
                                },
                                {
                                    "name": "crapC8",
                                    "color": "hsl(110, 70%, 50%)",
                                    "loc": 177646
                                },
                                {
                                    "name": "crapC9",
                                    "color": "hsl(55, 70%, 50%)",
                                    "loc": 93137
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};

const MyResponsiveBubble = () => (
    <ResponsiveBubble
        root={root}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        identity="name"
        value="loc"
        colors={{ scheme: 'nivo' }}
        padding={6}
        leavesOnly={true}
        enableLabel={false}
        labelTextColor={{ from: 'color', modifiers: [['darker', 0.8]] }}
        borderWidth={2}
        borderColor={{ from: 'color' }}
        defs={[
            {
                id: 'lines',
                type: 'patternLines',
                background: 'none',
                color: 'inherit',
                rotation: -45,
                lineWidth: 5,
                spacing: 8
            }
        ]}
        fill={[{ match: { depth: 1 }, id: 'lines' }]}
        animate={true}
        motionStiffness={90}
        motionDamping={12}
    />
)

export default MyResponsiveBubble;