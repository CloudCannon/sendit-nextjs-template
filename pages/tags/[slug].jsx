
import DefaultLayout from '../../components/layouts/default';
import Filer from '@cloudcannon/filer';
import BlogList from '../../components/blog/list';

const filer = new Filer({ path: 'content' });

function BlogTags({ page, posts }) {
  return (
    <DefaultLayout page={page}>
      <BlogList page={page} posts={posts}></BlogList>

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
  page.data.title = params.slug.charAt(0).toUpperCase() + params.slug.slice(1);

  return {
    props: {
      page: JSON.parse(JSON.stringify(page)),
      posts: JSON.parse(JSON.stringify(filteredPosts))
    }
  };
}
