var articleFixture = [
    {
        "route": "test-route",
        "title": "This is a test article",
        "subTitle": "Just a test article",
        "date": "Jan 18, 2016",
        "componentList": [
            {
                "componentId": "title"
            },
            {
                "componentId": "subTitle"
            },
            {
                "componentId": "articleSignature"
            },
            {
                "componentId": "text",
                "text": "How do ideas start? Out of inspiration, out of frustration?"
            },
            {
                "componentId": "text",
                "text": "Where do ideas start? In this case…under the shower."
            },
            {
                "componentId": "quote",
                "text": "What will I do during my period of seclusion from the outside world?"
            },
            {
                "componentId": "text",
                "text": "Well, I wanted to keep a blog about what I’m doing..but I don’t find a good integratable fluent and dynamic platform which is adapted to todays technology stack. I tried Pencilblue, in my opinion it goes in the right direction. But I’m having troubles with two important features:"
            },
            {
                "componentId": "unorderedList",
                "text": [
                    "the wysiwyg editor and the way to add custom css to it",
                    "the articles overview page: my first impression is that it’s buggy and not very straightforward to customise big time"
                ]
            },
            {
                "componentId": "text",
                "text": "Well, I wanted to explore new technologies. I was thinking about Angular 2, ReactJS, the Google Project Tango."
            },
            {
                "componentId": "text",
                "text": "This morning, January 18th 2016, the shower in Les Deux Alpes, let me realise I can combine the 3 of them."
            },
            {
                "componentId": "expandArticle"
            },
            {
                "componentId": "text",
                "text": "Let’s start exploring Angular 2, and make a wysiwyg editor with the following features:"
            },
            {
                "componentId": "orderedList",
                "text": [
                    "create or use a basic wysiwyg editor which creates basic HTML in Angular 2",
                    "configure the basic html tags (p, h1, h2, a, img) to contain some css classes by default. For example, when writing plain text (<p> should be adjusted to be <p class=“custom”> when rendering the html)",
                    "make it possible to add images and videos (start with only the link)"
                ]
            },
            {
                "componentId": "text",
                "text": "Let’s start, make it open source and call it EasyBlog! But first things first, let’s go snowboarding for an hour or two!"
            }
        ],
        "creationDate": "2016-01-18T10:50:42.389Z",
        "modificationDate": "2016-01-18T10:50:42.389Z",
        "publicationDate": "2016-01-18T10:50:42.389Z",
        "isDeleted": false
    }
];

module.exports = articleFixture;