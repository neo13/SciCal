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
	constructor (left, right, value) {
		this.right = right;
		this.left = left;
		this.value = value;
		return this;
	}

	get right() {
		return this._right;
	}

	get left() {
		return this._left;
	}

	get value() {
		return this._value;
	}

	set right(right) {
		this._right = right;
		return this;
	}

	set left(left) {
		this._left = left;
		return this;
	}

	set value(value) {
		this._value = value;
		return this;
	}
}