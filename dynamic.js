// XMLHttpRequest
function jsonloading(file,callback) {
var xhr=new XMLHttpRequest();
xhr.overrideMimeType("application/json");
xhr.open("GET",file,true);
xhr.onreadystatechange=()=>{
	if (xhr.readyState =="4" && xhr.status =="200") {
	callback(xhr.responseText);	
	}  
}
xhr.send();
}

jsonloading("data.json",(text)=>{
	let d = JSON.parse(text);
	console.log(d);
})