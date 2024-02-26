import { Selector } from "testcafe";
//import { ClientFunction } from "testcafe";
import login from '../R-2/login'
//import { login } from './helper'

//fixture`zeroTest`

test
  //const url =`https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ifkv=ASKXGp3-QmlIDr6yfwFNYVLb0YLTyjprH-_Nghvz7ItydoHyyC440qaln0pV5XVA6UvTsORhUPCnTg&rip=1&sacu=1&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-1492601312%3A1707342059759075&theme=glif`
  //const geturl=ClientFunction(() => window.location.href);

fixture `login`
.page `https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ifkv=ASKXGp3-QmlIDr6yfwFNYVLb0YLTyjprH-_Nghvz7ItydoHyyC440qaln0pV5XVA6UvTsORhUPCnTg&rip=1&sacu=1&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-1492601312%3A1707342059759075&theme=glif`

test ('first', async t =>{
login.setusername('kondareddya007');
login.clickonunext();
login.setpassword('Srinivas306');
login.clickonpnext();

});


/*
test.skip

   .page`https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&ifkv=ASKXGp0lzrs40YJUAxSN-ffN8HIFp5SsLRDIy25mo7Ot8nFvO5XMfP0xMQR7rIfWkKng2Wmg289HNw&osid=1&passive=1209600&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-972629925%3A1706558756494542&theme=glif`

   .before( async t =>{
   await login('email','password');

   });
//('My test', async t=> {

   
   await t.typeText('#identifierId', "kondareddya007@gmail.com");
   await t.click('#identifierNext');
   await t.typeText('#password',"Srinivas@306");
   await t.click('#passwordNext');

   //await login('email','password');
   ('we can start', async t=> {
      await t.maximizeWindow();
      await t.click('#gsc-gab-2');
   
   });

   test.skip
   .page`https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&ifkv=ASKXGp0lzrs40YJUAxSN-ffN8HIFp5SsLRDIy25mo7Ot8nFvO5XMfP0xMQR7rIfWkKng2Wmg289HNw&osid=1&passive=1209600&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-972629925%3A1706558756494542&theme=glif`

   ('yours', async t =>{

      await t.maximizeWindow();
      await t.setTestSpeed(.1);
      await t.typeText('#identifierId', "kondareddya007@gmail.com");
      await t.click('#identifierNext');
      await t.click('.VfPpkd-muHVFf-bMcfAe');
      await t.typeText('#password',"Srinivas@306");
      await t.click('#passwordNext');
      await t.click('.aKz');
      await t.click('.qj ');
     // await t.click('.TN bzz aHS-bnu');

   });
*/
   //"test": "testcafe chrome/zeroTest.js --disable-page-caching"
  // --skip-js-errors

  