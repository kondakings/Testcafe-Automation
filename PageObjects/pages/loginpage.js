
import { Selector,t } from "testcafe";

class loginpage{

    constructor(){
        this.usernameinput=Selector('.zHQkBf');
        this.usernext=Selector('.FmFZVc');
        this.passwordinput=Selector('.zHQkBf');
        this.passnext=Selector('.FmFZVc');

    }

    
}

export default new loginpage();