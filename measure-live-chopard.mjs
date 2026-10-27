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
  await page.goto('https://www.thetimegallery.qa/chopard-watch-repair', { waitUntil: 'networkidle2', timeout: 30000 });

  const metrics = await page.evaluate(() => {
    function getRect(el) {
      if (!el) return null;
      const r = el.getBoundingClientRect();
      return { top: Math.round(r.top + window.scrollY), left: Math.round(r.left), width: Math.round(r.width), height: Math.round(r.height) };
    }

    const video = document.querySelector('video') || document.querySelector('[id*="comp-lbn8xnt"]');
    const bannerImg = document.querySelector('[id*="comp-lbn8xnw3"]');
    const bannerTitle = document.querySelector('[id*="comp-lbn8xnx2"]');

    const cardIds = [
      'comp-lbn95hxf',
      'comp-lbn95hy0',
      'comp-lbn95hy9',
      'comp-lbn95hys',
      'comp-lbn95hz4',
      'comp-lbn95hzh',
      'comp-lbn95hzs',
      'comp-lbn95i03'
    ];

    const cards = cardIds.map(id => {
      const el = document.getElementById(id);
      return el ? getRect(el) : null;
    });

    const blockAHead = document.querySelector('[id*="comp-lbn95hyk"]');
    const para = document.querySelector('[id*="comp-lbn95hyn"]');
    const whyHead = document.querySelector('[id*="comp-lbn95hyq"]');
    const modelsHead = document.querySelector('[id*="comp-lbn95hyt"]');
    const repairsHead = document.querySelector('[id*="comp-lbn95hz1"]');
    const blockBHead = document.querySelector('[id*="comp-lbn95hzm"]');
    const button = document.querySelector('[id*="comp-lbwy62qj"]') || document.querySelector('a[href*="contact"]');

    return {
      video: getRect(video),
      bannerImg: getRect(bannerImg),
      bannerTitle: getRect(bannerTitle),
      cards,
      blockAHead: getRect(blockAHead),
      para: getRect(para),
      whyHead: getRect(whyHead),
      modelsHead: getRect(modelsHead),
      repairsHead: getRect(repairsHead),
      blockBHead: getRect(blockBHead),
      button: getRect(button),
    };
  });

  console.log('Metrics at 1536px:');
  console.log(JSON.stringify(metrics, null, 2));

  await browser.close();
}

main().catch(console.error);
