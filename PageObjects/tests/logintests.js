import { ClientFunction } from "testcafe";

//import (ClientFunction)
import loginpage from "../pages/loginpage";

const url =`https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ifkv=ATuJsjwDo8F0sTbPyN3pA9V-h0wnAbsB8PT9CLVU96IRfFP-TnqI5MsRX42nyOjHMmTilghNVNrNrA&rip=1&sacu=1&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-268131321%3A1708277251642043&theme=glif`

fixture `firstPOM`
.page(url)

test('First POM', async t=>{


    await t.maximizeWindow();
    await t.typeText(loginpage.usernameinput,"kondareddya007");
    await t.click(loginpage.usernext);
    await t.typeText(loginpage.passwordinput,"Srinivas306");
    await t.click(loginpage.passnext);

});