import React, { Component } from 'react';

class PageOfComponents extends Component {
  render() {
    return (
      <main className="intro test">
        <h1>Testing Picnic CSS</h1>
        <p>A small testing page to see how elements behave across devices</p>
        <h2 id="button">Button types and colors</h2>

        <div>
          <button>Button</button>
          <button className="success">Button</button>
          <button className="warning">Button</button>
          <button className="error"  >Button</button>
          <button className="pseudo">Button</button>
          <button disabled>Button</button>
        </div>

        <div>
          <a className="button">Link</a>
          <a className="button success">Link</a>
          <a className="button warning">Link</a>
          <a className="button error">Link</a>
          <a className="button pseudo">Link</a>
          <a className="button" disabled>Link</a>
        </div>

        <div>
          <input type="submit" value = "Submit" />
          <input type="submit" className="success" value="Submit" />
          <input type="submit" className="warning" value="Submit" />
          <input type="submit" className="error" value="Submit" />
          <input type="submit" className="pseudo" value="Submit" />
          <input disabled type="submit" value="Submit" />
        </div>

        <div>
          <label>
            <input type="checkbox" />
            <span className="toggle button">Toggle</span>
          </label>
          <label>
            <input type="checkbox" />
            <span className="toggle button success">Toggle</span>
          </label>
          <label>
            <input type="checkbox" />
            <span className="toggle button warning">Toggle</span>
          </label>
          <label>
            <input type="checkbox" />
            <span className="toggle button error">Toggle</span>
          </label>
          <label>
            <input type="checkbox" />
            <span className="toggle button pseudo">Toggle</span>
          </label>
          <label>
            <input disabled type="checkbox" />
            <span disabled className="toggle button">Toggle</span>
          </label>
        </div>


        <h2 id="card">Card</h2>

        <p>
          <div className="flex three">
            <div>
              <article className="card">
                <img alt="" src="//picnicss.com/web/img/forest.jpg" />
                <section>This is a nice forest. What do you want to do with it?</section>
                <footer>
                  <button>Enjoy</button>
                  <button className="dangerous">Go away</button>
                </footer>
              </article>
            </div>
            <div>
              <article className="card">
                <header>
                  <h3>A more elaborated card</h3>
                </header>
                <section>It has some text</section>
                <footer>
                  And even a footer!
                </footer>
              </article>
              <div>
                <input type="checkbox" id="cardtoggle" />
                <article className="card">
                  <p>Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...</p>
                  <label htmlFor="cardtoggle" className="close">×</label>
                </article>
              </div>
            </div>
            <div>
              <input id="cardtoggle2" type="checkbox" name="name" />
              <article className="card">
                <header>
                  <h1>Header 1</h1>
                  <label htmlFor="cardtoggle2" className="close">×</label>
                </header>
              </article>
              <input id="cardtoggle3" type="checkbox" name="name2" />
              <article className="card">
                <header>
                  <h2>Header 2</h2>
                  <label htmlFor="cardtoggle3" className="close">×</label>
                </header>
              </article>
              <article className="card">
                <header>
                  <h3>Header 3</h3>
                  <a className="close">×</a>
                </header>
              </article>
              <article className="card">
                <header>
                  <h4>Header 4</h4>
                  <a className="close">×</a>
                </header>
              </article>
            </div>
          </div>

          <div className="row">
            <div className="card">
              <p>This is a one line card</p>
              <a className="close">×</a>
            </div>
          </div>
        </p>


        <h2 id="checkbox">Checkbox</h2>

        <label>
          <input type="checkbox" />
          <span className="checkable">Check me out (;</span>
        </label>
        <br />
        <input id="checktest" type="checkbox" defaultChecked />
        <label htmlFor="checktest" className="checkable">Uncheck me</label>


        <h2 id="dropimage">Dropimage</h2>

        <div className="flex three">
          <div>
            <label className="dropimage" style={{backgroundImage: "url('//picnicss.com/web/img/forest.jpg')"}}>
              <input name="filea" title="Drop image or click me" type="file" />
            </label>
          </div>
          <div>
            <label className="dropimage">
              <input name="fileb" title="Drop image or click me" type="file" />
            </label>
          </div>
          <div>
            <label className="dropimage">
              <input name="filec" title="Drop image or click me" type="file" />
            </label>
          </div>
        </div>


        <h2 id="grid">Grid</h2>

        <div className="flex two four-500 six-800 demo">
          <div><span>1</span></div>
          <div><span>2</span></div>
          <div className="full half-500 third-800"><span>3</span></div>
          <div><span>4</span></div>
          <div><span>5</span></div>
          <div><span>6</span></div>
          <div><span>7</span></div>
          <div><span>8</span></div>
          <div><span>9</span></div>
          <div className="off-half off-fourth-500 off-sixth-800"><span>10</span></div>
        </div>


        <h2 id="input">Input</h2>

        <div className="flex two">
          <div>
            <input placeholder="Full name" />
          </div><div>
            <input type="number" placeholder="Number" />
          </div>
        </div>
        <div className="flex two">
          <div>
            <input type="email" placeholder="Email" />
          </div><div>
            <input type="password" placeholder="Password" />
          </div>
        </div>
        <div className="flex two">
          <div>
            <input type="file" />
          </div><div>
            <input type="color" />
          </div>
        </div>

        <div className="flex one">
          <div>
            <textarea placeholder="Full description"></textarea>
          </div>
        </div>


        <h2 id="label">Label</h2>

        <p>
          <h1>h1 is important
            <span className="label">Normal</span>
          </h1>
          <h2>h2 is important too
            <span className="label success">Success</span>
          </h2>
          <h3>Is h3 important?
            <span className="label warning">Warning</span>
          </h3>
          <h4>h4 is not so important
            <span className="label error">Error</span>
          </h4>
          <p>p is normal text
            <span className="label">Normal</span>
          </p>
        </p>


        <h2 id="modal">Modal</h2>

        <p>
          <label htmlFor="modal_1" className="button">
          Show modal
          </label>
        </p>

        <div className="modal">
          <input id="modal_1" type="checkbox" />
          <label htmlFor="modal_1" className="overlay"></label>
          <article>
            <header>
              <h3>Great offer</h3>
              <label htmlFor="modal_1" className="close">×</label>
            </header>
            <section className="content">
              We have a special offer for you. I am sure you will love it! However this does look spammy...
            </section>
            <footer>
              <a className="button" href="#">See offer</a>
              <label htmlFor="modal_1" className="button dangerous">
                Cancel
              </label>
            </footer>
          </article>
        </div>


        <h2 id="nav">Nav</h2>

        <p>
          <nav style={{position: 'relative', zIndex: 9 }}>
            <a href="#" className="brand">
              <img className="logo" src="//picnicss.com/web/img/basket.png" />
              <span>Picnic CSS</span>
            </a>

            <input id="bmenub" type="checkbox" className="show" />
            <label htmlFor="bmenub" className="burger pseudo button toggle">menu</label>

            <div className="menu">
              <a href="#" className="pseudo button icon-picture">Demo</a>
              <a href="#" className="button icon-puzzle">Plugins</a>
            </div>
          </nav>
        </p>


        <h2 id="radio">Radio button</h2>

        <p>
          <label>
            <input type="radio" name="radiodemo" />
            <span className="checkable">Select me</span>
          </label>
        </p>
        <p>
          <label>
            <input checked type="radio" name="radiodemo" />
            <span className="checkable">Or me</span>
          </label>
        </p>


        <h2 id="select">Select</h2>

        <p>
          <select>
            <option>Select an option</option>
            <option>Good option</option>
            <option>Nice option</option>
            <option>Cheap option</option>
          </select>
        </p>


        <h2 id="stack">Stack</h2>

        <h3>Buttons stack</h3>

        <div className="flex four">
          <div>
            <span className="stack button icon-puzzle">Plugins</span>
            <span className="stack button icon-picture">Demo</span>
            <span className="stack button icon-help-circled">Test</span>
          </div>
          <div>
            <label className="stack">
              <input type="radio" name="stack" defaultChecked />
              <span className="button toggle icon-puzzle">Plugins</span>
            </label>
            <label className="stack">
              <input type="radio" name="stack" />
              <span className="button toggle icon-picture">Demo</span>
            </label>
            <label className="stack">
              <input type="radio" name="stack" />
              <span className="button toggle icon-help-circled">Test</span>
            </label>
          </div>
          <div>
            <label className="stack">
              <input type="checkbox" defaultChecked />
              <span className="button toggle icon-puzzle">Plugins</span>
            </label>
            <label className="stack">
              <input type="checkbox" defaultChecked />
              <span className="button toggle icon-picture">Demo</span>
            </label>
            <label className="stack">
              <input type="checkbox" />
              <span className="button toggle icon-help-circled">Test</span>
            </label>
          </div>
          <div>
            <span className="stack pseudo button icon-puzzle">Plugins</span>
            <span className="stack pseudo button icon-picture">Demo</span>
            <span className="stack pseudo button icon-help-circled">Test</span>
          </div>
        </div>

        <h3>Image stack</h3>

        <div className="flex four">
          <div>
            <img className="stack" src="//picnicss.com/web/img/forest.jpg" />
            <a className="stack button">Forest</a>
          </div>
          <div>
            <img className="stack" src="//picnicss.com/web/img/balloon.jpg" />
            <a className="stack button">Balloon</a>
          </div>
          <div>
            <img className="stack" src="//picnicss.com/web/img/lake.jpg" />
            <a className="stack button">Lake</a>
          </div>
          <div>
            <img className="stack" src="//picnicss.com/web/img/halong.jpg" />
            <a className="stack button">Halong bay</a>
          </div>
        </div>

        <h3>Form stack</h3>

        <div className="flex four">
          <div>
            <input className="stack" placeholder="Name" />
            <input className="stack" type="email" placeholder="Email" />
            <input className="stack" type="password" placeholder="Password" />
          </div>
          <div>
            <select className="stack">
              <option>Select an option</option>
              <option>Good option</option>
              <option>Nice option</option>
              <option>Cheap option</option>
            </select>
            <select className="stack">
              <option>Select an option</option>
              <option>Good option</option>
              <option>Nice option</option>
              <option>Cheap option</option>
            </select>
            <select className="stack">
              <option>Select an option</option>
              <option>Good option</option>
              <option>Nice option</option>
              <option>Cheap option</option>
            </select>
          </div>
          <div>
            <textarea className="stack" placeholder="Textarea"></textarea>
            <textarea className="stack" placeholder="Textarea"></textarea>
            <textarea className="stack" placeholder="Textarea"></textarea>
          </div>
          <div>
            <label className="dropimage stack">
              <input name="filea" title="Drop image or click me" type="file" />
            </label>
            <label className="dropimage stack">
              <input name="filea" title="Drop image or click me" type="file" />
            </label>
            <label className="dropimage stack">
              <input name="filea" title="Drop image or click me" type="file" />
            </label>
          </div>
        </div>


        <h2 id="table">Table</h2>

        <table className="primary">
          <thead>
            <tr>
              <th>Name</th>
              <th>City</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Francisco</td>
              <td>Valencia, Spain</td>
              <td>23</td>
            </tr>
            <tr>
              <td>Eve</td>
              <td>San Francisco, USA</td>
              <td>22</td>
            </tr>
            <tr>
              <td>Martin</td>
              <td>New York, USA</td>
              <td>45</td>
            </tr>
            <tr>
              <td>Sarah</td>
              <td>London, UK</td>
              <td>25</td>
            </tr>
          </tbody>
        </table>


        <h2>Tab</h2>

        <div className="flex two">
          <div>
            <div className="tabs three">
              <input id="tabB-1" type="radio" name="tabgroupB" defaultChecked />
              <label className="pseudo button toggle" htmlFor="tabB-1">Forest</label>
              <input id="tabB-2" type="radio" name="tabgroupB" />
              <label className="pseudo button toggle" htmlFor="tabB-2">Lake</label>
              <input id="tabB-3" type="radio" name="tabgroupB" />
              <label className="pseudo button toggle" htmlFor="tabB-3">Balloon</label>
              <div className="row">
                <div>
                  <img alt="" src="//picnicss.com/web/img/forest.jpg" />
                </div>

                <div>
                  <img alt="" src="//picnicss.com/web/img/lake.jpg" />
                </div>

                <div>
                  <img alt="" src="//picnicss.com/web/img/balloon.jpg" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="tabs three" style={{ textAlign: 'center'}}>
              <input id="tabF-1" type="radio" name="tabgroupF" defaultChecked />
              <label className="pseudo button toggle" htmlFor="tabF-1">1</label>
              /
              <input id="tabF-2" type="radio" name="tabgroupF" />
              <label className="pseudo button toggle" htmlFor="tabF-2">2</label>
              /
              <input id="tabF-3" type="radio" name="tabgroupF" />
              <label className="pseudo button toggle" htmlFor="tabF-3">3</label>
              <div className="row">
                <div>
                  <div className="card" style={{ margin: '0 20px' }}>
                    <header>
                      <h3>Super important notice!</h3>
                    </header>
                    <p>Thank you for registering! By doing so you agree to the <a href="#">Terms and conditions</a></p>
                    <footer>
                      <label className="button" htmlFor="tabF-2">Agree</label>
                    </footer>
                  </div>
                </div>

                <div>
                  <div className="card" style={{margin: '0 20px'}}>
                    <header>
                      <h3>Your basic data</h3>
                    </header>
                    <section>
                      <input type="text" placeholder="Full Name" />
                    </section>
                    <section>
                      <div className="select">
                        <select>
                          <option>Where did you find us?</option>
                          <option>Facebook</option>
                          <option>Twitter</option>
                          <option>Linkedin</option>
                        </select>
                      </div>
                    </section>
                    <footer>
                      <label className="button" htmlFor="tabF-3">Next</label>
                      <label className="button dangerous" htmlFor="tabF-1">Back</label>
                    </footer>
                  </div>
                </div>

                <div>
                  <div className="card" style={{margin: '0 20px'}}>
                    <header>
                      <h3>Create account</h3>
                    </header>
                    <section>
                      <input type="email" placeholder="Email" />
                    </section>
                    <section>
                      <input type="password" placeholder="Password" />
                    </section>
                    <footer>
                      <button className="success">Finish!</button>
                      <label className="button dangerous" htmlFor="tabF-2">Back</label>
                    </footer>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div>
            <div className="tabs two">
              <input id="tabA-1" type="radio" name="tabgroupA" defaultChecked />
              <label className="button toggle" htmlFor="tabA-1">Tab 1</label>
              <input id="tabA-2" type="radio" name="tabgroupA" />
              <label className="button toggle" htmlFor="tabA-2">Tab 2</label>
              <div className="row">
                <div className="tab">
                  <div>
                    <h2>This is the first tab</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>

                <div className="tab">
                  <div>
                    <h2>This is the second tab</h2>
                    <p>
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div>

            <div className="tabs four">
              <input id="tabD-1" type="radio" name="tabgroupD" defaultChecked />
              <label className="pseudo button toggle" htmlFor="tabD-1">•</label>
              <input id="tabD-2" type="radio" name="tabgroupD" />
              <label className="pseudo button toggle" htmlFor="tabD-2">•</label>
              <input id="tabD-3" type="radio" name="tabgroupD" />
              <label className="pseudo button toggle" htmlFor="tabD-3">•</label>
              <input id="tabD-4" type="radio" name="tabgroupD" />
              <label className="pseudo button toggle" htmlFor="tabD-4">•</label>
              <div className="row">
                <div className="tab">
                  <div>
                    <h2>This is the first tab</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>

                <div className="tab">
                  <div>
                    <h2>This is the second tab</h2>
                    <p>
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                  </div>
                </div>
                <div className="tab">
                  <div>
                    <h2>This is the third tab</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>

                <div className="tab">
                  <div>
                    <h2>This is the fourth tab</h2>
                    <p>
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <h2 id="tooltip">Tooltip</h2>

        <p>
          <button data-tooltip="This is a great tooltip" className="tooltip-left">
            Left
          </button>
          <button data-tooltip="This is a great tooltip">
            Bottom (default)
          </button>
          <button data-tooltip="This is a great tooltip" className="tooltip-top">
            Top
          </button>
          <button data-tooltip="This is a great tooltip" className="tooltip-right">
            Right
          </button>
        </p>
        <br /><br /><br />

      </main>

    );
  }
}

export default PageOfComponents;
