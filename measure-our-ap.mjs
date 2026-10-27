import puppeteer from 'puppeteer-core';

const chromePath = 'C:\\Users\\Oshadhi\\AppData\\Local\\Google\\Chrome\\Application\\chrome.exe';

async function main() {
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  await page.setViewport({ width: 1536, height: 900 });
  await page.goto('http://localhost:5173/audemars-piguet-watch-repair', { waitUntil: 'networkidle2' });

  const metrics = await page.evaluate(() => {
    const banner = document.querySelector('.brand-banner-container');
    const bannerRect = banner ? banner.getBoundingClientRect() : null;

    const bannerVideo = document.querySelector('.brand-banner-video-wrapper');
    const videoRect = bannerVideo ? bannerVideo.getBoundingClientRect() : null;

    const bannerImg = document.querySelector('.brand-banner-image-wrapper');
    const imgRect = bannerImg ? bannerImg.getBoundingClientRect() : null;

    const bannerTitle = document.querySelector('.brand-banner-title');
    const titleRect = bannerTitle ? bannerTitle.getBoundingClientRect() : null;

    const cardElements = document.querySelectorAll('.brand-card');
    const cards = Array.from(cardElements).map(c => {
      const r = c.getBoundingClientRect();
      return { id: c.id, top: r.top + window.scrollY, left: r.left, width: r.width, height: r.height };
    });

    const blockAHead = document.querySelector('.brand-block-a__heading');
    const whyHead = document.querySelector('.brand-block-a__why-heading');
    const modelsHead = document.querySelector('.brand-block-a__models-heading');
    const repairsHead = document.querySelector('.brand-block-a__repairs-heading');
    const blockBHead = document.querySelector('.brand-block-b__heading');
    const button = document.querySelector('.brand-block-b__button');

    function getRect(el) {
      if (!el) return null;
      const r = el.getBoundingClientRect();
      return { top: r.top + window.scrollY, left: r.left, width: r.width, height: r.height };
    }

    // Check horizontal scroll
    const hasHorizontalOverflow = document.documentElement.scrollWidth > window.innerWidth;

    return {
      viewport: { width: window.innerWidth, height: window.innerHeight },
      hasHorizontalOverflow,
      scrollWidth: document.documentElement.scrollWidth,
      banner: bannerRect ? {
        top: bannerRect.top + window.scrollY,
        left: bannerRect.left,
        width: bannerRect.width,
        height: bannerRect.height,
        centerOffset: (bannerRect.left + bannerRect.width / 2) - window.innerWidth / 2
      } : null,
      video: videoRect ? { top: videoRect.top + window.scrollY, left: videoRect.left, width: videoRect.width, height: videoRect.height } : null,
      bannerImg: imgRect ? { top: imgRect.top + window.scrollY, left: imgRect.left, width: imgRect.width, height: imgRect.height } : null,
      bannerTitle: titleRect ? {
        top: titleRect.top + window.scrollY,
        left: titleRect.left,
        width: titleRect.width,
        height: titleRect.height,
        distanceFromImgLeft: titleRect.left - (imgRect ? imgRect.left : 0),
        distanceFromBannerBottom: (bannerRect ? bannerRect.top + bannerRect.height : 0) - (titleRect.top + titleRect.height / 2)
      } : null,
      cards,
      blockAHeading: getRect(blockAHead),
      whyHeading: getRect(whyHead),
      modelsHeading: getRect(modelsHead),
      repairsHeading: getRect(repairsHead),
      blockBHeading: getRect(blockBHead),
      button: getRect(button),
    };
  });

  console.log('--- OUR MEASUREMENTS AT 1536px ---');
  console.log(JSON.stringify(metrics, null, 2));

  // Take screenshot for visual inspection
  await page.screenshot({ path: 'ap_1536px_verified.png', fullPage: true });
  console.log('Screenshot saved to ap_1536px_verified.png');

  await browser.close();
}

main().catch(console.error);
