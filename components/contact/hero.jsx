import Link from "next/link";

export default function ContactHero({ block, dataBinding }) {
    return (
        <section class="contact-hero">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="contact-hero-content">
                            <h1>{block.title }</h1>
                            <p>{block.description }</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}