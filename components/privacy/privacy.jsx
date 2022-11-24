import MarkdownIt from 'markdown-it';
import Link from 'next/link';
const md = new MarkdownIt({ html: true });

export default function PrivacyPrivacy( {block, dataBinding}) {
	return (
        <section class="privacy" data-cms-binding={dataBinding}>
            <div class="container">
                <div class="row">
                <div class="privacy-wrapper">
                    <div class="col-lg-7 mx-auto">
                    <div
                        data-bs-spy="scroll"
                        data-bs-target="#navbar-example2"
                        data-bs-offset="0"
                        class="scrollspy-example"
                        tabindex="0"
                    >

                    {block.terms_and_conditions.map((privacy, i) => (
                        <>
                            <div className="privacy-items" id={`item${i+1}`}>
                            <div className="card">
                                <h3 className="sub-title">{privacy.heading}</h3>
                                <div className="card-body">
                                    <div className="card-text" dangerouslySetInnerHTML={{ __html: md.render(privacy.description) }}/>
                                </div>
                            </div>
                            </div>
                        </>
                    ))}
                    </div>
                    </div>
                    <div class="col-lg-4">
                    <nav id="scrol-nav" class="navbar navbar-light privacy-nav">
                        <ul class="nav nav-pills">

                        {block.terms_and_conditions.map((privacy, i) => (
                            <>
                            <li className="nav-item">
                                <Link className={`nav-link ${i == 0 ? 'active': ''}`} href={`#item${i+1}`}>
                                {privacy.heading}
                                </Link>
                            </li>
                            </>
                        ))}
                        </ul>
                    </nav>
                    </div>
                </div>
                </div>
            </div>
        </section>
	);
}
