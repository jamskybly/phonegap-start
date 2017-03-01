$(document).on("pagecreate","#pageone", onPageCreated);

//some example data
fruit = [
  { name: 'Banana', 	colour: 'Yellow',       cost: '79p',      origin: 'Jamaica '	},
  { name: 'Orange',     colour: 'Orange',       cost: '58p',        origin: 'South Afica'	},
  { name: 'Lime',	    colour: 'Green',	    cost: '99p',         origin: 'Thailand' }
];


function onPageCreated() {
	var ractive = new Ractive({
		  // The `el` option can be a node, an ID, or a CSS selector.
		  el: '#content',
	
		  // We could pass in a string, but for the sake of convenience
		  // we're passing the ID of the <script> tag above.
	  template: '#template',
	
		  // Here, we're passing in some initial data
		  data: { fruitlist: fruit}
		});
}
