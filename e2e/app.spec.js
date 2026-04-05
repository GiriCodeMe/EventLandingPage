import { test, expect } from '@playwright/test'

test.describe('EventLandingPage — Behavioural', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('page loads with correct title', async ({ page }) => {
    await expect(page).toHaveTitle('EPAM Tech Summit 2026')
  })

  test('navbar is visible with logo and links', async ({ page }) => {
    await expect(page.locator('.navbar')).toBeVisible()
    await expect(page.locator('.navbar-logo')).toContainText('EPAM Tech Summit')
    await expect(page.locator('.navbar-links')).toBeVisible()
  })

  test('hero section shows event name and eyebrow', async ({ page }) => {
    await expect(page.locator('h1')).toContainText('EPAM Tech Summit 2026')
    await expect(page.locator('.hero-eyebrow')).toContainText('May 15')
  })

  test('hero Register Now button scrolls to registration section', async ({ page }) => {
    await page.locator('.hero .btn-primary').click()
    await expect(page.locator('#registration')).toBeInViewport()
  })

  test('navbar Register Now button scrolls to registration section', async ({ page }) => {
    await page.locator('.navbar-cta').click()
    await expect(page.locator('#registration')).toBeInViewport()
  })

  test('all 5 named sections are present', async ({ page }) => {
    await expect(page.locator('#about')).toBeAttached()
    await expect(page.locator('#program')).toBeAttached()
    await expect(page.locator('#speakers')).toBeAttached()
    await expect(page.locator('#faq')).toBeAttached()
    await expect(page.locator('#registration')).toBeAttached()
  })

  test('about section has stat cards', async ({ page }) => {
    await expect(page.locator('.stat-card')).toHaveCount(4)
  })

  test('program has 6 timeline items', async ({ page }) => {
    await expect(page.locator('.timeline-item')).toHaveCount(6)
  })

  test('speakers grid has 4 cards', async ({ page }) => {
    await expect(page.locator('.speaker-card')).toHaveCount(4)
  })

  test('FAQ has 5 questions', async ({ page }) => {
    await expect(page.locator('.faq-question')).toHaveCount(5)
  })

  test('FAQ answer is hidden initially', async ({ page }) => {
    await expect(page.locator('.faq-answer').first()).not.toBeVisible()
  })

  test('clicking FAQ question reveals answer', async ({ page }) => {
    await page.locator('.faq-question').first().click()
    await expect(page.locator('.faq-answer').first()).toBeVisible()
  })

  test('clicking open FAQ question closes it', async ({ page }) => {
    await page.locator('.faq-question').first().click()
    await expect(page.locator('.faq-answer').first()).toBeVisible()
    await page.locator('.faq-question').first().click()
    await expect(page.locator('.faq-answer').first()).not.toBeVisible()
  })

  test('only one FAQ item open at a time', async ({ page }) => {
    const questions = page.locator('.faq-question')
    await questions.nth(0).click()
    await expect(questions.nth(0)).toHaveAttribute('aria-expanded', 'true')
    await questions.nth(1).click()
    await expect(questions.nth(0)).toHaveAttribute('aria-expanded', 'false')
    await expect(questions.nth(1)).toHaveAttribute('aria-expanded', 'true')
  })

  test('registration form shows validation errors on empty submit', async ({ page }) => {
    await page.locator('.btn-submit').click()
    await expect(page.locator('.form-error').first()).toBeVisible()
    await expect(page.locator('.form-error')).toHaveCount(3)
  })

  test('registration form shows invalid email error', async ({ page }) => {
    await page.fill('#name', 'Jane Smith')
    await page.fill('#email', 'notanemail')
    await page.fill('#company', 'Acme Corp')
    await page.locator('.btn-submit').click()
    await expect(page.locator('.form-error')).toContainText('valid email')
  })

  test('registration form shows success state on valid submit', async ({ page }) => {
    await page.fill('#name', 'Jane Smith')
    await page.fill('#email', 'jane@company.com')
    await page.fill('#company', 'Acme Corp')
    await page.locator('.btn-submit').click()
    await expect(page.locator('.success-message')).toBeVisible()
    await expect(page.locator('.success-message')).toContainText("You're registered!")
  })

  test('success message contains submitted name and email', async ({ page }) => {
    await page.fill('#name', 'Jane Smith')
    await page.fill('#email', 'jane@company.com')
    await page.fill('#company', 'Acme Corp')
    await page.locator('.btn-submit').click()
    await expect(page.locator('.success-message')).toContainText('Jane Smith')
    await expect(page.locator('.success-message')).toContainText('jane@company.com')
  })

  test('footer is present', async ({ page }) => {
    await expect(page.locator('.footer')).toBeVisible()
    await expect(page.locator('.footer')).toContainText('EPAM Tech Summit')
  })
})
