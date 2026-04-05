import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test.describe('Accessibility — WCAG 2.1 AA', () => {
  test('full page has no WCAG 2.1 AA violations', async ({ page }) => {
    await page.goto('/')
    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa'])
      .analyze()
    expect(results.violations).toEqual([])
  })

  test('FAQ expanded state has no violations', async ({ page }) => {
    await page.goto('/')
    await page.locator('.faq-question').first().click()
    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa'])
      .analyze()
    expect(results.violations).toEqual([])
  })

  test('registration form error state has no violations', async ({ page }) => {
    await page.goto('/')
    await page.locator('.btn-submit').click()
    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa'])
      .analyze()
    expect(results.violations).toEqual([])
  })

  test('registration success state has no violations', async ({ page }) => {
    await page.goto('/')
    await page.fill('#name', 'Jane Smith')
    await page.fill('#email', 'jane@company.com')
    await page.fill('#company', 'Acme Corp')
    await page.locator('.btn-submit').click()
    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa'])
      .analyze()
    expect(results.violations).toEqual([])
  })
})
