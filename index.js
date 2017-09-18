const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('http://qq.com');
  await page.screenshot({ path: 'qq.png' });

  await browser.close();
})();
