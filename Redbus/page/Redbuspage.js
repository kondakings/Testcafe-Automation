import { Selector,t } from "testcafe";

class Redbuspage{

    constructor(){

        this.KSRTC=Selector('img').withAttribute("alt"," KSRTC Karnataka Bus Online Booking");
        this.Route=Selector('a').withAttribute("title","Hyderabad to Bangalore");
        this.primo=Selector('li').withAttribute("class","amenties b-p-list primo");
        this.amenties=Selector('span').withAttribute("class","txt-val ");
        this.seats=Selector('div').withAttribute("class","button view-seats fr");
       // this.myseat=Selector('.pointer');
        this.myseat=Selector('canvas').withAttribute("class","pointer");
        this.boarding=Selector('span').withAttribute("class","loc fw-700 capitalize");
        this.from=Selector('#src');
        this.train=Selector('i').withAttribute("class","aboutUsIcon icon-thick_Right_arrow");
        this.from=Selector("#src");
        this.to=Selector("#dst");
        this.box=Selector(".checkbox_wrap");
        this.search=Selector(".search-btn ");
        this.pnr=Selector('p').withText("Check PNR Status");
        this.pnrnum=Selector(".pnr-input-text");
        this.status=Selector('button').withText("Check Status");

    }


}
export default new Redbuspage();