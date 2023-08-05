"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Queue = /** @class */ (function () {
    function Queue() {
        this.head = this.tail = undefined;
        this.length = 0;
    }
    Queue.prototype.enqueue = function (item) {
        this.length++;
        if (!this.tail) {
            this.tail = this.head = { value: item };
            return undefined;
        }
        var node = { value: item };
        this.tail.next = node;
        //this.tail=this.tail.next ;
        this.tail = node;
    };
    Queue.prototype.deque = function () {
        if (!this.head) {
            return undefined;
        }
        var h = this.head;
        this.length--;
        this.head = this.head.next;
        //free like other languages 
        h.next = undefined;
        if (this.length === 0) {
            this.tail = undefined;
        }
        return h.value;
    };
    Queue.prototype.peek = function () {
        var _a;
        return (_a = this.head) === null || _a === void 0 ? void 0 : _a.value;
    };
    return Queue;
}());
exports.default = Queue;
var nOne = new Queue();
nOne.enqueue('abc');
console.log(nOne);
console.log(nOne.peek());
