const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  
  console.log('Login ke Acore...');
  await page.goto('https://dash.acorehosting.com/login');
  
  // GANTI EMAIL & PASSWORD LU DISINI
  await page.type('input[name="email"]', 'minecrosoftXsabi@outlook.com');
  await page.type('input[name="password"]', 'BestHostinger11');
  await page.click('button[type="submit"]');
  await page.waitForNavigation();

  console.log('Masuk ke server...');
  await page.goto('https://dash.acorehosting.com/servers');
  await page.waitForTimeout(5000);
  
  // Klik server pertama
  await page.click('a[href*="/server/"]');
  await page.waitForTimeout(5000);

  // Cari tombol Renew
  const renewBtn = await page.$('button:contains("Renew")');
  if (renewBtn) {
    await renewBtn.click();
    console.log('✅ BERHASIL AUTO RENEW! Sisa 24 jam lagi');
  } else {
    console.log('Belum waktunya renew, masih >7 jam');
  }

  await browser.close();
})();
