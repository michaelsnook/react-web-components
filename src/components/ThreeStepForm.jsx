import React, { Component } from 'react';

class ThreeStepForm extends Component {
  render() {
    return (
      <div>
        <div className="tabs three">
          <input id="tabC-1" type="radio" name="tabgroupC" aria-hidden="true" />
          <label for="tabC-1" className="pseudo button toggle">1</label>
          <span> / </span>
          <input id="tabC-2" type="radio" name="tabgroupC" checked aria-hidden="true" />
          <label for="tabC-2" className="pseudo button toggle">2</label>
          <span> / </span>
          <input id="tabC-3" type="radio" name="tabgroupC" aria-hidden="true" />
          <label for="tabC-3" className="pseudo button toggle">3</label>
          <div className="row">
            <article className="card">
              <header>
                <h3>Registration form example</h3>
              </header>
              <section>
                Obviously agree with the
                <a href="#">
                  <strong data-tooltip="Clicking me is futile">terms and conditions</strong>
                </a>
              </section>
              <section>
                <label>
                <input type="checkbox" name="check" aria-hidden="true" />
                <span className="checkable">I agree with them!</span>
                </label>
              </section>
              <footer>
                <label for="tabC-2" className="button">Agree</label>
              </footer>
            </article>
            <div className="card">
              <header>
                <h3>Our relationship</h3>
              </header>
              <section>
                <select>
                  <option>How did you find us?</option>
                  <option value="hackernews">Hacker News</option>
                  <option value="friends">Friends</option>
                  <option value="google">Google</option>
                  <option value="keysmash">Keyboard smashing</option>
                </select>
              </section>
              <section>
                <label>
                  <input type="radio" name="like" value="a lot" aria-hidden="true" />
                  <span className="checkable">I love Picnic!</span>
                </label>
                <label>
                  <input type="radio" name="like" value="nothing" aria-hidden="true" />
                  <span className="checkable">I've seen better...</span>
                </label>
              </section>
              <footer>
                <label for="tabC-3" className="button">Next</label>
                <label for="tabC-1" className="button dangerous">Back</label>
              </footer>
            </div>
            <div className="card">
              <header>
                <h3>Subscribe?</h3>
              </header>
              <section>
                <input type="text" placeholder="Full Name" aria-label="Full Name" />
              </section>
              <section>
                <input type="email" placeholder="Email" aria-label="Email" />
              </section>
              <footer>
                <button className="success">Finish!</button>
                <label for="tabC-2" className="button dangerous">Back</label>
              </footer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ThreeStepForm;
