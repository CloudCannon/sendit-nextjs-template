import Link from 'next/link';
import data from '../../lib/data';

export default function PostSummary({ post }) {
	return (
		<>
        <div class="col-lg-4 col-md-6">
            <article class="blog-post">
                <div class="blog-post-thumb">
                    <Link href={ `${data.site.baseurl}/blog/${post.slug}` }>
                        <img src={`${post.data.thumbImg.image_path}`} alt="blog-thumb" loading="lazy" />
                    </Link>
                </div>
                <div class="blog-post-content">
                    <div class="blog-post-tag @@category">
                        { post.data.categories.map((category, i) => (
                            <Link href={`categories/${category.toLowerCase()}`} key={i}>{category}</Link>
                        ))}
                    </div>
                    <div class="blog-post-title">
                        <Link href={ `${data.site.baseurl}/blog/${post.slug}` }>{post.data.title}</Link>
                    </div>
                </div>
            </article>
        </div>
		</>
	);
}





