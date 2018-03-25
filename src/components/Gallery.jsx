import React, { Component } from 'react';

class TinyForm extends Component {
  render() {
    return (
      <div className="tabs four">
        <input id="tabD-1" type="radio" name="tabGroupD" defaultChecked />
        <input id="tabD-2" type="radio" name="tabGroupD" />
        <input id="tabD-3" type="radio" name="tabGroupD" />
        <input id="tabD-4" type="radio" name="tabGroupD" />
        <div className="row">
          <div>
            <img alt="" src="//picnicss.com/web/img/forest.jpg" />
          </div>
          <div>
            <img alt="" src="//picnicss.com/web/img/lake.jpg" />
          </div>
          <div>
            <img alt="" src="//picnicss.com/web/img/halong.jpg" />
          </div>
          <div>
            <img alt="" src="//picnicss.com/web/img/balloon.jpg" />
          </div>
        </div>
        <label htmlFor="tabD-1"><img alt="" src="//picnicss.com/web/img/forest.jpg" /></label>
        <label htmlFor="tabD-2"><img alt="" src="//picnicss.com/web/img/lake.jpg" /></label>
        <label htmlFor="tabD-3"><img alt="" src="//picnicss.com/web/img/halong.jpg" /></label>
        <label htmlFor="tabD-4"><img alt="" src="//picnicss.com/web/img/balloon.jpg" /></label>
      </div>

    );
  }
}

export default TinyForm;
