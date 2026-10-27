import fs from 'fs';

const html = fs.readFileSync('chopard-page.html', 'utf8');

// Find all matches for "Chopard Repair", "Chopard Refurbishment", etc.
const keywords = [
  'Chopard Repair',
  'Chopard Refurbishment',
  'Chopard Watch Service',
  'Chopard Crown Replacement',
  'Chopard Watch Battery',
  'Chopard Replacement Sapphire',
  'Chopard Replacement Dial',
  'Chopard Replacement Bracelet',
  'Chopard Watch Repair',
  'Apply for servicing'
];

for (const kw of keywords) {
  const idx = html.indexOf(kw);
  if (idx !== -1) {
    const context = html.substring(Math.max(0, idx - 200), idx + 200);
    const idMatch = context.match(/id="([^"]+)"/g);
    console.log(`Keyword "${kw}": found around ${idx}, IDs:`, idMatch);
  } else {
    console.log(`Keyword "${kw}": NOT found`);
  }
}
