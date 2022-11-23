import DefaultLayout from '../components/layouts/default';
import Filer from '@cloudcannon/filer';
import Link from 'next/link';

const filer = new Filer({ path: 'content' });

function PrivacyPage({ page }) {
  return (
    <DefaultLayout page={page}>
      <section class="privacy-hero">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="privacy-hero-content text-center">
                <h1>{page.data.hero.title}</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="privacy">
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
                  {page.data.privacy.map((privacy, i) => (
                    <>
                        <div class="privacy-items" id={`item${i+1}`}>
                          <div class="card">
                            <h3 class="sub-title">{privacy.heading}</h3>
                            {privacy.key === 'descriptive' &&
                              <>
                                {privacy.texts.map((text, i) => (
                                  <div class="card-body" key={i}>
                                    <p class="card-text">{text.value}</p>
                                  </div>
                                ))}
                              </>
                            }
                            {privacy.key === 'bulletpoints' &&
                              <div class="card-body">
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
              <div class="col-lg-4">
                  <nav id="scrol-nav" class="navbar navbar-light privacy-nav">
                    <ul class="nav nav-pills">
                      {page.data.privacy.map((privacy, i) => (
                        <>
                          <li class="nav-item">
                            <Link class={`nav-link ${i == 0 ? 'active': ''}`} href={`#item${i+1}`}>
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
