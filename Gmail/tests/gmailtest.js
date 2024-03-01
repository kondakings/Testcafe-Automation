import { Selector } from "testcafe";
import gmailpage from "../pages/gmailpage"

fixture`whill`
.page`https://sports.williamhill.com/betting/en-gb`

test ('whill', async t => {

    await t.maximizeWindow();
    await t.setTestSpeed(.1);
    await t.click(gmailpage.login);
    await t.typeText(gmailpage.uname,"Reddytest");
    await t.typeText(gmailpage.pass,"Reddy@1996");
   await t.click(gmailpage.check);
    await t.click(gmailpage.signin);
    await t.wait(10000);



});