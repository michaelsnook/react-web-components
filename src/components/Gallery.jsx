import React, { Component } from 'react';

class TinyForm extends Component {
  render() {
    return (
      <div class="tabs four">
        <input id="tabD-1" type="radio" name="tabGroupD" checked />
        <input id="tabD-2" type="radio" name="tabGroupD" />
        <input id="tabD-3" type="radio" name="tabGroupD" />
        <input id="tabD-4" type="radio" name="tabGroupD" />
        <div class="row">
          <div>
            <img src="//picnicss.com/web/img/forest.jpg" />
          </div>
          <div>
            <img src="//picnicss.com/web/img/lake.jpg" />
          </div>
          <div>
            <img src="//picnicss.com/web/img/halong.jpg" />
          </div>
          <div>
            <img src="//picnicss.com/web/img/balloon.jpg" />
          </div>
        </div>
        <label for="tabD-1"><img src="//picnicss.com/web/img/forest.jpg" /></label>
        <label for="tabD-2"><img src="//picnicss.com/web/img/lake.jpg" /></label>
        <label for="tabD-3"><img src="//picnicss.com/web/img/halong.jpg" /></label>
        <label for="tabD-4"><img src="//picnicss.com/web/img/balloon.jpg" /></label>
      </div>

    );
  }
}

export default TinyForm;
