import { writeFile } from 'fs/promises';
import DefaultLayout from '../../components/layouts/default';
import Filer from '@cloudcannon/filer';
import { generateRss } from '../../lib/rss';
import BlogList from '../../components/blog/list';

const filer = new Filer({ path: 'content' });

function BlogIndex({ page, posts }) {
  return (
    <DefaultLayout page={page}>
      <BlogList page={page} posts={posts}></BlogList>
    </DefaultLayout>
  )
}

export default BlogIndex

export async function getStaticProps({ params }) {
  const page = await filer.getItem('blog.md', { folder: 'pages' });
  const posts = await filer.getItems('posts', { excerpt: true, sortKey: 'date' });
	
  await writeFile('./public/feed.xml', generateRss(posts));

  return {
    props: {
      page: JSON.parse(JSON.stringify(page)),
      posts: JSON.parse(JSON.stringify(posts))
    }
  };
}
