import { writeFile } from 'fs/promises';
import DefaultLayout from '../../components/layouts/default';
import Filer from '@cloudcannon/filer';
import { generateRss } from '../../lib/rss';
import BlogList from '../../components/blog/list';

const filer = new Filer({ path: 'content' });

function BlogIndex({ page, posts, pageNo, pageSlug }) {
  return (
    <DefaultLayout page={page}>
      <BlogList page={page} posts={posts} pageNo={pageNo} pageSlug={pageSlug}></BlogList>
    </DefaultLayout>
  )
}

export default BlogIndex

export async function getStaticProps({ params }) {
  const page = await filer.getItem('blog.md', { folder: 'pages' });
  const posts = await filer.getItems('posts', { excerpt: true, sortKey: 'date'});
  const paginatedPosts = await filer.getPaginatedItems('posts', { sortKey: 'date', pagination: {size: page.data?.pagination?.size || 9, page: 1} });
	
  await writeFile('./public/feed.xml', generateRss(posts));

  return {
    props: {
      page: JSON.parse(JSON.stringify(page)),
      posts: JSON.parse(JSON.stringify(paginatedPosts)),
      pageSlug: "/blog/page/",
      pageNo: "1"
    }
  };
}
