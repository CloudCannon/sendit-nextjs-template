module.exports = {
    paths: {
        collections: 'content',
        data: 'data',
        static: 'public',
        uploads: 'public/uploads'
    },
    collections_config: {
        data: {
            path: 'data',
            disable_add: true,
            disable_add_folder: true
        },
        pages: {
            path: "content/pages",
            url: '/[slug]',
            'output': true,
            icon: 'wysiwyg',
            _enabled_editors: [
                "visual"
            ]
        },
        blog: {
            path: "content/posts",
            'output': true,
            url: '/blog/[slug]',
            _enabled_editors: [
                "content",
                "visual"
            ]
        }
    },
    _inputs: {
        content: {
            type: "markdown"
        },
        icon: {
            type: "select",
            options: {
                values: [
                    "ph-user-square"
                ]
            }
        },
        description: {
            type: "markdown",
            options: {
                bold: true,
                italic: true,
                link: true,
                removeformat: true
            }
        },
        isActive: {
            type: "switch"
        },
        "social[*].icon": {
            type: "select",
            options: {
                values: [
                    "ph-facebook-logo",
                    "ph-instagram-logo",
                    "ph-twitter-logo",
                    "ph-github-logo",
                    "ph-youtube-logo"
                ]
            }
        }
    },
    _structures: {
        features: {
            values: [
                {
                    value: {
                        item: null,
                        isActive: null
                    }
                }
            ]
        }
    }
}