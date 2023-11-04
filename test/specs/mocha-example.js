describe('Description of suite',()=>{
    beforeEach(()=>{
      console.log("before each")
    });
    afterEach(()=>{
        console.log("after  each")
      });
    it('individual test 1',async()=>{
        console.log("test1")
        await browser.maximizeWindow()
        await browser.url('https://www.hamleys.in/collections/category-ride-ons-cycles-ride-ons');
  
    });
    it('individual test 2',async()=>{
      await $("(//a/h3)[last()]").scrollIntoView(); 
      await browser.pause(4000);
      let count=await $$("//a/h3");
      let n=count.length;
      console.log(n+"no of products");

    });
    it('individual test 3',async()=>{
      await browser.scroll(0, 0)
       await $("//select").click();
      await browser.pause(4000);
    await $("//option[contains(text(),'Low to')]").click();
    await browser.pause(4000);

    });
    it('individual test 4',async()=>{
      var price=await $$("//del//following::span[1]");
      for(let i=0;i<price.length;i++){
        //console.log(await price[i].getText());
        let priceamt=await price[i].getText();
        priceamt=priceamt.substring(2);
        console.log(priceamt+"is amt");
      }
  
    });

    it('individual test 5',async()=>{
      var price=await $$("//del");
      for(let i=0;i<price.length;i++){
        //console.log(await price[i].getText());
        let priceamt=await price[i].getText();
        priceamt=priceamt.substring(2);
        console.log(priceamt+"is amt before discount");
      }
  
    });
})