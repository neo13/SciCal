import { Node } from "../lib/node";
import { expect } from "chai";


describe('A node', function () {
	it('should have constructor which takes left, right and value', function (done) {
		expect(typeof(Node)).to.equal('function');
		done();
	})
});