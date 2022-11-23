import Link from 'next/link';
import DefaultLayout from '../components/layouts/default';
function Custom404() {
    return (
      <DefaultLayout>
        <section class="error py-xxl-12 py-lg-9 py-10 py-sm-6">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="error-content text-center">
                  <img width="300" src="/images/404/error.png" class="" alt="error-image" />
                  <h3 class="my-5">This page is missing.</h3>
                  <Link href="/" class="btn btn-lg btn-primary">Go home</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </DefaultLayout>
    )
  }
  
export default Custom404
