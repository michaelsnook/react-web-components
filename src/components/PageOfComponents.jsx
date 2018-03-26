import React, { Component } from 'react';
import DemoCard from './DemoCard';
import ThreeStepForm from './ThreeStepForm';
import TinyForm from './TinyForm';
import TinyDonateForm from './TinyDonateForm';
import Gallery from './Gallery';

class PageOfComponents extends Component {
  render() {
    return (
      <div>
        <div className="two-800 flex">
          <DemoCard />
          <ThreeStepForm />
        </div>
        <div className="flex three-800">
          <TinyForm title="Get my newsletter" submit="Get it" />
          <TinyDonateForm />
          <TinyDonateForm monthly title="Monthly $$s" />
        </div>
        <div className="flex">
          <Gallery />
        </div>
      </div>
    );
  }
}

export default PageOfComponents;
