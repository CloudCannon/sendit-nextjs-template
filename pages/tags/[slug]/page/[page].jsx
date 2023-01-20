import DefaultLayout from '../../../../components/layouts/default';
import Filer from '@cloudcannon/filer';
import BlogList from '../../../../components/blog/list';
import { arrayReplaceAt } from 'markdown-it/lib/common/utils';
import { capitalise } from '../../../../lib/string-helper';

const filer = new Filer({ path: 'content' });

function BlogPages({ page, posts, pageNo, headline, pageSlug}) {
  return (
    <DefaultLayout page={page}>
      <BlogList page={page} posts={posts} pageNo={pageNo} headline={headline} pageSlug={pageSlug}></BlogList>
    </DefaultLayout>
  )
}

export default BlogPages

export async function getStaticPaths() {
  const page = await filer.getItem('blog.md', { folder: 'pages' });

  const posts = await filer.getItems('posts', { excerpt: false, sortKey: 'date' })
  const tags = {};
  posts.map((post) => {
    post.data.tags.map(tag => {
      if (!tags.hasOwnProperty(tag)) {
        tags[tag] = 1
      }
      else {
        tags[tag] = tags[tag]+=1
      }
    })
  })
  let slugs = [];
  Object.keys(tags).forEach((key) => {
    const pages = [...Array(Math.ceil(tags[key]/page.data?.pagination?.size || 9))]
    pages.map((page, i) => {
      slugs.push({ params: { slug: key, page: (i + 1).toString() } })
    })
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
  const paginatedPosts = await filer.getPaginatedItems('posts', {
    sortKey: 'date',
    filter: (item) => item.data.tags.includes(tag),
    pagination: {
      size: page.data?.pagination?.size || 9,
      page: params.page
    }
  });

  return {
    props: {
      page: JSON.parse(JSON.stringify(page)),
      posts: JSON.parse(JSON.stringify(paginatedPosts)),
      pageNo: params.page,
      pageSlug: `/tags/${tag}/page/`,
      headline: capitalise(tag)
    }
  };
}
