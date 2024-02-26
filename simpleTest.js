import {Selector} from 'testcafe';
//import { Selector } from 'testcafe';
//first
fixture`simpleTest`

test
.page `https://www.netflix.com/gb/`

('Zero test',async t=>{

  //await t.click('#signin_button');

});




test.skip
.page`https://www.netflix.com/gb/`

('Your test',async t=>{
await t.setTestSpeed(.1);
await t.maximizeWindow();
await t.click('#signIn');
const uid=Selector('#id_userLoginId');
await t.typeText(uid,"mimama@gmail.com");
const pass=Selector(".nfTextField error");
await t.typeText(pass,"12344");
await t.click(".btn login-button btn-submit btn-small");




});






test.skip
.page `https://www.redbus.in/`
('My test1', async t => {

  await t.setTestSpeed(.1);
  await t.maximizeWindow();
  await t.click('#account_dd');
  await t.click('#cancel_ticket');
  const tno=Selector('#Enter Ticket No');
  await t.typeText(tno,"abc123");

  /*
  const from=Selector('#src');
  await t.typeText(from,"Narasaraopet");
  const to=Selector('#dest');
  await t.typeText(to,"Hyderabad");
  //await t.typeText('#onwardCal',"21 Jan 2024");
  await t.click('#search_button');

  //await t.typeText('#dateText',"21 Jan");
 // await t.typeText('#yearText',"2024");
  */

  /*
  https://devexpress.github.io/testcafe/example/
await t.maximizeWindow();
await t.setTestSpeed(.1);
await t.typeText('#developer-name',"gmail.com");
await t.click('#remote-testing');
await t.click('#tried-test-cafe');
await t.typeText('#comments',"mi mama parry");
await t.click('#macos');
await t.typeText('#preferred-interface',"JavaScript API");
await t.click('#preferred-interface');
await t.click('#slider');
await t.wait(5000);
await t.click('#submit-button');
*/

});


//------------------------------------------------------ second
fixture `simpleTest`
test.skip
.page`https://www.facebook.com/`
('My Test2', async t=>{
await t.wait(5000);
});


//--------------------------------------------------------Third
fixture `simpleTest`
test.skip
.page`https://testcafe.io/documentation/402833/guides/basic-guides/test-actions#wait`
('My test3', async t=>{
  await t.wait(5000);
  await t.navigateTo('https://web.whatsapp.com/');
await t.wait(5000);

});

//https://demoqa.com/text-box 

//"test": "testcafe chrome/simpletest.js --disable-page-caching"

test.skip
.page`https://devexpress.github.io/testcafe/example/`
//.page`https://bsadar.github.io/hmrbuild1/Loging.html`
('My test', async t=> {



   await t.maximizeWindow();
   await t.setTestSpeed(.1);
   await t.typeText('#developer-name',"Mimamaparry");
   //const data=Selector('a').withAttribute('data-testid','name-input');
   //await t.typeText(data,'mimamaparry',);
   await t.click('#remote-testing');
   await t.click('#linux');
   //await t.click('#preferred-interface');
   await t.typeText('#preferred-interface',"Both");
   await t.click('#tried-test-cafe');
   //const slidebar=Selector('input').withAttribute('style',"left: 88.8889%;");
   //await t.typeText(slidebar);
   await t.click('#slider');
   await t.typeText('#comments',"Bongulo jivitam");
   await t.click('#submit-button');

});

