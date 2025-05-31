# Hamrobazar Ad Filter Userscript

This is a Tampermonkey userscript that filters and hides product ads on [Hamrobazar](https://hamrobazaar.com) from sellers who have posted more than a specified number of ads. It helps you avoid spammy or bulk sellers and focus on listings from smaller or individual sellers.

## 🔧 Features

- Automatically hides listings from sellers with too many ads.
- Customizable ad count threshold.
- Works with dynamically loaded content.
- Lightweight and easy to use.

## 🚀 Installation

1. Install the [Tampermonkey extension](https://www.tampermonkey.net/) for your browser.
2. Click on the extension icon and select **"Create a new script"**.
3. Replace the template code with [this script](./hamrobazar-ad-filter.user.js).
4. Save the script.
5. Visit [`https://hamrobazaar.com/search/product`](https://hamrobazaar.com/search/product) and the filtering will automatically apply.

## ⚙️ Configuration

You can change the `MAX_ADS_ALLOWED` value in the script to adjust the threshold:

```javascript
const MAX_ADS_ALLOWED = 50; // Change this number as needed
