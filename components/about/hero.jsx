import Link from "next/link";



  
export default function AboutHero( {block, dataBinding}) {

    const renderPlacer = (param) => {
        switch(param) {
          case 'back_top_right':
            return 'image-one';
          case 'front_bottom':
            return 'image-two';
          case 'back_top_left':
            return 'image-three';
          default:
            return '';
        }
      };

	return (
        <section class="about-hero-two">
        <div class="container">
            <div class="row">
            <div class="col-xl-5 col-lg-10 mx-auto">
                <div class="about-hero-two-content position-relative">
                <h2>{block.title}</h2>
                <p class="mb-20 w-xxl-80">{block.description}</p>
                <div class="">
                    { block.link && 
                        <Link href={block.link.url} class="btn btn-primary btn-lg"> {block.link.text} </Link>
                    }
                </div>
                </div>
            </div>
            <div class="col-xl-7 col-lg-12">
                <div class="about-hero-two-banner">

                {block.hero_images.map((image, i) => (
                    <div class={`rounded-box ${renderPlacer(image.placer)}`} key={i}>
                        <img src={image.image_path} alt="aboutfeature" loading="lazy"/>
                    </div>
                ))}
                <div class="pattern">
                    <img src="/images/about/patterns-two.png" alt="patterns" loading="lazy"/>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
	);
}
