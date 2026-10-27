import fs from 'fs';
import path from 'path';

const outDir = path.resolve('src/assets/images/brands/chopard');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const images = [
  { name: 'banner-chopard.jpg', url: 'https://static.wixstatic.com/media/817fa5_4f7679772cfe4339af0bdbba81003f91~mv2.jpg' },
  { name: 'repair.jpg', url: 'https://static.wixstatic.com/media/817fa5_0180de01329c40f2a85fe538b050ad88~mv2.jpg' },
  { name: 'refurbishment-polish.jpg', url: 'https://static.wixstatic.com/media/817fa5_5340cddcb3b544ab8f4c6384d4a78038~mv2.jpg' },
  { name: 'watch-service.jpg', url: 'https://static.wixstatic.com/media/817fa5_80b736577e394fc1966a7b00824c5ae9~mv2.jpg' },
  { name: 'crown-replacement.jpg', url: 'https://static.wixstatic.com/media/817fa5_c38b1210244645209a3c04793e002a3a~mv2.jpg' },
  { name: 'battery-replacement.jpg', url: 'https://static.wixstatic.com/media/817fa5_617cccd02038448d8b535dbfe9b0fbdd~mv2.jpg' },
  { name: 'sapphire-plexi-glass.jpg', url: 'https://static.wixstatic.com/media/817fa5_170dd75bdd894cf7ab9e66134cec2ae5~mv2.jpg' },
  { name: 'replacement-dial.jpg', url: 'https://static.wixstatic.com/media/817fa5_0f0e39e6af40477882c2653ec4b4f0b5~mv2.jpg' },
  { name: 'bracelet-straps.jpg', url: 'https://static.wixstatic.com/media/817fa5_f8a226be1f2746e2baf36eca0dc8d2e2~mv2.jpg' },
];

async function downloadImages() {
  for (const item of images) {
    console.log(`Downloading ${item.name}...`);
    const res = await fetch(item.url);
    if (!res.ok) throw new Error(`Failed to fetch ${item.url}: ${res.statusText}`);
    const buffer = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync(path.join(outDir, item.name), buffer);
    console.log(`Saved ${item.name} (${buffer.length} bytes)`);
  }
  console.log('All Chopard images downloaded successfully!');
}

downloadImages().catch(console.error);
