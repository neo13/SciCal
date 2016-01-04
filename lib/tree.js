/************************************************************************
*																		*
*	SciCal																*
*	A scientific calculator made by Javascript							*
*	Author: Neo13 <a.derakhshan.iut@gmail.com>							*
*	License: MIT														*
*																		*
************************************************************************/

import { Node } from "./node";
import "babel-polyfill";

export class Tree extends Node {
/**
 *
 * Tree
 * A binary tree structure
 *
 */
	constructor () {
		super(null, null, null);
		this.length = 0;
	}

	push (node) {
		if (this.value === null) {
			//	The tree is empty
			this.right = node.right;
			this.left = node.left;
			this.value = node.value;
		} else {
			//	When tree is not empty look for the first empty place
			var queue = [],
				cur = this;

			while(cur.right !== null && cur.left !== null) {
				queue.push(cur.left);
				queue.push(cur.right);
				cur = queue.shift();
			}

			if (cur.left === null) {
				cur.left = node;
			} else {
				cur.right = node;
			}

		}

		this.length++;
		return this;
	}

	* [Symbol.iterator] () {
		//	Defines a post-order DFS traverse generator which is used to solve tokenized equations professional
		let stack = [this, this.right, this.left], cur = null;
		while(stack.length !== 0) {
			cur = stack.pop();
			if (cur.left !== null) {
				stack.push(cur);
				if (cur.right !== null) {
					stack.push(cur.right);
				}
				stack.push(cur.left);
			} else {
				yield cur;
				if (stack.length !== 0) {
					yield stack.pop();
				} else {
					break;
				}
			}
		}
		return;
	}
}