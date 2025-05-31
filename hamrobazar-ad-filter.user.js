// ==UserScript==
// @name         Hamrobazar Ad Filter by Seller Ad Count
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Hide ads from sellers with more than X ads on Hamrobazar
// @author       You
// @match        https://hamrobazaar.com/search/product*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
    'use strict';

    const MAX_ADS_ALLOWED = 50; // 👈 Change this to your desired threshold

    function filterAds() {
        // Each listing card (usually it's a div or section; inspect for real selector)
        const listings = document.querySelectorAll('div[class*="listing-card"], div[class*="card"]');

        listings.forEach(listing => {
            const adTextEl = Array.from(listing.querySelectorAll("div, span"))
                .find(el => /(\d+)\s+Ads/.test(el.innerText));
            
            if (adTextEl) {
                const match = adTextEl.innerText.match(/(\d+)\s+Ads/);
                if (match && parseInt(match[1]) > MAX_ADS_ALLOWED) {
                    listing.style.display = 'none'; // Hide the listing
                }
            }
        });
    }

    // Run on load and after potential dynamic content loads
    window.addEventListener('load', () => {
        setTimeout(filterAds, 1000); // Delay to wait for page to render
    });

    // Optional: re-run if the page dynamically updates (infinite scroll etc.)
    const observer = new MutationObserver(() => {
        filterAds();
    });

    observer.observe(document.body, { childList: true, subtree: true });
})();
