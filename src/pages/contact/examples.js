import React from 'react'
import Link from 'gatsby-link'
import Layout from '../../components/Layout'

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              
              <p>
                This is an example site integrating Netlify’s form handling with
                Gatsby
              </p>
              <ul>
                <li>
                  <Link to="/contact">Basic contact form</Link>
                </li>
                <li>
                  <Link to="/contact/file-upload/">Form with file upload</Link>
                </li>
              </ul>

              
              <h3>Adding reCAPTCHA</h3>
              <p>
                If you are planning to add reCAPTCHA please go to{' '}
                <a href="https://github.com/imorente/gatsby-netlify-form-example">
                  imorente/gatsby-netlify-form-example
                </a>{' '}
                for a working example.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
