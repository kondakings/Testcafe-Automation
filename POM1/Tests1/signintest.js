import { Selector } from "testcafe";
import signinpage from "../Pages1/signinpage";


const url1 =`https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ifkv=ATuJsjwDo8F0sTbPyN3pA9V-h0wnAbsB8PT9CLVU96IRfFP-TnqI5MsRX42nyOjHMmTilghNVNrNrA&rip=1&sacu=1&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-268131321%3A1708277251642043&theme=glif`

fixture `POM`
.page(url1)

test ('first pom',async t=>{

    await t.maximizeWindow();
    
    await t.typeText(signinpage.emailid,"kondareddya007");
    await t.click(signinpage.emailnext);
    await t.typeText(signinpage.pass,"Srinivas306");
    await t.click(signinpage.passnext);
    /*
    await t.click(signinpage.compose);
    await t.typeText(signinpage.to,"kondareddya007@gmail.com");
    await t.typeText(signinpage.matter,"yevadu kodite dimma tirigi mind block avvudho vade pandu gadu");
    await t.typeText(signinpage.subject,"Nake ankitam");
    await t.click(signinpage.send);
*/
  //  await t.setTestSpeed(.1);
    await t.click(signinpage.promo);
    await t.click(signinpage.but);
    await t.click(signinpage.del);
    //await t.click(signinpage.notes);
    //await t.click(signinpage.plus);
    //await t.typeText(signinpage.translate,"nikenduku ra gutle");



});