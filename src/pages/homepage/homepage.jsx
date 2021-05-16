import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/pushy.css';
import '../../styles/style.css';
import '../../styles/cover.css';

import NavBar from '../../components/navbar';
import WidgetHolder from "../../components/WidgetHolder"
import SidePane from "../../components/sidePane"
import ScriptTag from 'react-script-tag';

import React from "react";

function HomePage() {
  return (
    <div className="text-center content-holder">
      <SidePane />
      <div className="site-overlay"></div>
      <div className="cover-container d-flex p-2 bd-highlight mx-auto flex-column">
        <NavBar />
        <WidgetHolder />
        <footer className="mastfoot mt-auto">
          <div className="inner">
            <p>API Availability dashboard for <a href="#">DIY</a>, by <a
              href="https://instagram.com/shakur427">Abdus Shakur</a>.</p>
          </div>
        </footer>
      </div>
      <ScriptTag type="text/javascript" src="pushy.js" />
    </div>
  );
}

export default HomePage;
