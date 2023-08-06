

var linkedList=function(){
  
	 var head= null;
	 var length =0;
 var Node=function(element){
	 this.element=element;
	 this.next=null;
 }
	this.size=function(){
		return length;
		 }
	this.top= function(){
		return head.element;
	}

	this.add=function(element){
		var newNode=new Node(element);

		if(head===null){
			head=newNode;
		}
		else{
			var currentNode=head;
			while(currentNode.next){

			 currentNode=currentNode.next;

			
			}
			
			currentNode.next=newNode;
		}
		length++;

	}
	
     this.remove=function(element){
	if(head.element ===element){
		head =head.next;
	}
	     else{
		     var currentNode=head;
		     var previousNode;
		     while(currentNode.element!==element){
		     
				currentNode=currentNode.next;
			        previousNode=currentNode; 
		     }
     			previousNode.next=currentNode;

	     }
	     length--;

}
  	this.isEmpty=function(){
		return length===0;
	}

	this.indexOf= function(element){
	var index=-1;
		var currentNode=head;
		while(currentNode){
		index++;
		if(currentNode.element===element){
			return index;
		}
		currentNode=currentNode.next;
		}
		
	
            return -1;
}
     this.elementAt= function(index){
     	
	     var currentNode=head;
	     var count=-1;
	     while(currentNode){
		     count++;
		     if(count ===index){
			     return currentNode.element;
		     }
		     currentNode=currentNode.next;
	     }
	     return -1;


     }
     
    this.addAt=function(index, element){
      var newNode= new Node(element);
	var currentNode=head;
	    var previousNode;
	    var count=-1;
	    while(index<length){
		    previousNode=currentNode;
		    currentNode=currentNode.next;
		if(index=count){
			previousNode.next=newNode;


		}

    }


    }

}

var N =new linkedList();
console.log(N.isEmpty());

N.add('abc');
N.add('d');
N.add('e');
N.add('z');
console.log(N.size());

console.log(N.isEmpty());
N.add(1,'newNode');
console.log(N.size());
console.log(` this index of d is ::===>${N.indexOf('d')}`);
console.log(` this element of index 3  is ::===>${N.elementAt(3)}`);

console.log(N.size());
console.log(N.top());



N.remove('e');
console.log(N.size());
N.remove('abc');
console.log(N.top());

