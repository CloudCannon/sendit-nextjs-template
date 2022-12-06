import DefaultLayout from '../../components/layouts/default';
import Filer from '@cloudcannon/filer';
import PostSummary from '../../components/posts/summary';
import data from '../../lib/data';
import { ArticleJsonLd } from 'next-seo';
const filer = new Filer({ path: 'content' });
const { DateTime } = require("luxon");

export default function Post({ page, posts }) {

	const wordCount = page.content.split(" ").length;
	const readingTime  = Math.floor(wordCount / 183)

	return (
		<DefaultLayout page={page}>
			
			<ArticleJsonLd
				type="BlogPosting"
				url={`${data.site.baseurl}${page.data.seo?.canonical_url || page.slug}`}
				title={page.data.title}
				images={[page.data.seo?.featured_image || page.data.featuredImg.image || null]}
				datePublished={page.data.date}
				dateModified={page.data.date}
				authorName={page.data.author}
				description={page.data.seo?.page_description}
			/>
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
										<p>{ readingTime } <span>minutes read</span></p>
									</li>
									<li className="list-inline-item">
										<p>{ wordCount } <span>words</span></p>
									</li>
								</ul>
							</div>
						</div>
						<div className="rounded-box mb-xxl-11 mb-8">
							<img
								src={page.data.featuredImg.image}
								className="w-100"
								alt={page.data.featuredImg.image_alt}
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
	const paginatedPosts = await filer.getPaginatedItems('posts', { sortKey: 'date', pagination: {size: 3, page: 1} });

	return {
		props: {
			page: JSON.parse(JSON.stringify(page)),
			posts: JSON.parse(JSON.stringify(paginatedPosts.data))
		}
	};
}
