import DefaultLayout from '../../components/layouts/default';
import Filer from '@cloudcannon/filer';
import PostSummary from '../../components/posts/summary';
const filer = new Filer({ path: 'content' });
const { DateTime } = require("luxon");

export default function Post({ page, posts }) {
	return (
		<DefaultLayout page={page}>
			<section className="blog-details">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<article className="blog-single">
						<div className="inner-blog-details">
							<h2 className="w-xxl-70 w-xl-80 w-100">{page.data.title}</h2>
							<div className="inner-blog-details-meta">
								<ul className="list-unstyled">
									<li className="list-inline-item">
									<p>{DateTime.fromISO(page.data.date, 'string').toLocaleString(DateTime.DATE_FULL)}</p>
									</li>
									<li className="list-inline-item">
										<p>{ page.data.author}</p>
									</li>
									<li className="list-inline-item">
										<p>{ page.data.readingTime } <span>minutes</span></p>
									</li>
									<li className="list-inline-item">
										<p>{ page.data.wordCount } <span>words</span></p>
									</li>
								</ul>
							</div>
						</div>
						<div className="rounded-box mb-xxl-11 mb-8">
							<img
								src={page.data.featuredImg.image_path}
								className="w-100"
								alt="featured-image"
							/>
						</div>
						<div style={{"max-width": "900px", margin: "0 auto" }} dangerouslySetInnerHTML={{ __html: page.content_html }}></div>
						</article>
					</div>
				</div>
			</div>
			</section>

			<section className="blog-related position-relative">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="blog-section">
						<h2 className="blog-section-title">Recent Blog</h2>
						</div>
					</div>
				</div>
				<div className="row">

					{ posts.map((post, i) => (
						<PostSummary post={post} key={i}></PostSummary>
					))}
					{/* {{ range ( where site.RegularPages "Section" "blog" | first 3 ) }}
					<div className="col-lg-4 col-md-6">
						<article className="blog-post">
						<div className="blog-post-thumb">
							<a href="{{.Permalink | relURL}}">
								<img src="{{.Params.thumbImg.image_path}}" alt="blog-thum" />
							</a>
						</div>
						<div className="blog-post-content">
							<div className="blog-post-tag">
								{{ range .Params.categories }} {{ $href := print (absURL "categories/") (urlize
								.) }}
								<a href="{{ $href }}">{{ . | humanize }}</a>
								{{ end }}
							</div>
							<div className="blog-post-title">
								<a href="{{.Permalink | relURL}}">{{.Params.title}}</a>
							</div>
						</div>
						</article>
					</div>
					{{ end }} */}
				</div>
			</div>
			</section>
		</DefaultLayout>
	);
}

export async function getStaticPaths() {
	const slugs = (await filer.listItemSlugs('posts')).map((slug) => ({ params: { slug } }));
	const ignored = {
	};

	return {
		paths: slugs.filter(({ params }) => !ignored[params.slug]),
		fallback: false
	};
}

export async function getStaticProps({ params }) {
	const page = await filer.getItem(`${params.slug}.md`, { folder: 'posts' });
	const posts = await filer.getItems('posts', { excerpt: true, sortKey: 'date' });

	return {
		props: {
			page: JSON.parse(JSON.stringify(page)),
			posts: JSON.parse(JSON.stringify(posts.slice(0, 3)))
		}
	};
}
