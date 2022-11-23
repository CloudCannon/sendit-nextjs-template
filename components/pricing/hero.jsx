import Link from "next/link";

export default function PricingHero( {block, dataBinding}) {
	return (
        <section class="pricing-inner @@bg-color">
        <div class="container">
            <div class="row">
            <div class="col-lg-8 mx-auto">
                <div class="section-header position-relative text-center">
                <h2>{block.title}</h2>
                <p>{block.description}</p>
                </div>
            </div>
            </div>
        </div>
        </section>
	);
}
