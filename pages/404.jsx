import DefaultLayout from '../components/layouts/default';
import Blocks from '../components/shared/blocks';
import Filer from '@cloudcannon/filer';
const filer = new Filer({ path: 'content' });

function Custom404({ page }) {
    return (
      <DefaultLayout page={page}>
      <Blocks content_blocks={page.data.content_blocks } ></Blocks>
      </DefaultLayout>
    )
  }
  
export default Custom404

export async function getStaticProps({ params }) {
	const page = await filer.getItem('404.md', { folder: 'pages' });
	return {
		props: {
			page: JSON.parse(JSON.stringify(page))
		}
	};
}