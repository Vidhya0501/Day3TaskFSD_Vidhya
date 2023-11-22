/*
3. Use the same rest countries and print all countries names, region, sub-region and populations.
*/

var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    for(var i=0;i<=result.length;i++){
        console.log("Country name: "+result[i].name.common);
        console.log("Region: "+result[i].region);
        console.log("Subregion: "+result[i].subregion);
        console.log("Population: "+result[i].population);
    }
}