import FaqItem from './faqItem';

export default function GlobalFaq( {block, dataBinding}) {
	return (
        <section class="faq-two">
            <div class="container">
                <div class="row">
                <div class="col-lg-8 mx-auto">
                    <div class="section-header">
                    <h2>{block.title} <span>{block.title_suffix}</span></h2>
                    <p>{block.description}</p>
                    </div>
                </div>
                </div>
                <div class="row">
                <div class="col-lg-12">
                    <div class="accordion" id="accordionExample">
                        {block.faq.map((q, i) => (
                            <FaqItem faq={q} i={i} key={i} />
                        ))}
                    </div>
                </div>
                </div>
            </div>
        </section>
	);
}
