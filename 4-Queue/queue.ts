type Node<T> ={
	value:T,
	next?:Node<T>,

}
export default class Queue<T>{

	public length:number;
	
	private head?:Node<T>; 
	private tail?:Node<T>; 



	constructor(){
	  this.head=this.tail=undefined;
	  this.length=0;
	}

	enqueue(item:T):void{
		this.length ++;
		if(!this.tail){
			this.tail=this.head={value:item} as Node<T>;
			return undefined;
		}
		const node ={value: item} as Node<T>;
		this.tail.next=node;

		//this.tail=this.tail.next ;
		this.tail=node;

		}

	deque(): T | undefined{
		if(!this.head){
			return undefined;
		}
		let h =this.head;
		this.length--;
		this.head=this.head.next;
		//free like other languages 
		h.next=undefined ;

		if(this.length ===0){
		 this.tail=undefined ;
		}
		return h.value;
	}

	peek():T|undefined {
		return this.head?.value;
	}


 
}
var nOne=new Queue();
nOne.enqueue('abc');
console.log(nOne);
console.log(nOne.peek());
