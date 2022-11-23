import Link from "next/link";

export default function ContactHero({ block, dataBinding }) {
    return (
        <section class="contact">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5 me-auto order-2 order-lg-1">
                        <div class="contact-form-Information">
                            <div class="address">
                                { block.address && 
                                    <>
                                    <h3>{block.address.heading }</h3>
                                    <p>{block.address.address }</p>
                                    </>
                                }
                                <div class="item mb-4">
                                    { block.phone && 
                                        <>
                                            <h3>{block.phone.heading }</h3>
                                            <Link href={`tel:${block.phone.cell}`}>{block.phone.cell}
                                                <span>
                                                    <img
                                                        src="/images/contact/call-add.svg"
                                                        alt="call-add"
                                                        loading="lazy"
                                                    />
                                                </span>
                                            </Link>
                                        </>
                                    }
                                </div>
                                <div class="item">

                                    { block.email && 
                                        <>
                                            <h3>{block.email.heading }</h3>
                                            <Link href={`tel:${block.email.email}`}>{block.email.email}
                                                <span>
                                                    <img
                                                        src="/images/contact/directbox-send.svg"
                                                        alt="send-box"
                                                        loading="lazy"
                                                    />
                                                </span>
                                            </Link>
                                        </>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 order-1 order-lg-2">
                        <div class="contact-form">

                            { block.form && 
                                <>
                                    <form method="post">
                                        <h3>{block.form.heading }</h3>
                                        { block.form.fullName && 
                                            <>
                                                <div class="col-md-12">
                                                    <label for="Name" class="label">{block.form.fullName.heading}</label>
                                                    <input
                                                        type="text"
                                                        class="form-control"
                                                        id="Name"
                                                        name="name"
                                                        placeholder={block.form.fullName.placeHolder}
                                                        required=""
                                                    />
                                                </div>
                                            </>
                                        }
                                        { block.form.phoneNumber && 
                                            <>
                                                <div class="col-md-12">
                                                    <label for="phone-number" class="label">{block.form.phoneNumber.heading}</label>
                                                    <input
                                                        type="tel"
                                                        class="form-control"
                                                        id="phone-number"
                                                        name="phone-number"
                                                        placeholder={block.form.phoneNumber.placeHolder}
                                                        required=""
                                                    />
                                                </div>
                                            </>
                                        }
                                        { block.form.email && 
                                            <>
                                                <div class="col-md-12">
                                                    <label for="email" class="label">{block.form.email.heading}</label>
                                                    <input
                                                        type="email"
                                                        class="form-control mb-6"
                                                        id="email"
                                                        name="_replyto"
                                                        placeholder={block.form.email.placeHolder}
                                                        required=""
                                                    />
                                                </div>
                                            </>
                                        }
                                        { block.form.message && 
                                            <>
                                                <div class="col-md-12">
                                                    <label for="message" class="label">{block.form.message.heading}</label>
                                                    <textarea
                                                        class="form-control mb-4"
                                                        id="floatingTextarea2"
                                                        name="message"
                                                        placeholder={block.form.message.placeHolder}
                                                        rows="8"
                                                        spellcheck="false"
                                                    />
                                                </div>
                                            </>
                                        }
                                        <input type="text" name="_gotcha" style={{display: 'none'}} />

                                        { block.form.submitBtn && 
                                            <div class="col-12">
                                                <button type="submit" class="btn btn-primary btn-lg mt-7">
                                                    <span class="position-relative">{block.form.submitBtn.text }</span>
                                                </button>
                                            </div>
                                        }
                                    </form>
                                </>
                            }
                            <div class="effect">
                                <img
                                    src="/images/contact/effects.png"
                                    alt="effects"
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