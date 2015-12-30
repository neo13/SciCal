/************************************************************************
*																		*
*	SciCal																*
*	A scientific calculator made by Javascript							*
*	Author: Neo13 <a.derakhshan.iut@gmail.com>							*
*	License: MIT														*
*																		*
************************************************************************/

class Tree extends Node {
/**
 *
 * Tree
 * A binary tree structure
 *
 */
	constructor () {
		super.constructor(null, null, null);
		this.length = 0;
	}

	push (node) {
		if (this.value === null) {
			//	The tree is empty
			this.right = node.right;
			this.left = node.left;
			this.value = this.value;
		}

		//	When tree is not empty look for the first empty place
		var queue = [],
			cur = this;

		while(cur.right !== null && cur.left !== null) {
			queue.push(cur.right);
			queue.push(cur.left);
			cur = queue.shift();
		}

		if (cur.right === null) {
			cur.right = node;
		} else {
			cur.left = left;
		}

		this.length++;
		return this;
	}
}