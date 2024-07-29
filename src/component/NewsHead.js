import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import NewsSave from './NewsSave'; // Assuming you have NewsSave component to fetch and display news

export default class NewsHead extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSection: 'national', // Lowercase to match API categories
    };
  }

  setActiveSection = (section) => {
    this.setState({ activeSection: section.toLowerCase() });
  };

  render() {
    const { activeSection } = this.state;

    return (
      <>
        <div className="container mt-4">
          <div className="row">
            <div className="col-12 text-center font-extrabold">
              <h1>News <span>Bhandar</span></h1>
              <p>
                News Bhandar is a website that provides complete information about all the latest news happening in India. Here, you will find detailed news on politics, entertainment, literature, sports, science, and business. Our goal is to deliver the latest news from the country and around the world to you with speed and impartiality. Our website presents not only the latest news but also special reports, videos, and images.
                </p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-12 d-flex justify-content-center">
              <button className="btn btn-primary mx-2" style={{ backgroundColor: '#1B1F3B' }} onClick={() => this.setActiveSection('National')}>National</button>
              <button className="btn btn-primary mx-2" style={{ backgroundColor: '#1B1F3B' }} onClick={() => this.setActiveSection('Business')}>Business</button>
              <button className="btn btn-primary mx-2" style={{ backgroundColor: '#1B1F3B' }} onClick={() => this.setActiveSection('Sports')}>Sports</button>
              <button className="btn btn-primary mx-2" style={{ backgroundColor: '#1B1F3B' }} onClick={() => this.setActiveSection('World')}>World</button>
              <button className="btn btn-primary mx-2" style={{ backgroundColor: '#1B1F3B' }} onClick={() => this.setActiveSection('Politics')}>Politics</button>
              <button className="btn btn-primary mx-2" style={{ backgroundColor: '#1B1F3B' }} onClick={() => this.setActiveSection('Technology')}>Technology</button>
              <button className="btn btn-primary mx-2" style={{ backgroundColor: '#1B1F3B' }} onClick={() => this.setActiveSection('Startup')}>Startup</button>
              <button className="btn btn-primary mx-2" style={{ backgroundColor: '#1B1F3B' }} onClick={() => this.setActiveSection('Entertainment')}>Entertainment</button>
              <button className="btn btn-primary mx-2" style={{ backgroundColor: '#1B1F3B' }} onClick={() => this.setActiveSection('Miscellaneous')}>Miscellaneous</button>
              <button className="btn btn-primary mx-2" style={{ backgroundColor: '#1B1F3B' }} onClick={() => this.setActiveSection('Hatke')}>Hatke</button>
              <button className="btn btn-primary mx-2" style={{ backgroundColor: '#1B1F3B' }} onClick={() => this.setActiveSection('Science')}>Science</button>
              <button className="btn btn-primary mx-2" style={{ backgroundColor: '#1B1F3B' }} onClick={() => this.setActiveSection('Automobile')}>Automobile</button>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-12">
              <NewsSave category={activeSection} /> 
            </div>
          </div>
        </div>
      </>
    );
  }
}
