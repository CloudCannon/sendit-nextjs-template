
import DefaultLayout from '../../components/layouts/default';
import Filer from '@cloudcannon/filer';
import BlogList from '../../components/blog/list';
import {capitalise} from '../../lib/string-helper';

const filer = new Filer({ path: 'content' });

function BlogTags({ page, posts, headline }) {
  return (
    <DefaultLayout page={page}>
      <BlogList page={page} posts={posts} headline={headline}></BlogList>

    </DefaultLayout>
  )
}

export default BlogTags

export async function getStaticPaths() {
  const posts = await filer.getItems('posts', { excerpt: false, sortKey: 'date' })
  let slugs = [];
  posts.map((post) => {
    post.data.tags.map(tag => slugs.push({ params: { slug: tag } }))
  })
	const ignored = {
	};

	return {
		paths: slugs.filter(({ params }) => !ignored[params.slug]),
		fallback: false
	};
}
export async function getStaticProps({ params }) {
  const page = await filer.getItem('blog.md', { folder: 'pages' });
  const posts = await filer.getItems('posts', { excerpt: true, sortKey: 'date' });
  const filteredPosts = posts.filter( ({data}) => data.tags.includes(params.slug));

  return {
    props: {
      page: JSON.parse(JSON.stringify(page)),
      posts: JSON.parse(JSON.stringify(filteredPosts)),
      headline: capitalise(params.slug)
    }
  };
}
