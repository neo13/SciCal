/************************************************************************
*																		*
*	SciCal																*
*	A scientific calculator made by Javascript							*
*	Author: Neo13 <a.derakhshan.iut@gmail.com>							*
*	License: MIT														*
*																		*
************************************************************************/


export class Node {
/**
 *
 * Node
 * A binary Tree node
 * [Depends On: None]
 * [Dependency Of: Tree]
 *
 */
	constructor (right, left, value) {
		this.right = right;
		this.left = left;
		this.value = value;
		return this;
	}

	get right() {
		return this.right;
	}

	get left() {
		return this.left;
	}

	get value() {
		return this.value;
	}

	set right(right) {
		this.right = right;
		return this;
	}

	set left(left) {
		this.left = left;
		return this;
	}

	set value(value) {
		this.value = value;
		return this;
	}
}