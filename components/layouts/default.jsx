import Head from 'next/head';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import data from '../../lib/data';
import Icon from '../../components/icon';
import Navigation from './navigation';
import Footer from './footer';

export default function DefaultLayout({ children, page }) {
	const title = page?.data.title ? `${page.data.title} | ${data.seo.site_title}` : data.seo.site_title;
	const description = page?.data.description || data.seo.description;

	return (
		<>
			<Head>
				<meta charset="utf-8" />

				{/* mobile responsive meta */}
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta
				name="viewport"
				content="width=device-width, initial-scale=1, maximum-scale=5"
				/>

				<link href="/vendor/bootstrap/bootstrap.min.css" rel="stylesheet" />
				<link href="/vendor/phosphor-icons/css/phosphor.css" rel="stylesheet" />
				<link href="/vendor/magnific-popup/magnific-popup.css" rel="stylesheet" />

				<link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon" />
				<link rel="icon" href="/images/favicon.png" type="image/x-icon" />

				
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />

				<link rel="apple-touch-icon" href={`${data.site.baseurl}/apple-touch-icon.png`} />
				<link rel="icon" type="image/png" href={`${data.site.baseurl}/touch-icon.png`} sizes="192x192" />
				<link rel="icon" type="image/png" href={`${data.site.baseurl}/images/favicon.png`} />

			</Head>

			<NextSeo
				title={title}
				description={description}
				openGraph={{
					site_name: data.seo.site_name,
					url: data.site.url,
					title: title,
					description: description,
					images: data.seo.images.map((image) => ({
						url: image.image,
						width: image.height,
						height: image.width,
						alt: image.description
					}))
				}}
			/>
			<Navigation page={page}/>
            {children}
			<Footer page={page}/>
            
			<script src="/vendor/jQuery/jquery.min.js" async></script>
			<script src="/vendor/bootstrap/bootstrap.bundle.min.js" async></script>
			<script src="/vendor/counter-up/countup.js" async></script>
			<script src="/vendor/magnific-popup/magnific-popup.min.js" async></script>
			<script src="/js/script.js" async></script>
		</>
	);
}
