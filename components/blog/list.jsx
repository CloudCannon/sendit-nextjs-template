import PostSummary from '../../components/posts/summary';
import MarkdownIt from 'markdown-it';
const md = new MarkdownIt({ html: true });

export default function BlogList({ page, posts, headline, pageNo, pageSlug }) {
	return (
		<>
        <section className="blog-hero pt-xl-22 pt-sm-20 pt-18 pb-xxl-25 pb-xl-23 pb-22 position-relative">
            <div className="container">
                <div className="row">
                <div className="col-xl-8 col-lg-10 mx-auto">
                    <div className="blog-hero-content">
                        <h1 className="blog-hero-title">{headline || page.data.title}</h1>
                        <div dangerouslySetInnerHTML={{ __html: md.render(page.data.description) }}/>
                    </div>
                </div>
                </div>
            </div>
        </section>
        <section className="blog @@padding @@blog-two">
            <div className="container">
                <div className="row"> 
                { posts.data.map((post, i) => (
                    <PostSummary post={post}  key={i} />
                ))}
                { posts.lastPage > 1 &&
                    <nav className="blog-pagination">
                        <ul className="pagination">
                            { posts.prevPage && 
                                <li className="page-item">
                                    <a className="page-link btn btn-secondary" href={`${pageSlug}${posts.prevPage}`}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20.657"
                                        height="11.314"
                                        viewBox="0 0 20.657 11.314"
                                        style={{transform: "scale(-1, 1)" }}
                                    >
                                        <g fill="#fff" data-name="Group 12">
                                            <path d="M0 4.657h18v2H0z" data-name="Rectangle 2400"></path>
                                            <path
                                                d="M13.586 9.9l5.6568542-5.6568542 1.4142136 1.4142135-5.6568542 5.6568543z"
                                                data-name="Rectangle 2401"
                                            ></path>
                                            <path
                                                d="M15 0l5.6568542 5.6568542-1.4142135 1.4142136-5.6568543-5.6568542z"
                                                data-name="Rectangle 2402"
                                            ></path>
                                        </g>
                                    </svg>
                                    </a>
                                </li>
                            }
                            { [...Array(posts.lastPage)].map((page, i) => (
                                <li className="page-item" key={i}>
                                    <a className={`page-link btn btn-secondary ${pageNo === (i+1).toString() ? 'active': ''}`} href={`${pageSlug}${i+1}`}>{i+1}</a>
                                </li>
                            ))
                            }
                                

                            { posts.nextPage && 
                                <li className="page-item">
                                    <a className="page-link btn btn-secondary" href={`${pageSlug}${posts.nextPage}`}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20.657"
                                        height="11.314"
                                        viewBox="0 0 20.657 11.314"
                                    >
                                        <g fill="#fff" data-name="Group 12">
                                            <path d="M0 4.657h18v2H0z" data-name="Rectangle 2400"></path>
                                            <path
                                                d="M13.586 9.9l5.6568542-5.6568542 1.4142136 1.4142135-5.6568542 5.6568543z"
                                                data-name="Rectangle 2401"
                                            ></path>
                                            <path
                                                d="M15 0l5.6568542 5.6568542-1.4142135 1.4142136-5.6568543-5.6568542z"
                                                data-name="Rectangle 2402"
                                            ></path>
                                        </g>
                                    </svg>
                                    </a>
                                </li>
                            }

                        </ul>
                    </nav>                
                }
                </div>
            </div>
        </section>
		</>
	);
}





