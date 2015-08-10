var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Product Model
 * ==========
 */

var Product = new keystone.List('Product');

Product.add({
	name: { type: Types.Text, required: true, index: true },
	category: { type: Types.Relationship, ref: 'Category', initial: true },
	price: { type: Types.Money, format: '@0,0.00', initial: true },
	unit: { type: Types.Select, options: 'count, grams', default: 'count', initial: true }
});

// Provide access to Keystone
Product.schema.virtual('isWeighable').get(function() {
	return this.unit === 'grams';
});

/**
 * Registration
 */

Product.defaultColumns = 'name, type, price, unit, isWeighable';
Product.register();
