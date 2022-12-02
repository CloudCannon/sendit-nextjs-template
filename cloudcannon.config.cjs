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
            ],
            schemas: {
                page:
                {
                    name: 'New Page',
                    path: "schemas/page.md"
                }
            }
        },
        blog: {
            path: "content/posts",
            'output': true,
            url: '/blog/[slug]',
            _enabled_editors: [
                "content",
                "visual"
            ],
            schemas: {
                default: {
                    path: 'schemas/post.md'
                }
            }
        }
    },
    _inputs: {
        date: {
            instance_value: "now"
        },
        title_suffix: {
            comment: "Added at the end of the title and highlighted in a different color"
        },
        'pagination.size': {
            type: "number"
        },
        social: {
            options: {
                preview: {
                    icon: 'link'
                }
            }
        },
        links: {
            options: {
                preview: {
                    icon: 'link'
                }
            }
        },
        items: {
            options: {
                preview: {
                    icon: 'link'
                }
            }
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
        },
        logo_url: {
            comment: "Link for the logo in the top left of the footer"
        },
        copyright: {
            comment: "Automatically prefixed with the current year"
        },
        isActive: {
            type: "switch"
        },
        page_description: {
            comment: "Defaults to the description set in the Site SEO data file"
        },
        favicon_icon: {
            type: "image",
            comment: "For the shortcut icon meta tag"
        },
        faivcon_image: {
            type: "image",
            comment: "For the icon meta tag"
        },
        canonical_url: {
            comment: "Defaults to the pages url"
        },
        featured_image: {
            comment: "Defaults to the image set in the Site SEO data file"
        },
        open_graph_type: {
            comment: "Defaults to the type 'website'"
        },
        author_twitter_handle: {
            comment: "Defaults to the twitter site value set in the Site SEO data file"
        },
        no_index: {
            type: "checkbox",
            comment: "When selected this removes the page from your sitemap and adds the noindex robots meta tag"
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