type Node<T> ={
	value:T,
	prev?:Node<T>,

}
export default class Stack<T>{

	public length:number;
	
	private head?:Node<T>; 



	constructor(){
	  this.head=undefined;
	  this.length=0;
	}

	push(item:T):void{
		const node={value:item}as Node<T>;
		this.length++;
		if(!this.head){
			this.head=node;
		//	this.head.prev=undefined;
			return;
		}

		//let h=this.head;
		node.prev=this.head;
		this.head=node;
		//this.head=node;
		//this.head.prev=h.prev;

		
	}

	pop(): T | undefined{  
		
		this.length= Math.max(0, this.length -1);
		if(this.length ===0){
			const head=this.head ;
			this.head=undefined;
			return head?.value;
		
		}
		const h =this.head as Node<T> ;
		//let h= this.head;
	
		this.head=h.prev;
		
		return h.value;
	   }

	peek():T|undefined {
		return this.head?.value;
	}

	showStack(): void{
	while(this.head.prev){
        	console.log(this.head);
		}

	}
 
}
var sOne =new Stack();
sOne.push('abc');
console.log(sOne);
sOne.peek();
console.log(sOne.peek());
//sOne.pop();
sOne.push('abc');
sOne.push('Bara');
sOne.push('Salim');


console.log(sOne);


console.log(sOne.peek());
console.log('\n --------\n');
console.log(sOne.pop());
console.log(sOne.peek());
