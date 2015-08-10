var keystone = require('keystone');
var Types = keystone.Field.Types;

var Category = keystone.List('Category');

Category.add({
	name: { type: Types.Text, required: true, index: true }
});

Category.defaultColumns = 'name, type';
Category.register();