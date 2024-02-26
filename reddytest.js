import { Selector } from "testcafe";

fixture `Reddytest`

test
.page`https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&ifkv=ATuJsjw8DtZucn5v6EuQ9yES5018WZITMPcjV5wgNmyqY76OXG9rhXBCWCHClsU3yoJJYCPXJXcP&osid=1&passive=1209600&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-83119469%3A1707763682139651&theme=glif`
 
('My test', async t=>{

    await t.maximizeWindow();
   // await t.setTestSpeed(.1);
    await t.typeText('.zHQkBf',"kondareddya007");
    await t.click('.FmFZVc');
    await t.typeText('.zHQkBf',"Srinivas306");
    await t.click('.FmFZVc');
    await t.click('.T-I-KE');
    await t.typeText('.YxcKdf',"kondareddya007@gmail.com");
    await t.typeText('.editable',"Teji nuvvu ni yeddi yeshalu budabukkaala moham dana");
    const subject =Selector('input').withAttribute("name","subjectbox");
    await t.typeText(subject,"nake");
    //const send=Selector('div').withAttribute("class","T-I J-J5-Ji aoO v7 T-I-atl L3");
   // await t.click(send);

});

test.skip
.page`https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&ifkv=ATuJsjw8DtZucn5v6EuQ9yES5018WZITMPcjV5wgNmyqY76OXG9rhXBCWCHClsU3yoJJYCPXJXcP&osid=1&passive=1209600&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-83119469%3A1707763682139651&theme=glif`

('Your test', async t=>{

    await t.maximizeWindow();

    await t.typeText('.zHQkBf',"kondareddya007");
    await t.click('.FmFZVc');
    await t.typeText('.zHQkBf',"Srinivas306");
    await t.click('.FmFZVc');
    const notes=Selector('div').withAttribute("class","bse-bvF-I aT5-aOt-I bse-bvF-a9p");
    await t.click(notes);

    await t.setTestSpeed(.1);
    //const add=Selector('div').withAttribute("class","Q0hgme-Cmxh4e");
   // await t.click(add);
   await t.click();

});

//"test": "testcafe chrome/zeroTest.js --disable-page-caching"
//testcafe chrome PageObjects/*.js
