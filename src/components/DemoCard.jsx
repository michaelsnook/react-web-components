import React, { Component } from 'react';

class DemoCard extends Component {
  render() {
    return (
      <div class="card">
        <section>
          <button>Normal</button>
          <button className="success">Success</button>
          <button className="warning">Warning</button>
          <button className="error">Error</button>
        </section>
        <section>
          <input type="email" placeholder="Email" aria-label="Email" />
        </section>
        <section>
          <div className="flex three gallery">
            <div>
              <article data-tooltip="Click me to upload a new image" class="tooltip-bottom">
                <label className="dropimage">
                  <input type="file" />
                </label>
              </article>
            </div>
            <div>
              <article data-tooltip="Click me to upload a new image" className="tooltip-bottom">
                <label /*style="background-image: url(web/img/optimised.svg)"*/  className="dropimage">
                  <input type="file" />
                </label>
              </article>
            </div>
            <div>
              <article data-tooltip="Click me to upload a new image" className="tooltip-bottom">
                <label /*style="background-image: url(web/img/optimised.svg)"*/ className="dropimage">
                  <input type="file" />
                </label>
              </article>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default DemoCard;
