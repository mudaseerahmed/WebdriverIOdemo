class rideonsPage{

get lastelement(){  
return $("(//a/h3)[last()]")
}
get total(){  
   return $$("//a/h3")
}
get sortby(){
return $("(//div/input[@id='demo'])[1]");
}
get showing(){
    return $("//p[contains(text(),'Showing')]");
}

get price(){
return $$("//del//following::span[1]");
}
get discount(){
    return $$("//del");
}
get priceproducts(){
    return $$("//span[contains(.,'SAVE')]//preceding::span[1]/..");
}

get pricerange(){
    return $("//span[contains(.,'SAVE')]//preceding::span[1]/..|//h4/span[@class='rupees-icon']");
}
get lowtohigh(){
    return $("//option[contains(text(),'Low to')]");
}
get sortby(){
    return $("//span[contains(.,'Sort By:')]");
}
get products(){
    return $("(//p[contains(.,'products')])[1]");
}
get firstposition(){
    return $("//h1//following::img[1]");
}
get firstprice(){
    return $("(//a/h3)[position()=1]//following::span[2]");
}
get firstpricedetail(){
    return $("//span[@class='mrp-add-text']//following::span[2]");
}
get addtobag(){
    return $("//a[text()='Add to bag ']");
}
get priceintable(){
    return $("//h5[.='Delivery']//preceding::a[1]");
}
get textsubtotal(){
    return $("//h5[contains(text(),'Subtotal')]//following::h5[1]");
}
get pricetext(){
    return $("//div/h4[contains(text(),'price')]");
}
get pricefirst(){
    return $("//div/h4[contains(text(),'price')]//following::div[@class='check-box'][1]/..");
}
get pricefirsttext(){
    return $("//div/h4[contains(text(),'price')]//following::a[1]");
}
}
module.exports=new rideonsPage();
