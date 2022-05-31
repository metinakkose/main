const {test, expect } = require('@playwright/test');

test('test go to site', async ({page}) => {
    await page.goto('http://automationpractice.com/index.php'); //go to the website

    await page.hover('text=WOMEN'); //hover over the banner where it says women
    await page.click('text=Blouses');//click the blouses category
    await page.locator('li:has-text("Quick view")').hover();//await page.hover('text=Quick view');
    await page.click('text=Add to cart');//add the desired blouse to the cart
    await page.click('text=Proceed to checkout');//click the button to proceed to checkout
    await page.hover('text=Proceed to checkout');
    await page.click('text=Proceed to checkout');//click the button to proceed to checkout
    //await page.goto('http://automationpractice.com/index.php?controller=authentication&multi-shipping=0&display_guest_checkout=0&back=http%3A%2F%2Fautomationpractice.com%2Findex.php%3Fcontroller%3Dorder%26step%3D1%26multi-shipping%3D0');
    
    await page.click('input[name="email"]');                      //input the wrong
    await page.fill('input[name="email"]', 'usa@gmail.com');      //email address
    await page.click('input[name="passwd"]');
    await page.fill('input[name="passwd"]', '12345');
    await page.locator('button:has-text("Sign in")').click();     //to log in

    await page.click('input[name="email"]');                      //input the correct
    await page.fill('input[name="email"]', 'turkiye@gmail.com');  //email address
    await page.click('input[name="passwd"]');                     //but the wrong
    await page.fill('input[name="passwd"]', '12345678');          //password
    await page.locator('button:has-text("Sign in")').click();     //to log in

    await page.click('input[name="email"]');
    await page.fill('input[name="email"]', 'turkiye@gmail.com');  //input the correct
    await page.click('input[name="passwd"]');                     //login credentials
    await page.fill('input[name="passwd"]', '12345');             //and hit sign in
    await page.locator('button:has-text("Sign in")').click();     //to log in correctly

    //address update sequence
    await page.click('text=Update');
    await page.click('input[name="address1"]');
    await page.fill('input[name="address1"]', 'Kizilay Bulvari');
    await page.click('input[name="city"]');
    await page.fill('input[name="city"]', 'Ankara');
    //await page.selectOption('#id_state', '53');
    await page.click('input[name="postcode"]');
    await page.fill('input[name="postcode"]', '06000');
    await page.selectOption('#id_country', '21');
    await page.selectOption('#id_state', '53');
    await page.click('text=Save');

    await page.locator('button:has-text("Proceed to checkout")').click(); //hit the proceed to checkout box
    await page.check('input[name="cgv"]');                                //check the terms and conditions checkbox
    await page.locator('button:has-text("Proceed to checkout")').click(); //hit the proceed to checkout box
    await page.click('text=Pay by bank wire');                            //select pay by bank wire
    await page.locator('button:has-text("I confirm my order")').click();  //hit the I confirm my order box

    await page.screenshot({ path: 'screenshot.png', fullPage: true });

  });