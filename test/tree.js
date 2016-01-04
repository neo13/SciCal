import { Tree } from "../lib/tree";
import { Node } from "../lib/node";
import { expect } from "chai";
import "babel-polyfill";


describe('A Tree', function () {
	it('should have constructor which creates an empty node', function (done) {
		expect(typeof(Tree)).to.equal('function');
		let t = new Tree();
		expect(t.right).to.equal(null);
		expect(t.left).to.equal(null);
		expect(t.value).to.equal(null);
		done();
	});
	it('should be extensible using `push`', function (done) {
		let t = new Tree();
		let n4 = new Node(null, null, 4),
			n3 = new Node(null, null, 3),
			n2 = new Node(null, null, 2),
			n1 = new Node(null, null, 1);
		t.push(n1);
		t.push(n2);
		t.push(n3);
		t.push(n4);
		expect(t.value).to.equal(1);
		expect(t.left.value).to.equal(2);
		expect(t.right.value).to.equal(3);
		expect(t.left.left.value).to.equal(4);
		done();
	});
	it('should be able to traverse in DFS manner', function (done) {
		let t = new Tree();
		let n4 = new Node(null, null, 4),
			n3 = new Node(null, null, 3),
			n2 = new Node(null, null, 2),
			n1 = new Node(null, null, 1);
		t.push(n1);
		t.push(n2);
		t.push(n3);
		t.push(n4);
		let order = [n4, n2, n3, n1], cur = 0;
		for (let n of t) {
			expect(n.value).to.equal(order[cur].value);
			cur++;
		}
		done();
	});
});