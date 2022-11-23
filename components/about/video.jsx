import Link from "next/link";

export default function AboutVideo({ block, dataBinding }) {
    return (
        <section class="works">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="works-content">
                            <h2>{block.title}</h2>
                            <p>{block.description}</p>
                            {block.btn &&
                                <Link href={block.btn.link} class="btn btn-lg btn-white"> {block.btn.text} </Link>
                            }
                        </div>
                    </div>
                    <div class="col-lg-6">

                        {block.video &&
                        <div class="works-banner rounded-box">
                            <img
                                src={block.video.image_path}
                                class="w-100"
                                alt="banner-image"
                                loading="lazy"
                            />
                            <div class="effect">
                                <img src="/images/works/effect.png" alt="effect" loading="lazy" />
                            </div>
                            <div
                                class="video-iframe d-flex align-items-center justify-content-center"
                            >
                                <div class="video-icon me-sm-9 me-8">
                                    <a class="popup-vimeo" href={block.video.link}>
                                        <svg
                                            width="28"
                                            height="32"
                                            viewBox="0 0 28 32"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M26 12.5359C28.6667 14.0755 28.6667 17.9245 26 19.4641L6.5 30.7224C3.83333 32.262 0.499998 30.3375 0.499999 27.2583L0.5 4.74167C0.5 1.66247 3.83333 -0.262033 6.5 1.27757L26 12.5359Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        }
                    </div>
                </div>
            </div>
        </section>

    );
}
