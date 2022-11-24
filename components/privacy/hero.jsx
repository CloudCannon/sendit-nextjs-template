export default function PrivacyHero( {block, dataBinding}) {
	return (
        <section class="privacy-hero" data-cms-bind={dataBinding}>
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="privacy-hero-content text-center">
                        <h1>{block.title}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
	);
}
