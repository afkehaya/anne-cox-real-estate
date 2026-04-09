const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 }
  });
  
  const htmlPath = path.resolve(__dirname, 'dist/index.html');
  await page.goto('file://' + htmlPath, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  
  await page.screenshot({ 
    path: path.resolve(__dirname, 'anne-cox-website.png'),
    fullPage: true 
  });
  
  console.log('Screenshot saved to anne-cox-website.png');
  await browser.close();
})();
