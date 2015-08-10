var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Product Model
 * ==========
 */

var Product = new keystone.List('Product');

Product.add({
	name: { type: Types.Text, required: true, index: true },
	type: { 
		type: Types.Select, 
		required: true, 
		index: true, 
		initial: true, 
		options: 'non-weighable, weighable', 
		default: 'non-weighable'
	}
});

/**
 * Registration
 */

Product.defaultColumns = 'name, type';
Product.register();
