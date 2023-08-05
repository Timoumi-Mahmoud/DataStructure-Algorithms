


function linearSearch(arr:number[], searchedValue:number):boolean {
	
	for(let i=0; i<arr.length; i++){
	 if(arr[i]===searchedValue) return true;
	}
	return false;
}

var tab=[1,2,3,4,5,6,7,8,9];
console.log(linearSearch(tab,55));
