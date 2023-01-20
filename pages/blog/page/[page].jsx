import DefaultLayout from '../../../components/layouts/default';
import Filer from '@cloudcannon/filer';
import BlogList from '../../../components/blog/list';

const filer = new Filer({ path: 'content' });

function BlogPages({ page, posts, pageNo, pageSlug }) {
  return (
    <DefaultLayout page={page}>
      <BlogList page={page} posts={posts} pageNo={pageNo} pageSlug={pageSlug}></BlogList>
    </DefaultLayout>
  )
}

export default BlogPages

export async function getStaticPaths() {
  const page = await filer.getItem('blog.md', { folder: 'pages' });
  const paginatedPosts = await filer.getPaginatedItems('posts', {
    excerpt: true,
    sortKey: 'date',
    pagination: {
      size: page.data?.pagination?.size || 9
    }
  });

  const pages = [...Array(paginatedPosts.lastPage)]
  let slugs = [];
  pages.map((page, i) => {
    slugs.push({ params: { page: (i + 1).toString() } })
  })
  const ignored = {
  };

  return {
    paths: slugs.filter(({ params }) => !ignored[params.page]),
    fallback: false
  };
}
export async function getStaticProps({ params }) {
  const page = await filer.getItem('blog.md', { folder: 'pages' });
  const paginatedPosts = await filer.getPaginatedItems('posts', { sortKey: 'date', pagination: { size: page.data?.pagination?.size || 9, page: params.page } });

  return {
    props: {
      page: JSON.parse(JSON.stringify(page)),
      posts: JSON.parse(JSON.stringify(paginatedPosts)),
      pageSlug: "/blog/page/",
      pageNo: params.page
    }
  };
}
