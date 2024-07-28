import React from "react";
import { BrowserRouter as Router,Switch, Route  } from 'react-router-dom';

// importing all the themes
import ThemeOne from "../themes/theme-one";
import ThemeTwo from "../themes/theme-two";
import ThemeThree from '../themes/theme-three';
import ThemeFour from "../themes/theme-four";
import ThemeFive from "../themes/theme-five";
import ThemeSix from "../themes/theme-six";
import BlogTwoColumn from "../components/Blogs/BlogTwoColumn";
import BlogThreeColumn from "../components/Blogs/BlogThreeColumn";
import BlogThreeColumn_2 from "../components/Blogs/BlogThreeColumn-2";
import BlogLeftSidebar from "../components/Blogs/BlogLeftSidebar";
import BlogRightSidebar from "../components/Blogs/BlogRightSidebar";
import aboutUs from "../components/Blogs/aboutUs";
import PrivacyPolicy from "../components/Blogs/PrivacyPolicy";
import contact from "../components/Blogs/contact";
import Reviews from "../components/ReviewSection/Reviews";
import Pricing from "../components/PricingSection/Pricing";
import DownloadPage from "../components/DownloadSection/EbilimMobile";
import SubscribePage from "../components/SubscribeSection/SubscribePage";
import ThankYou from "../components/InnerSection/ThankYou";
import ComingSoon from "../components/InnerSection/ComingSoon";
import Login from "../components/Accounts/Login";
import Signup from "../components/Accounts/Signup";
import Forgot from "../components/Accounts/Forgot";
import Faq from "../components/FaqSection/Faq";
import ErrorPage from "../components/ErrorPage/404";
import ContactPage from "../components/ContactSection/ContactPage";

class MyRouts extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={ThemeOne} />
            <Route path="/theme-two" component={ThemeTwo} />
            <Route path="/ebilim" component={ThemeThree} />
            <Route path="/aidoc" component={ThemeFour} />
            <Route path="/aitest" component={ThemeFive} />
            <Route path="/partners" component={ThemeSix} />
            <Route path="/blog-two-column" component={BlogTwoColumn} />
            <Route path="/clients" component={BlogThreeColumn} />
            <Route path="/clients-2" component={BlogThreeColumn_2} />
            <Route path="/privacypolicy" component={PrivacyPolicy} />
            <Route path="/blog-left-sidebar" component={BlogLeftSidebar} />
            <Route path="/blog-right-sidebar" component={BlogRightSidebar} />
            <Route path="/about" component={aboutUs} />
            <Route path="/contact" component={contact} />
            <Route path="/reviews" component={Reviews} />
            <Route path="/pricing" component={Pricing} />
            <Route path="/download-page" component={DownloadPage} />
            <Route path="/subscribe-page" component={SubscribePage} />
            <Route path="/thank-you" component={ThankYou} />
            <Route path="/coming-soon" component={ComingSoon} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/forgot" component={Forgot} />
            <Route path="/faq" component={Faq} />
            <Route path="/error-page" component={ErrorPage} />
            <Route path="/contact-page" component={ContactPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default MyRouts;