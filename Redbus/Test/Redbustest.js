import { Selector } from "testcafe";
import Redbuspage from "../page/Redbuspage";

const url=`https://www.redbus.in/`

fixture`red`
.page(url)

test ('Red bus', async t=>{
    await t.maximizeWindow();
   /*
    await t.click(Redbuspage.KSRTC);
    
    await t.click(Redbuspage.Route);
    await t.click(Redbuspage.primo);
    await t.click(Redbuspage.amenties);
    await t.click(Redbuspage.seats);
    await t.setTestSpeed(.1);
    //await t.click(Redbuspage.myseat);
    await t.click(Redbuspage.boarding);
    */
   await t.click(Redbuspage.train);
  
   await t.typeText(Redbuspage.from,"New Delhi");
   await t.typeText(Redbuspage.to,"Hyderabad - All Stations");
   await t.click(Redbuspage.box);
   await t.setTestSpeed(.1);
   await t.click(Redbuspage.search);  
   /*
   await t.click(Redbuspage.pnr);
   await t.typeText(Redbuspage.pnrnum,"7832474373");
   await t.click(Redbuspage.status);  */


});