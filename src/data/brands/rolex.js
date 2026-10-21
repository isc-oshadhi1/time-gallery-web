import bannerImg from '../../assets/images/brands/rolex/banner-sky-dweller.jpg';
import repairImg from '../../assets/images/brands/rolex/repair.jpg';
import refurbishmentImg from '../../assets/images/brands/rolex/refurbishment-polish.jpg';
import watchServiceImg from '../../assets/images/brands/rolex/watch-service.jpg';
import crownReplacementImg from '../../assets/images/brands/rolex/crown-replacement.jpg';
import batteryReplacementImg from '../../assets/images/brands/rolex/battery-replacement.jpg';
import sapphirePlexiGlassImg from '../../assets/images/brands/rolex/sapphire-plexi-glass.jpg';
import replacementDialImg from '../../assets/images/brands/rolex/replacement-dial.jpg';
import braceletStrapsImg from '../../assets/images/brands/rolex/bracelet-straps.jpg';

export const rolexData = {
  slug: 'rolex',
  brandName: 'Rolex',
  pageTitle: 'Rolex Watch Repair | Thetimegallery',
  banner: {
    videoSrc: '/videos/about-banner.mp4',
    imageSrc: bannerImg,
    heading: 'Rolex Watch Repair',
  },
  cards: [
    {
      id: 'rolex-repair',
      title: 'Rolex Repair',
      image: repairImg,
      alt: 'Rolex repair',
      minHeight: 238,
      gapBottom: 20,
      photoTop: 38,
      description:
        'The time gallery repair hundreds of\nRolex watches every year and are\nexperts in our field. Please contact us\nbelow for a free quote.',
    },
    {
      id: 'rolex-refurbishment-polish',
      title: 'Rolex Refurbishment & Polish',
      image: refurbishmentImg,
      alt: 'Rolex Refurbishment & Polish',
      minHeight: 236,
      gapBottom: 25,
      photoTop: 37,
      description:
        'The time gallery are experts in watch refurbishment and watch polishing.  We can bring your watch to its very best using the finest Swiss polishing and lapping equipment.',
    },
    {
      id: 'rolex-watch-service',
      title: 'Rolex Watch Service',
      image: watchServiceImg,
      alt: 'Rolex Watch Service',
      minHeight: 236,
      gapBottom: 38,
      photoTop: 37,
      description:
        'Every service goes through a 26 step process to ensure your watch is brought back to its very best like new condition.',
    },
    {
      id: 'rolex-crown-replacement',
      title: 'Rolex Crown Replacement',
      image: crownReplacementImg,
      alt: 'Rolex Crown Replacement',
      minHeight: 236,
      gapBottom: 24,
      photoTop: 37,
      description:
        'We replace all crowns using official\nparts. We then pressure test your watch\nto ensure it’s water resistance.',
    },
    {
      id: 'rolex-battery-replacement',
      title: 'Rolex Watch Battery Replacement',
      image: batteryReplacementImg,
      alt: 'Rolex Watch Battery Replacement',
      minHeight: 258,
      gapBottom: 24,
      photoTop: 37,
      description:
        'We use only the finest Swiss batteries when replacing your battery.  This service includes a reseal and pressure test to ensure your watch is waterproof.',
    },
    {
      id: 'rolex-sapphire-plexi-glass',
      title: 'Rolex Replacement Sapphire & Plexi Glass',
      image: sapphirePlexiGlassImg,
      alt: 'Rolex Replacement Sapphire & Plexi Glass',
      minHeight: 236,
      gapBottom: 26,
      photoTop: 37,
      description:
        'Whether your watch needs a replacement sapphire glass, sapphire crystal or replacement plexiglass.',
    },
    {
      id: 'rolex-replacement-dial',
      title: 'Rolex Replacement Dial',
      image: replacementDialImg,
      alt: 'Rolex Replacement Dial',
      minHeight: 237,
      gapBottom: 26,
      photoTop: 37,
      description:
        'Please contact us if your watch dial is damaged or showing signs of age.  We house an extensive stock of old and new Dials.',
    },
    {
      id: 'rolex-bracelet-straps',
      title: 'Rolex Replacement Bracelet & Straps',
      image: braceletStrapsImg,
      alt: 'Rolex Replacement Bracelet & Straps',
      minHeight: 258,
      gapBottom: 0,
      photoTop: 37,
      description:
        'If your watch strap or bracelet is showing signs of age and needs to be replaced contact us for a replacement. We stock most straps and bracelets at affordable prices.',
    },
  ],
  blockA: {
    heading:
      'The Time Gallery Experts in Rolex Repairs and Services.  All Our Work Includes a 1 Year Guarantee So you can rest assured your watch is in safe hands. Our Services Cannot Be Beaten.',
    paragraph:
      'Whether your watch needs a complete repair, refurbishment or simply a replacement glass or crown. The Time Gallery has the experience and expertise needed to bring your watch back to its best.',
    whyHeading: 'Why Use The Time Gallery for your Rolex Repair?',
    whyBullets: [
      'Expert Qualified Watchmakers.',
      'Official Parts.',
      'Fast Turnaround – Currently 10 working days.',
      '1 Year Guarantee On All Repairs.',
    ],
    modelsHeading:
      'We service and repair all Rolex models including the following models:-',
    // TODO: these are Breitling models, ask my lead whether to keep.
    modelsList: [
      'Navitimer',
      'Superocean',
      'Avenger',
      'Chronomat',
      'Colt',
      'Galatic',
      'Transocean',
      'Bentley',
      'Heritage',
      'Most brilliant',
      'Professional',
      'Chronoliner',
      'Emergency',
    ],
    repairsHeading: 'Frequent Rolex repairs that we undertake are:-',
    repairsBullets: [
      'Rolex Hand Replacement.',
      'Rolex Dial Replacement.',
      'Rolex Replacement Glass.',
      'Rolex Full  Refurbishment.',
      'Rolex Replacement Batteries.',
      'Rolex Bezel Replacement.',
      'Rolex Replacement Crowns & Pushers.',
    ],
  },
  blockB: {
    heading:
      'Please contact us regarding any repair query you may have regarding your Rolex watch repair.',
    paragraph:
      'Please fill out the form below and be pleasantly surprised by our fair costs. We endeavor to reply within 24 hours.',
    buttonText: 'Apply for servicing your watch',
    buttonLink: '/contact',
  },
};

export default rolexData;
