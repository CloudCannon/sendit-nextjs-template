export default function GlobalHeader( {block, dataBinding}) {
	return (
        <section className="feature pt-0 pb-0">
        <div className="container">
            <div className="row">
            <div className="col-lg-8 mx-auto">
                <div className={`section-header @@disply ${block.no_top_pad ? 'no-top-pad': ''}`}>
                <h2>{block.title }<span>{block.title_suffix }</span></h2>
                <p>{block.description}</p>
                </div>
            </div>
            </div>
        </div>
        </section>
	);
}
