import Link from "next/link";

export default function FeatureHero( {block, dataBinding}) {
	return (
        <section class="feature-hero">
        <div class="container">
            <div class="row align-items-center">
            <div class="col-lg-6">
                <div class="feature-hero-content">
                <h1 class="">{block.title}</h1>
                <p>{block.description}</p>
                <div class="d-block mb-6">
                    {block.btn &&
                        <Link href={block.btn.link} class="btn btn-primary btn-lg"> {block.btn.text} </Link>
                    }
                </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="feature-hero-banner">
                <img src={block.image_path} alt="banner-image" loading="lazy" />
                <div class="shape">
                    <img
                    src="/images/feature/effect-4.png"
                    alt="shape"
                    loading="lazy"
                    />
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
	);
}
