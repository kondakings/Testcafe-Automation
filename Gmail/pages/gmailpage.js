import { Selector,t } from "testcafe";

class gmailpage{
    constructor(){

 this.login=Selector('button').withAttribute("data-test-id","@sitebase/login-button_loginButtonId");
 this.uname =Selector ('input').withAttribute("data-test-id","Input.input");
 this.pass=Selector("#password"); 
 this.check=Selector('div').withAttribute("class","pmS0UwVVWza5ggCxUeLNt");
 this.signin =Selector('button').withAttribute("name","login-submit-button");

    }
}
export default new gmailpage();