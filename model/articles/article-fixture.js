var articleFixture = [
    {
        "route": "test-route",
        "title": "http://www.artikeltitel.com",
        "subTitle": "En dit is de ondertitel.",
        "content": {
            "entityMap": {
                "0": {
                    "type": "LINK",
                    "mutability": "MUTABLE",
                    "data": {"url": "http://www.artikeltitel.com"}
                },
                "1": {
                    "type": "image",
                    "mutability": "IMMUTABLE",
                    "data": {"src": "http://localhost:3000/media/sample.jpg"}
                },
                "2": {
                    "type": "LINK",
                    "mutability": "MUTABLE",
                    "data": {"url": "mijioj"}
                },
                "3": {
                    "type": "more-info",
                    "mutability": "IMMUTABLE",
                    "data": {"text": "Read more"}
                },
                "4": {
                    "type": "audio",
                    "mutability": "IMMUTABLE",
                    "data": {"src": "http://localhost:3000/media/sample.mp3"}
                },
                "5": {
                    "type": "video",
                    "mutability": "IMMUTABLE",
                    "data": {"src": "http://localhost:3000/media/sample.mp4"}
                }
            },
            "blocks": [
                {
                    "key": "ejddc",
                    "text": "Dit is de artikel titel!",
                    "type": "header-four",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [
                        {
                            "offset": 0,
                            "length": 24,
                            "key": 0
                        }
                    ]
                },
                {
                    "key": "9c0ih",
                    "text": "En dit is de ondertitel.",
                    "type": "header-five",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": []
                },
                {
                    "key": "46gdb",
                    "text": "",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": []
                },
                {
                    "key": "3d87s",
                    "text": " ",
                    "type": "atomic",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [
                        {
                            "offset": 0,
                            "length": 1,
                            "key": 1
                        }
                    ]
                },
                {
                    "key": "bihqe",
                    "text": "",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": []
                },
                {
                    "key": "9tj9d",
                    "text": "test",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [
                        {
                            "offset": 0,
                            "length": 4,
                            "style": "ITALIC"
                        }
                    ],
                    "entityRanges": []
                },
                {
                    "key": "ek0v3",
                    "text": "test",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [
                        {
                            "offset": 0,
                            "length": 4,
                            "style": "BOLD"
                        }
                    ],
                    "entityRanges": [
                        {
                            "offset": 0,
                            "length": 4,
                            "key": 2
                        }
                    ]
                },
                {
                    "key": "4kf6s",
                    "text": "Hier is het einde van de eerste paragraaf.",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": []
                },
                {
                    "key": "4m483",
                    "text": " ",
                    "type": "atomic",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [
                        {
                            "offset": 0,
                            "length": 1,
                            "key": 3
                        }
                    ]
                },
                {
                    "key": "1p00v",
                    "text": "Hier is het begin van de tweede paragraaf.",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": []
                },
                {
                    "key": "6d1m8",
                    "text": "",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": []
                },
                {
                    "key": "crmoh",
                    "text": "",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": []
                },
                {
                    "key": "bssa6",
                    "text": " ",
                    "type": "atomic",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [
                        {
                            "offset": 0,
                            "length": 1,
                            "key": 4
                        }
                    ]
                },
                {
                    "key": "8v560",
                    "text": "",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": []
                },
                {
                    "key": "b1knu",
                    "text": "code block",
                    "type": "code-block",
                    "depth": 0,
                    "inlineStyleRanges": [
                        {
                            "offset": 0,
                            "length": 10,
                            "style": "BOLD"
                        }
                    ],
                    "entityRanges": []
                },
                {
                    "key": "eae2k",
                    "text": "//test",
                    "type": "code-block",
                    "depth": 0,
                    "inlineStyleRanges": [
                        {
                            "offset": 0,
                            "length": 6,
                            "style": "BOLD"
                        }
                    ],
                    "entityRanges": []
                },
                {
                    "key": "7vojs",
                    "text": "",
                    "type": "code-block",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": []
                },
                {
                    "key": "8ug30",
                    "text": "",
                    "type": "code-block",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": []
                },
                {
                    "key": "dmtm2",
                    "text": "block quote",
                    "type": "blockquote",
                    "depth": 0,
                    "inlineStyleRanges": [
                        {
                            "offset": 0,
                            "length": 11,
                            "style": "BOLD"
                        }
                    ],
                    "entityRanges": []
                },
                {
                    "key": "4v3tq",
                    "text": "",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": []
                },
                {
                    "key": "9kegn",
                    "text": "",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": []
                },
                {
                    "key": "ah21e",
                    "text": " ",
                    "type": "atomic",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [
                        {
                            "offset": 0,
                            "length": 1,
                            "key": 5
                        }
                    ]
                },
                {
                    "key": "7p6jv",
                    "text": "",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": []
                },
                {
                    "key": "4q8vc",
                    "text": "",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": []
                }
            ]
        }
    },
    {
        "route": "transform-es6-to-es5-with-babel",
        "title": "this is the title",
        "subTitle": "this is the subtitle",
        "content": {
            "entityMap": {
                "0": {
                    "type": "LINK",
                    "mutability": "MUTABLE",
                    "data": {"url": "http://www.artikeltitel.com"}
                },
                "1": {
                    "type": "image",
                    "mutability": "IMMUTABLE",
                    "data": {"src": "http://localhost:3000/media/sample.jpg"}
                },
                "2": {
                    "type": "LINK",
                    "mutability": "MUTABLE",
                    "data": {"url": "mijioj"}
                },
                "3": {
                    "type": "more-info",
                    "mutability": "IMMUTABLE",
                    "data": {"text": "Read more"}
                },
                "4": {
                    "type": "audio",
                    "mutability": "IMMUTABLE",
                    "data": {"src": "http://localhost:3000/media/sample.mp3"}
                },
                "5": {
                    "type": "video",
                    "mutability": "IMMUTABLE",
                    "data": {"src": "http://localhost:3000/media/sample.mp4"}
                }
            },
            "blocks": [
                {
                    "key": "ejddc",
                    "text": "Dit is de artikel titel!",
                    "type": "header-four",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [
                        {
                            "offset": 0,
                            "length": 24,
                            "key": 0
                        }
                    ]
                },
                {
                    "key": "9c0ih",
                    "text": "En dit is de ondertitel.",
                    "type": "header-five",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": []
                },
                {
                    "key": "46gdb",
                    "text": "",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": []
                },
                {
                    "key": "3d87s",
                    "text": " ",
                    "type": "atomic",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [
                        {
                            "offset": 0,
                            "length": 1,
                            "key": 1
                        }
                    ]
                },
                {
                    "key": "bihqe",
                    "text": "",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": []
                },
                {
                    "key": "9tj9d",
                    "text": "test",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [
                        {
                            "offset": 0,
                            "length": 4,
                            "style": "ITALIC"
                        }
                    ],
                    "entityRanges": []
                },
                {
                    "key": "ek0v3",
                    "text": "test",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [
                        {
                            "offset": 0,
                            "length": 4,
                            "style": "BOLD"
                        }
                    ],
                    "entityRanges": [
                        {
                            "offset": 0,
                            "length": 4,
                            "key": 2
                        }
                    ]
                },
                {
                    "key": "4kf6s",
                    "text": "Hier is het einde van de eerste paragraaf.",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": []
                },
                {
                    "key": "4m483",
                    "text": " ",
                    "type": "atomic",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [
                        {
                            "offset": 0,
                            "length": 1,
                            "key": 3
                        }
                    ]
                },
                {
                    "key": "1p00v",
                    "text": "Hier is het begin van de tweede paragraaf.",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": []
                },
                {
                    "key": "6d1m8",
                    "text": "",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": []
                },
                {
                    "key": "crmoh",
                    "text": "",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": []
                },
                {
                    "key": "bssa6",
                    "text": " ",
                    "type": "atomic",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [
                        {
                            "offset": 0,
                            "length": 1,
                            "key": 4
                        }
                    ]
                },
                {
                    "key": "8v560",
                    "text": "",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": []
                },
                {
                    "key": "b1knu",
                    "text": "code block",
                    "type": "code-block",
                    "depth": 0,
                    "inlineStyleRanges": [
                        {
                            "offset": 0,
                            "length": 10,
                            "style": "BOLD"
                        }
                    ],
                    "entityRanges": []
                },
                {
                    "key": "eae2k",
                    "text": "//test",
                    "type": "code-block",
                    "depth": 0,
                    "inlineStyleRanges": [
                        {
                            "offset": 0,
                            "length": 6,
                            "style": "BOLD"
                        }
                    ],
                    "entityRanges": []
                },
                {
                    "key": "7vojs",
                    "text": "",
                    "type": "code-block",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": []
                },
                {
                    "key": "8ug30",
                    "text": "",
                    "type": "code-block",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": []
                },
                {
                    "key": "dmtm2",
                    "text": "block quote",
                    "type": "blockquote",
                    "depth": 0,
                    "inlineStyleRanges": [
                        {
                            "offset": 0,
                            "length": 11,
                            "style": "BOLD"
                        }
                    ],
                    "entityRanges": []
                },
                {
                    "key": "4v3tq",
                    "text": "",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": []
                },
                {
                    "key": "9kegn",
                    "text": "",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": []
                },
                {
                    "key": "ah21e",
                    "text": " ",
                    "type": "atomic",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": [
                        {
                            "offset": 0,
                            "length": 1,
                            "key": 5
                        }
                    ]
                },
                {
                    "key": "7p6jv",
                    "text": "",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": []
                },
                {
                    "key": "4q8vc",
                    "text": "",
                    "type": "unstyled",
                    "depth": 0,
                    "inlineStyleRanges": [],
                    "entityRanges": []
                }
            ]
        }
    }
];

module.exports = articleFixture;
