import { test, expect } from '@sand4rt/experimental-ct-angular';
import { AppComponent } from '@/app.component';
import type { HooksConfig } from 'playwright';

test('navigate to a page by clicking a link', async ({ page, mount }) => {
  const component = await mount<HooksConfig>(AppComponent, {
    hooksConfig: { routing: true },
  });
  await expect(component.getByRole('main')).toHaveText('Login');
  await expect(page).toHaveURL('/');
  await component.getByRole('link', { name: 'Dashboard' }).click();
  await expect(component.getByRole('main')).toHaveText('Dashboard');
  await expect(page).toHaveURL('/dashboard');
});
