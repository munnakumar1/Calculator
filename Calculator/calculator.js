function input(id){
	if(document.getElementById("display").innerHTML.length >= 10){
		if(id.length!=5)
			return;
	}
	if(document.getElementById("display").innerHTML == 0){
		document.getElementById("display").innerHTML = "";
		console.log('clear 0');
	}
	// number
	if(id.length==2){
		document.getElementById("display").innerHTML += id[1];  
	}
	//point
	if(id.length==1){
		document.getElementById("display").innerHTML += '.';
	}
	// operation
	if(id.length == 4){
		// finding the operation pushed
		var operation = "";
		if(id[id.length-1] == "n") operation = "-";
		if(id[id.length-1] == "m") operation = "+";
		if(id[id.length-1] == "l") operation = "x";
		if(id[id.length-1] == "v") operation = "/";



		// operation is triggered withous first value(value is zero)
		if(document.getElementById("display").innerHTML == ""){
			document.getElementById("display").innerHTML = 0;
		}
		
		// an operation is already in use
		var data = document.getElementById("display").innerHTML;
		var last = String(data[data.length-1]);
		data = data.slice(0,data.length-1);
		
		if(last=='-' || last=='+' || last=='x' || last=='/')
			document.getElementById("display").innerHTML=data;
	
		// Add operation
		document.getElementById("display").innerHTML += operation;
	}
	if(id.length == 5){
		document.getElementById("display").innerHTML=0;
	}
}
function equal(){
	var data = document.getElementById("display").innerHTML;
	var first = "";
	var second = "";
	var op = "";
	var flg = false;

	for(var i=0;i<data.length;i++){
		if(data[i]=='-' || data[i]=='+' || data[i]=='x' || data[i]=='/'){
			if(i==0 && data[i]=='-'){
				first+='-';
				continue;
			}
			second = first;
			first = "";
			op = data[i];
			continue;
		}
		if(data[i]=='.')
			flg=true;
		first += data[i];
	}
	if(first!="" && second!=""){
		// if there is a decimal number
		if(flg){
			first = parseFloat(first);
			second = parseFloat(second);
		}
		// if there are only integers
		else{
			first = parseInt(first);
			second = parseInt(second);
		}
		if(op=="-")
			document.getElementById("display").innerHTML = second-first;	
		if(op=="+")
			document.getElementById("display").innerHTML = first+second;
		if(op=="x"){
			second*=first;
			if(flg)
				document.getElementById("display").innerHTML = second.toPrecision(4);
			else
				document.getElementById("display").innerHTML = second;
		}
		if(op=="/"){
			if(first==0){
				document.getElementById("display").innerHTML=0;
				return;
			}
			second/=first;
			if(flg)
				document.getElementById("display").innerHTML = second.toPrecision(4);
			else
				document.getElementById("display").innerHTML = second;
		}
	}
}
