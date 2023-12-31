const expectchai=require('chai').expect
var assert = require('chai').assert
const rideons=require('../pageobjects/rideonsPage')
let text,total;

describe('Description of suite',()=>{
    beforeEach(()=>{
      console.log("before each")
    });
    afterEach(()=>{
        console.log("after  each")
      });
    it('Open the URL',async()=>{
        console.log("test1")
        await browser.maximizeWindow()
        await browser.url('https://www.hamleys.in/collections/category-ride-ons-cycles');
  
    });
    it('Scroll into view',async()=>{
      await rideons.lastelement.scrollIntoView(); 
      await browser.pause(4000);
    //   let count=await $$("//a/h3");
    //   let n=count.length;
    //   console.log(n+"no of products");

    });
    it('scroll and click',async()=>{
      await browser.scroll(0, 0);
      await browser.pause(4000);
      await rideons.sortby.scrollIntoView(); 
      await browser.pause(4000);
      await rideons.lowtohigh.click();
     await browser.pause(4000);

    });
    const num = [];
    let i,b;
    it('This is the amount before discount',async()=>{
      var price= await rideons.price;
      for( i=0;i<price.length;i++){
        //console.log(await price[i].getText());
        let priceamt=await price[i].getText();
        priceamt=priceamt.substring(2);
        console.log(priceamt+"is amt");
         b = parseInt(priceamt);
         console.log(b+"is the amt in int");
         num.push(b);
    

      }
      console.log(num+"is the value inside array");
     let length = num.length;
     for(let i=0;i<length;i++){
     if(num[i+1]===undefined){
      break;
     }
      let bool=num[i+1]>=num[i];
      console.log(num[i+1]+"is second value of array");
      console.log(num[i]+"is the value of array");
      console.log(bool+"is the value");
      expectchai(bool).to.be.true;
     }

  
    });

    it('This is the amount after discount',async()=>{
      var price=  await rideons.price;
      for(let i=0;i<price.length;i++){
        let priceamt=await price[i].getText();
        priceamt=priceamt.substring(2);
        console.log(priceamt+"is amt before discount");
      }
    });

    it('This is the total number of products',async()=>{
      await browser.pause(4000);
      await rideons.showing.scrollIntoView(); 
       total=  await rideons.total.length;
   
    });

    it('This is the total number of product displayed on webpage',async()=>{
      text=await rideons.products.getText();
      text=text.trim();
      text=text.replace("products","");
      text=text.trim();
      console.log(text+"----->");
      console.log(typeof text);
      let b = parseInt(text);
      console.log("The total is"+total);
      console.log(typeof total);
      var con=total===b;
      console.log(con+"is the output");
      expectchai(con).to.be.true;
    });
    it('scroll to first product and click on first text and compare 2 values',async()=>{
      await rideons.firstposition.scrollIntoView();
      let textprice=await rideons.firstprice.getText();
      textprice=textprice.substring(2);
      console.log(textprice+"is the price");
      await rideons.firstposition.click();
      let textpricedetail=await rideons.firstpricedetail.getText();
      textpricedetail=textpricedetail.substring(2);
      console.log(textpricedetail+"is the price in detail page");
      var con=textprice===textpricedetail;
      console.log(con);
      expectchai(con).to.be.true;
  });

  it('add to bag and validate price',async()=>{
    let textpricedetail=await rideons.firstpricedetail.getText();
    textpricedetail=textpricedetail.substring(2);
    console.log(textpricedetail+"is the price in detail page");
    await rideons.addtobag.scrollIntoView();
    await rideons.addtobag.click();
    let textpricedetailtab=await rideons.priceintable.getText();
    var matchedArr=textpricedetailtab.match(/\d+/g);
    console.log(matchedArr[1]+"is the price in table");
    var con= textpricedetail===matchedArr[1];
    console.log(con);
    expectchai(con).to.be.true;
    await browser.pause(4000);
    let subtotal=await rideons.textsubtotal.getText();
    console.log(subtotal+"is total");
    var subtotalamt=subtotal.match(/\d+/g);
    await browser.pause(4000);
    console.log(subtotalamt+"is subtotal amount");

   
});




})