import Link from 'next/link';
import data from '../../lib/data';

export default function PostSummary({ post }) {
	return (
		<>
        <div className="col-lg-4 col-md-6">
            <article className="blog-post">
                <div className="blog-post-thumb">
                    <Link href={ `/blog/${post.slug}` }>
                        <img src={post.data.thumbImg.image} alt={post.data.thumbImg.image_alt} loading="lazy" />
                    </Link>
                </div>
                <div className="blog-post-content">
                    <div className="blog-post-tag @@category">
                        { post.data.tags.slice(0, 2).map((tag, i) => (
                            <Link href={`/tags/${tag.toLowerCase()}`} key={i}>{tag}</Link>
                        ))}
                    </div>
                    <div className="blog-post-title">
                        <Link href={ `/blog/${post.slug}` }>{post.data.title}</Link>
                    </div>
                </div>
            </article>
        </div>
		</>
	);
}





