
import DefaultLayout from '../../components/layouts/default';
import Filer from '@cloudcannon/filer';
import BlogList from '../../components/blog/list';
import { capitalise } from '../../lib/string-helper';

const filer = new Filer({ path: 'content' });

function BlogTags({ page, posts, headline, pageSlug, pageNo }) {
  return (
    <DefaultLayout page={page}>
      <BlogList page={page} posts={posts} headline={headline} pageSlug={pageSlug} pageNo={pageNo}></BlogList>

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
  const tag = params.slug;
  const page = await filer.getItem('blog.md', { folder: 'pages' });
  const filteredPosts = await filer.getPaginatedItems('posts', {
    excerpt: true,
    filter: (item) => item.data.tags.includes(tag),
    pagination: {
      size: page.data?.pagination?.size || 9,
      page: 1
    },
    sortKey: 'date'
  });

  return {
    props: {
      page: JSON.parse(JSON.stringify(page)),
      posts: JSON.parse(JSON.stringify(filteredPosts)),
      pageSlug: `/tags/${tag}/page/`,
      headline: capitalise(tag),
      pageNo: "1"
    }
  };
}
