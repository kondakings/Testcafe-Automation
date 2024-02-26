import { Selector, t } from "testcafe";

class signinpage {

    constructor(){

        this.emailid=Selector('#identifierId');
        this.emailnext=Selector('#identifierNext');
        this.pass=Selector('#password');
        this.passnext=Selector('#passwordNext');
        this.compose=Selector('div').withAttribute("class","T-I T-I-KE L3");
        this.to=Selector('input').withAttribute("peoplekit-id","BbVjBd");
        this.matter=Selector('div').withAttribute("class","Am aiL Al editable LW-avf tS-tW");
        this.subject=Selector('input').withAttribute("name","subjectbox");
        this.send=Selector('div').withAttribute("class","T-I J-J5-Ji aoO v7 T-I-atl L3");
        //this.notes=Selector('div').withAttribute("class","bse-bvF-I aT5-aOt-I bse-bvF-a9p aT5-aOt-I-KO");
        //this.plus=Selector('div').withAttribute("class","RmniWd-h1U9Be-TdyTDe-Bz112c")
        //this.translate=Selector('textarea').withAttribute("class","notranslate");
        this.promo=Selector('div').withAttribute("aria-label","Promotions");
        this.but=Selector('span').withAttribute("jslog","170807; u014N:cOuCgd,Kr2w4b;");
        this.del=Selector('div').withAttribute("jslog","46744; u014N:xr6bB");


    }

}


export default new signinpage();
