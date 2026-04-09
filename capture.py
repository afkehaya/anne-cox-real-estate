from playwright.sync_api import sync_playwright
import os

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={'width': 1440, 'height': 900})
    
    # Open the built HTML file directly
    html_path = '/Users/alexanderkehaya/.openclaw/workspace/anne-cox-site/dist/index.html'
    page.goto(f'file://{html_path}')
    page.wait_for_timeout(2000)
    
    page.screenshot(
        path='/Users/alexanderkehaya/.openclaw/workspace/anne-cox-site/anne-cox-website.png',
        full_page=True
    )
    print('Screenshot saved!')
    browser.close()
