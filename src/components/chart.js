import { Bubble } from '@nivo/circle-packing'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const Chart = ({ root /* see root tab */ }) => (
    <Bubble
        root={{
            "name": "nivo",
                "color": "hsl(65, 70%, 50%)",
                    "children": [
                        {
                            "name": "viz",
                            "color": "hsl(211, 70%, 50%)",
                            "children": [
                                {
                                    "name": "stack",
                                    "color": "hsl(38, 70%, 50%)",
                                    "children": [
                                        {
                                            "name": "chart",
                                            "color": "hsl(162, 70%, 50%)",
                                            "loc": 144796
                                        },
                                        {
                                            "name": "xAxis",
                                            "color": "hsl(171, 70%, 50%)",
                                            "loc": 20766
                                        },
                                        {
                                            "name": "yAxis",
                                            "color": "hsl(256, 70%, 50%)",
                                            "loc": 83153
                                        },
                                        {
                                            "name": "layers",
                                            "color": "hsl(14, 70%, 50%)",
                                            "loc": 28421
                                        }
                                    ]
                                },
                                {
                                    "name": "pie",
                                    "color": "hsl(248, 70%, 50%)",
                                    "children": [
                                        {
                                            "name": "chart",
                                            "color": "hsl(247, 70%, 50%)",
                                            "children": [
                                                {
                                                    "name": "pie",
                                                    "color": "hsl(340, 70%, 50%)",
                                                    "children": [
                                                        {
                                                            "name": "outline",
                                                            "color": "hsl(302, 70%, 50%)",
                                                            "loc": 13028
                                                        },
                                                        {
                                                            "name": "slices",
                                                            "color": "hsl(161, 70%, 50%)",
                                                            "loc": 94532
                                                        },
                                                        {
                                                            "name": "bbox",
                                                            "color": "hsl(271, 70%, 50%)",
                                                            "loc": 35744
                                                        }
                                                    ]
                                                },
                                                {
                                                    "name": "donut",
                                                    "color": "hsl(61, 70%, 50%)",
                                                    "loc": 80035
                                                },
                                                {
                                                    "name": "gauge",
                                                    "color": "hsl(296, 70%, 50%)",
                                                    "loc": 81233
                                                }
                                            ]
                                        },
                                        {
                                            "name": "legends",
                                            "color": "hsl(40, 70%, 50%)",
                                            "loc": 163515
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
                                    "color": "hsl(242, 70%, 50%)",
                                    "loc": 46827
                                },
                                {
                                    "name": "hsl",
                                    "color": "hsl(288, 70%, 50%)",
                                    "loc": 7296
                                }
                            ]
                        },
                        {
                            "name": "utils",
                            "color": "hsl(316, 70%, 50%)",
                            "children": [
                                {
                                    "name": "randomize",
                                    "color": "hsl(180, 70%, 50%)",
                                    "loc": 103919
                                },
                                {
                                    "name": "resetClock",
                                    "color": "hsl(63, 70%, 50%)",
                                    "loc": 95513
                                },
                                {
                                    "name": "noop",
                                    "color": "hsl(52, 70%, 50%)",
                                    "loc": 52588
                                },
                                {
                                    "name": "tick",
                                    "color": "hsl(15, 70%, 50%)",
                                    "loc": 169971
                                },
                                {
                                    "name": "forceGC",
                                    "color": "hsl(22, 70%, 50%)",
                                    "loc": 130137
                                },
                                {
                                    "name": "stackTrace",
                                    "color": "hsl(233, 70%, 50%)",
                                    "loc": 114800
                                },
                                {
                                    "name": "dbg",
                                    "color": "hsl(55, 70%, 50%)",
                                    "loc": 139420
                                }
                            ]
                        },
                        {
                            "name": "generators",
                            "color": "hsl(335, 70%, 50%)",
                            "children": [
                                {
                                    "name": "address",
                                    "color": "hsl(306, 70%, 50%)",
                                    "loc": 193160
                                },
                                {
                                    "name": "city",
                                    "color": "hsl(106, 70%, 50%)",
                                    "loc": 37433
                                },
                                {
                                    "name": "animal",
                                    "color": "hsl(45, 70%, 50%)",
                                    "loc": 108570
                                },
                                {
                                    "name": "movie",
                                    "color": "hsl(150, 70%, 50%)",
                                    "loc": 136331
                                },
                                {
                                    "name": "user",
                                    "color": "hsl(250, 70%, 50%)",
                                    "loc": 159551
                                }
                            ]
                        },
                        {
                            "name": "set",
                            "color": "hsl(111, 70%, 50%)",
                            "children": [
                                {
                                    "name": "clone",
                                    "color": "hsl(23, 70%, 50%)",
                                    "loc": 51268
                                },
                                {
                                    "name": "intersect",
                                    "color": "hsl(309, 70%, 50%)",
                                    "loc": 35555
                                },
                                {
                                    "name": "merge",
                                    "color": "hsl(165, 70%, 50%)",
                                    "loc": 155989
                                },
                                {
                                    "name": "reverse",
                                    "color": "hsl(2, 70%, 50%)",
                                    "loc": 105369
                                },
                                {
                                    "name": "toArray",
                                    "color": "hsl(100, 70%, 50%)",
                                    "loc": 41098
                                },
                                {
                                    "name": "toObject",
                                    "color": "hsl(240, 70%, 50%)",
                                    "loc": 130922
                                },
                                {
                                    "name": "fromCSV",
                                    "color": "hsl(26, 70%, 50%)",
                                    "loc": 152255
                                },
                                {
                                    "name": "slice",
                                    "color": "hsl(107, 70%, 50%)",
                                    "loc": 185338
                                },
                                {
                                    "name": "append",
                                    "color": "hsl(117, 70%, 50%)",
                                    "loc": 146712
                                },
                                {
                                    "name": "prepend",
                                    "color": "hsl(65, 70%, 50%)",
                                    "loc": 156019
                                },
                                {
                                    "name": "shuffle",
                                    "color": "hsl(30, 70%, 50%)",
                                    "loc": 124897
                                },
                                {
                                    "name": "pick",
                                    "color": "hsl(163, 70%, 50%)",
                                    "loc": 112014
                                },
                                {
                                    "name": "plouc",
                                    "color": "hsl(196, 70%, 50%)",
                                    "loc": 147708
                                }
                            ]
                        },
                        {
                            "name": "text",
                            "color": "hsl(266, 70%, 50%)",
                            "children": [
                                {
                                    "name": "trim",
                                    "color": "hsl(357, 70%, 50%)",
                                    "loc": 79696
                                },
                                {
                                    "name": "slugify",
                                    "color": "hsl(211, 70%, 50%)",
                                    "loc": 165585
                                },
                                {
                                    "name": "snakeCase",
                                    "color": "hsl(119, 70%, 50%)",
                                    "loc": 9733
                                },
                                {
                                    "name": "camelCase",
                                    "color": "hsl(346, 70%, 50%)",
                                    "loc": 3526
                                },
                                {
                                    "name": "repeat",
                                    "color": "hsl(160, 70%, 50%)",
                                    "loc": 79659
                                },
                                {
                                    "name": "padLeft",
                                    "color": "hsl(269, 70%, 50%)",
                                    "loc": 157278
                                },
                                {
                                    "name": "padRight",
                                    "color": "hsl(257, 70%, 50%)",
                                    "loc": 152492
                                },
                                {
                                    "name": "sanitize",
                                    "color": "hsl(317, 70%, 50%)",
                                    "loc": 6608
                                },
                                {
                                    "name": "ploucify",
                                    "color": "hsl(104, 70%, 50%)",
                                    "loc": 61990
                                }
                            ]
                        },
                        {
                            "name": "misc",
                            "color": "hsl(35, 70%, 50%)",
                            "children": [
                                {
                                    "name": "whatever",
                                    "color": "hsl(284, 70%, 50%)",
                                    "children": [
                                        {
                                            "name": "hey",
                                            "color": "hsl(77, 70%, 50%)",
                                            "loc": 186656
                                        },
                                        {
                                            "name": "WTF",
                                            "color": "hsl(125, 70%, 50%)",
                                            "loc": 116772
                                        },
                                        {
                                            "name": "lol",
                                            "color": "hsl(336, 70%, 50%)",
                                            "loc": 137829
                                        },
                                        {
                                            "name": "IMHO",
                                            "color": "hsl(23, 70%, 50%)",
                                            "loc": 192075
                                        }
                                    ]
                                },
                                {
                                    "name": "other",
                                    "color": "hsl(158, 70%, 50%)",
                                    "loc": 174139
                                },
                                {
                                    "name": "crap",
                                    "color": "hsl(156, 70%, 50%)",
                                    "children": [
                                        {
                                            "name": "crapA",
                                            "color": "hsl(318, 70%, 50%)",
                                            "loc": 173543
                                        },
                                        {
                                            "name": "crapB",
                                            "color": "hsl(316, 70%, 50%)",
                                            "children": [
                                                {
                                                    "name": "crapB1",
                                                    "color": "hsl(204, 70%, 50%)",
                                                    "loc": 2905
                                                },
                                                {
                                                    "name": "crapB2",
                                                    "color": "hsl(23, 70%, 50%)",
                                                    "loc": 35585
                                                },
                                                {
                                                    "name": "crapB3",
                                                    "color": "hsl(142, 70%, 50%)",
                                                    "loc": 120161
                                                },
                                                {
                                                    "name": "crapB4",
                                                    "color": "hsl(330, 70%, 50%)",
                                                    "loc": 150902
                                                }
                                            ]
                                        },
                                        {
                                            "name": "crapC",
                                            "color": "hsl(135, 70%, 50%)",
                                            "children": [
                                                {
                                                    "name": "crapC1",
                                                    "color": "hsl(289, 70%, 50%)",
                                                    "loc": 106503
                                                },
                                                {
                                                    "name": "crapC2",
                                                    "color": "hsl(284, 70%, 50%)",
                                                    "loc": 117237
                                                },
                                                {
                                                    "name": "crapC3",
                                                    "color": "hsl(242, 70%, 50%)",
                                                    "loc": 168746
                                                },
                                                {
                                                    "name": "crapC4",
                                                    "color": "hsl(240, 70%, 50%)",
                                                    "loc": 68102
                                                },
                                                {
                                                    "name": "crapC5",
                                                    "color": "hsl(162, 70%, 50%)",
                                                    "loc": 190634
                                                },
                                                {
                                                    "name": "crapC6",
                                                    "color": "hsl(127, 70%, 50%)",
                                                    "loc": 68253
                                                },
                                                {
                                                    "name": "crapC7",
                                                    "color": "hsl(63, 70%, 50%)",
                                                    "loc": 193354
                                                },
                                                {
                                                    "name": "crapC8",
                                                    "color": "hsl(342, 70%, 50%)",
                                                    "loc": 177637
                                                },
                                                {
                                                    "name": "crapC9",
                                                    "color": "hsl(319, 70%, 50%)",
                                                    "loc": 149068
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
}}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        identity="name"
        value="loc"
        colors={{ scheme: 'nivo' }}
        padding={6}
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

export default Chart;