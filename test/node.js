import { Node } from "../lib/node";
import { expect } from "chai";


describe('A node', function () {
	it('should have constructor which takes left, right and value', function (done) {
		expect(typeof(Node)).to.equal('function');
		let n = new Node(new Node(null, null, null), new Node(null, null, null), 'root');
		expect(typeof(n.right)).to.equal('object');
		expect(typeof(n.left)).to.equal('object');
		expect(n.value).to.equal('root');
		done();
	});
	it('should be expendable', function (done) {
		let n7 = new Node(null, null, null),
			n6 = new Node(null, null, null),
			n5 = new Node(null, null, null),
			n4 = new Node(null, null, null),
			n3 = new Node(n6, n7, 2),
			n2 = new Node(n4, n5, 2),
			n1 = new Node(n2, n3, 1);
		expect(n1.right.right).to.equal(n4);
		done();
	});
});