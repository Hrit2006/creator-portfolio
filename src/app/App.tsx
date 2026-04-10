import { CoverSection } from './components/CoverSection';
import { AboutSection } from './components/AboutSection';
import { AnalyticsSection } from './components/AnalyticsSection';
import { ContentPillarsSection } from './components/ContentPillarsSection';
import { TopContentSection } from './components/TopContentSection';
import { SocialMediaFeedSection } from './components/SocialMediaFeedSection';
import { ServicesSection } from './components/ServicesSection';
import { ContactSection } from './components/ContactSection';
const profilePhoto = '/jinia.jpeg';
const topPerformerReel = '/school-plot-jinia.jpeg';
const redOutfitReel = '/school-plot-jinia.jpeg.jpeg';

export default function App() {
  // Profile and content images
  const profileImage = profilePhoto;
  const contentImage1 = topPerformerReel;
  const contentImage2 = redOutfitReel;

  return (
    <div className="min-h-screen">
      <CoverSection profileImage={profileImage} />
      <AboutSection />
      <AnalyticsSection />
      <ContentPillarsSection />
      <TopContentSection image1={contentImage1} image2={contentImage2} />
      <SocialMediaFeedSection />
      <ServicesSection />
      <ContactSection />
    </div>
  );
}