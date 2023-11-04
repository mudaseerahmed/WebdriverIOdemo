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
}
module.exports=new rideonsPage();