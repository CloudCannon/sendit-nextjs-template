import DefaultLayout from '../../components/layouts/default';
import Filer from '@cloudcannon/filer';
import PostSummary from '../../components/posts/summary';
const filer = new Filer({ path: 'content' });
const { DateTime } = require("luxon");

export default function Post({ page, posts }) {
	return (
		<DefaultLayout page={page}>
			<section class="blog-details">
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<article class="blog-single">
						<div class="inner-blog-details">
							<h2 class="w-xxl-70 w-xl-80 w-100">{page.data.title}</h2>
							<div class="inner-blog-details-meta">
								<ul class="list-unstyled">
									<li class="list-inline-item">
									<p>{DateTime.fromISO(page.data.date, 'string').toLocaleString(DateTime.DATE_FULL)}</p>
									</li>
									<li class="list-inline-item">
										<p>{ page.data.author}</p>
									</li>
									<li class="list-inline-item">
										<p>{ page.data.readingTime } <span>minutes</span></p>
									</li>
									<li class="list-inline-item">
										<p>{ page.data.wordCount } <span>words</span></p>
									</li>
								</ul>
							</div>
						</div>
						<div class="rounded-box mb-xxl-11 mb-8">
							<img
								src={page.data.featuredImg.image_path}
								class="w-100"
								alt="featured-image"
							/>
						</div>
						<div style={{"max-width": "900px", margin: "0 auto" }} dangerouslySetInnerHTML={{ __html: page.content_html }}></div>
						</article>
					</div>
				</div>
			</div>
			</section>

			<section class="blog-related position-relative">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="blog-section">
						<h2 class="blog-section-title">Recent Blog</h2>
						</div>
					</div>
				</div>
				<div class="row">

					{ posts.map((post, i) => (
						<PostSummary post={post} key={i}></PostSummary>
					))}
					{/* {{ range ( where site.RegularPages "Section" "blog" | first 3 ) }}
					<div class="col-lg-4 col-md-6">
						<article class="blog-post">
						<div class="blog-post-thumb">
							<a href="{{.Permalink | relURL}}">
								<img src="{{.Params.thumbImg.image_path}}" alt="blog-thum" />
							</a>
						</div>
						<div class="blog-post-content">
							<div class="blog-post-tag">
								{{ range .Params.categories }} {{ $href := print (absURL "categories/") (urlize
								.) }}
								<a href="{{ $href }}">{{ . | humanize }}</a>
								{{ end }}
							</div>
							<div class="blog-post-title">
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
