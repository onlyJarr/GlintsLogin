import { test, expect } from '@playwright/test';
import assert from 'assert';

test('Login with valid credentials', async ({ page }) => {

  await page.goto('https://employers.staging.glints.id/login');
  await page.getByRole('textbox', { name: 'Masukkan email Anda' }).fill('maulala1231@gmail.com');
  await page.getByRole('textbox', { name: 'Masukkan password baru' }).fill('asdasd1231');
    await page.locator('form').getByRole('button', { name: 'Masuk' }).click();
  await page.pause();
  await expect(page.getByText('Verifikasi Email Anda')).toHaveCount(1);

});

test('Login with empty email', async ({ page }) => {

  await page.goto('https://employers.staging.glints.id/login');
  await page.getByRole('textbox', { name: 'Masukkan password baru' }).fill('asdasd1231');
    await page.locator('form').getByRole('button', { name: 'Masuk' }).click();
  await page.pause();
  await expect(page.getByText('Bagian ini wajib diisi')).toHaveCount(1);
;
});

test('Login with empty password', async ({ page }) => {

  await page.goto('https://employers.staging.glints.id/login');
  await page.getByRole('textbox', { name: 'Masukkan email Anda' }).fill('maulala1231@gmail.com');
    await page.locator('form').getByRole('button', { name: 'Masuk' }).click();
  await page.pause();
  await expect(page.getByText('Bagian ini wajib diisi')).toHaveCount(1);

});

test('Login with empty email and password', async ({ page }) => {
  // we can go to the web page
  await page.goto('https://employers.staging.glints.id/login');
  await page.locator('form').getByRole('button', { name: 'Masuk' }).click();
  await page.pause();
  await expect(page.getByText('Bagian ini wajib diisi')).toHaveCount(2);


});

test('Login with invalid credentials', async ({ page }) => {

  await page.goto('https://employers.staging.glints.id/login');
  await page.getByRole('textbox', { name: 'Masukkan email Anda' }).fill('msuwiwiss@gmail.com');
  await page.getByRole('textbox', { name: 'Masukkan password baru' }).fill('kukuskaaka');
    await page.locator('form').getByRole('button', { name: 'Masuk' }).click();
  await page.pause();
  await expect(page.getByText('Email atau password salah')).toHaveCount(1);
});


