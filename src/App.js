import React from 'react';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Hero2 from './components/Hero2';
import HowItWorks2 from './components/HowItWorks2';
import Features2 from './components/Features2';
import FAQ from './components/FAQ';
import Testimonials3 from './components/Testimonials3';
import ClientJourney from './components/ClientJourney';
import Expertise from './components/Expertise';
import Hero3 from './components/Hero3';
import MeetCoach from './components/MeetCoach';
import Hero4 from './components/Hero4';
import TrialCTA from './components/TrialCTA';
import MethodSection from './components/MethodSection';
import Hero5 from './components/Hero5';

class App extends React.Component {
  render() {
    return (
      <div className="font-sans">
        {/* <Hero5 /> */}
        <Hero4 />
        {/* <Hero3 />
        <Hero2 /> */}
        {/* <HowItWorks2 /> */}
        <HowItWorks />
        <Testimonials />
        <Features />
        {/* <Testimonials3 /> */}
        {/* <ClientJourney /> */}
        <Expertise />
        <MeetCoach />
        <CTA />
        <TrialCTA />
        <MethodSection />
        <FAQ />
        <Footer />
      </div>
    );
  }
}

export default App;