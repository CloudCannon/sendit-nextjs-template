import Link from "next/link";

export default function HomeHero( {block, dataBinding}) {
	return (
		<section class="hero-two">
            <div class="hero-two-shape">
                <img src="/images/hero/hero-two-shape.png" alt="shape" />
            </div>
            <div class="container-fluid">
                <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="hero-two-content">
                    <h1 class="mb-4">{block.title}</h1>
                    <p class="mb-7 w-xxl-80">{block.description}</p>
                    <div class="">
                        { block.link && 
                            <Link href={block.link.url} class="btn btn-primary btn-lg"> {block.link.text} </Link>
                        }
                    </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="hero-two-banner">
                    <img src={block.image_path} alt="hero-two-images" />
                    <div class="hero-two-banner-shape">
                        <img src="/images/hero/hero-three-shape.png" alt="shape" />
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
	);
}
