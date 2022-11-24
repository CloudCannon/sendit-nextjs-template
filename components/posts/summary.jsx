import Link from 'next/link';
import data from '../../lib/data';

export default function PostSummary({ post }) {
	return (
		<>
        <div className="col-lg-4 col-md-6">
            <article className="blog-post">
                <div className="blog-post-thumb">
                    <Link href={ `${data.site.baseurl}/blog/${post.slug}` }>
                        <img src={`${post.data.thumbImg.image_path}`} alt="blog-thumb" loading="lazy" />
                    </Link>
                </div>
                <div className="blog-post-content">
                    <div className="blog-post-tag @@category">
                        { post.data.categories.slice(0, 2).map((category, i) => (
                            <Link href={`categories/${category.toLowerCase()}`} key={i}>{category}</Link>
                        ))}
                    </div>
                    <div className="blog-post-title">
                        <Link href={ `${data.site.baseurl}/blog/${post.slug}` }>{post.data.title}</Link>
                    </div>
                </div>
            </article>
        </div>
		</>
	);
}





