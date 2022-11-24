import DefaultLayout from '../components/layouts/default';
import Filer from '@cloudcannon/filer';
import Link from 'next/link';

const filer = new Filer({ path: 'content' });

function PrivacyPage({ page }) {
  return (
    <DefaultLayout page={page}>
      <section className="privacy-hero">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="privacy-hero-content text-center">
                <h1>{page.data.hero.title}</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="privacy">
        <div className="container">
          <div className="row">
            <div className="privacy-wrapper">
              <div className="col-lg-7 mx-auto">
                <div
                  data-bs-spy="scroll"
                  data-bs-target="#navbar-example2"
                  data-bs-offset="0"
                  className="scrollspy-example"
                  tabindex="0"
                >
                  {page.data.privacy.map((privacy, i) => (
                    <>
                        <div className="privacy-items" id={`item${i+1}`}>
                          <div className="card">
                            <h3 className="sub-title">{privacy.heading}</h3>
                            {privacy.key === 'descriptive' &&
                              <>
                                {privacy.texts.map((text, i) => (
                                  <div className="card-body" key={i}>
                                    <p className="card-text">{text.value}</p>
                                  </div>
                                ))}
                              </>
                            }
                            {privacy.key === 'bulletpoints' &&
                              <div className="card-body">
                                <ul>
                                  {privacy.texts.map((text, i) => (
                                      <li key={i}>{text.value}</li>
                                  ))}
                                </ul>
                              </div>
                            }
                          </div>
                        </div>
                    </>
                  ))}
                </div>
              </div>
              <div className="col-lg-4">
                  <nav id="scrol-nav" className="navbar navbar-light privacy-nav">
                    <ul className="nav nav-pills">
                      {page.data.privacy.map((privacy, i) => (
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
    </DefaultLayout>
  )
}

export default PrivacyPage

export async function getStaticProps({ params }) {
  const page = await filer.getItem('privacy.md', { folder: 'pages' });

  return {
    props: {
      page: JSON.parse(JSON.stringify(page))
    }
  };
}
