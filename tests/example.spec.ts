import { test, expect } from '@playwright/test';
import assert from 'assert';

test.only('Login Success', async ({ page }) => {
  // we can go to the web page
  await page.goto('https://employers.staging.glints.id/login');
  await page.getByRole('textbox', { name: 'Masukkan email Anda' }).fill('maulala1231@gmail.com');
  await page.getByRole('textbox', { name: 'Masukkan password baru' }).fill('asdasd1231');
    await page.locator('form').getByRole('button', { name: 'Masuk' }).click();
  await page.pause();
  await expect(page.getByText('Verifikasi Email Anda')).toHaveCount(1);



  // // Expect a title "to contain" a substring.
  // await expect(page).toHaveTitle(/Playwright/);
});


