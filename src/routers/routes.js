import React from "react";
import { BrowserRouter as Router,Switch, Route  } from 'react-router-dom';

// importing all the themes
import Index from "../themes/Index";
import EBilim from '../themes/EBilim';
import AiDoc from "../themes/AiDoc";
import AiTest from "../themes/AiTest";
import Partners from "../themes/Partners";
import Clients from "../components/Blogs/Clients";
import aboutUs from "../components/Blogs/AboutUs";
import PrivacyPolicy from "../components/Blogs/PrivacyPolicy";
import contact from "../components/Blogs/Contact";

class MyRouts extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/ebilim" component={EBilim} />
            <Route path="/aidoc" component={AiDoc} />
            <Route path="/aitest" component={AiTest} />
            <Route path="/partners" component={Partners} />
            <Route path="/clients" component={Clients} />
            <Route path="/privacypolicy" component={PrivacyPolicy} />
            <Route path="/about" component={aboutUs} />
            <Route path="/contact" component={contact} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default MyRouts;