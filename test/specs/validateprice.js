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
        await browser.url('https://www.hamleys.in/brand/Shooting%20Star');
  
    });
    it('click on price',async()=>{
        await rideons.pricetext.click();
        await browser.pause(4000);
        await rideons.pricefirst.click();

      });

var lowerint,upperint;
 it('get the price between lower limit and higher limit',async()=>{       
       let priceamt=await rideons.pricefirsttext.getText();
       await browser.pause(4000);
       console.log(priceamt+"is the price");
       const price=priceamt.split("-");
       console.log(price+"is the amount after split");
       let lower = price[0];
       let upper=price[1];
       lowerint = parseInt(lower);
       upperint = parseInt(upper);
       console.log(lowerint+"is the price");
       console.log(upperint+"is the price");
      });
      const num = [];
      let i,b;
      it('get price of products',async()=>{
        let priceamt=await rideons.priceproducts;
        for( let i=0;i<priceamt.length;i++){
          let priceamttext=await priceamt[i].getText();
          priceamttext=priceamttext.substring(2);
          b=parseInt(priceamttext);
          console.log(priceamttext+"is amt---->");
          num.push(b);
        }
        console.log(num+"is the value in array");
        let n=num.length;
        for(let i=0;i<n;i++){
          let bool=num[i]>lowerint;
          let boolup=upperint>=num[i];
          console.log(num[i]+"is the value");
          console.log(lowerint+"is the value of zero");
          console.log(upperint+"is the value of high");
          console.log(bool+"is the value true");
          expectchai(bool).to.be.true;
          expectchai(boolup).to.be.true;
        }  

      });


})
