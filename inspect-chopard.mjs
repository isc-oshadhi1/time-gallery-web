import fs from 'fs';
import path from 'path';

async function main() {
  const res = await fetch('https://www.thetimegallery.qa/chopard-watch-repair');
  const html = await res.text();
  fs.writeFileSync('chopard-page.html', html);

  const imgRegex = /<img[^>]+>/g;
  let match;
  const images = [];
  while ((match = imgRegex.exec(html)) !== null) {
    const tag = match[0];
    const src = tag.match(/src="([^"]+)"/)?.[1];
    const alt = tag.match(/alt="([^"]+)"/)?.[1];
    const id = tag.match(/id="([^"]+)"/)?.[1];
    images.push({ src, alt, id });
  }

  console.log('Images found:', images.length);
  for (const img of images) {
    console.log(JSON.stringify(img));
  }
}

main().catch(console.error);
