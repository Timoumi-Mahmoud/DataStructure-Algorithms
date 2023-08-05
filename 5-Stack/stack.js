"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Stack = /** @class */ (function () {
    function Stack() {
        this.head = undefined;
        this.length = 0;
    }
    Stack.prototype.push = function (item) {
        var node = { value: item };
        this.length++;
        if (!this.head) {
            this.head = node;
            //	this.head.prev=undefined;
            return;
        }
        //let h=this.head;
        node.prev = this.head;
        this.head = node;
        //this.head=node;
        //this.head.prev=h.prev;
    };
    Stack.prototype.pop = function () {
        this.length = Math.max(0, this.length - 1);
        if (this.length === 0) {
            var head = this.head;
            this.head = undefined;
            return head === null || head === void 0 ? void 0 : head.value;
        }
        var h = this.head;
        //let h= this.head;
        this.head = h.prev;
        return h.value;
    };
    Stack.prototype.peek = function () {
        var _a;
        return (_a = this.head) === null || _a === void 0 ? void 0 : _a.value;
    };
    Stack.prototype.showStack = function () {
        while (this.head.prev) {
            console.log(this.head);
        }
    };
    return Stack;
}());
exports.default = Stack;
var sOne = new Stack();
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
