// 2) https://www.codewars.com/kata/51f2b4448cadf20ed0000386/train/javascript

function removeUrlAnchor(url){
    if(url.includes("#")){
        return url.slice(0, url.indexOf("#"))
    }else{
        return url
    }
}