function $$(query)
{
	return document.querySelectorAll(query);
} 
function did(id)
{
	return document.getElementById(id);
}  

String.prototype.capitalize = function(){ //v1.0  
    return this.replace(/\w+/g, function(a){
        return a.charAt(0).toUpperCase() + a.substr(1).toLowerCase();
    });
};                    

String.prototype.comma2Point = function()
{
	return this.replace(/,/, '.');
}      

var decodeHTML = function(string)
{
	var temp_div = document.createElement('div');
	temp_div.innerHTML = string;
	var name = temp_div.firstChild.nodeValue;
	return name;
}
       
var getDocumentHeight = function()
{
	var D = document;
    return Math.max(
        Math.max(D.body.scrollHeight, D.documentElement.scrollHeight),
        Math.max(D.body.offsetHeight, D.documentElement.offsetHeight),
        Math.max(D.body.clientHeight, D.documentElement.clientHeight)
    );
}   

var isIPhone = function()
{
	if(navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i))
		return true;
	else
		return false;
}     

var clearHtml = function(list)
{
	for(var i=0;i<list.length;i++)
	{
		did(list[i]).innerHTML = '';
	}
} 

var getComputedSize = function(el, property)
{
	return parseInt(window.getComputedStyle(el, null).getPropertyValue(property), 10);
	
}



