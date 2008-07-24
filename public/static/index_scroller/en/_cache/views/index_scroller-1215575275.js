// ==========================================================================
// IndexScroller.IndexScrollerView
// ==========================================================================

require('core');

/** @class

  (Document Your View Here)

  @extends SC.View
  @author    AuthorName  
  @version 0.1
*/
IndexScroller.IndexScrollerView = SC.ButtonView.extend(
/** @scope IndexScroller.IndexScrollerView.prototype */ {
  
	/** An array of groups to display.  Can be either:
	  - array of strings:  strings are both the names to display and the value
	  - array of hashes with two keys:  name: the display name and value: the value of the group.
	*/
	groups: [
		{name: 'A', value: 0},
		{name: 'B', value: 10},
		{name: 'C', value: 20},
		{name: 'D', value: 30},
		{name: 'E', value: 40},
		{name: 'F', value: 50},
		{name: 'G', value: 60},
		{name: 'H', value: 70},
		{name: 'I', value: 80},
		{name: 'J', value: 90},
		{name: 'K', value: 100},
		{name: 'L', value: 110},
		{name: 'M', value: 120}
	],

	/**
	    The most recently selected value.
	*/
	value: null,
	
	valueDidChange: function() {
		this.showIndexes();
	}.observes('value'),
	
	mouseDown: function(evt) {
		var el = Event.element(evt);
		this.set('value', parseInt(el.id));
	},
	
	showIndexes: function() {
		var buffer = "";
		var sel_class;
//		buffer += "<div class=\"index_hud\" >";
		buffer += "<ul>"
		for (var i = 0; i < this.groups.get('length'); i++) {
			if (this.value === this.groups.objectAt(i).value)
				sel_class = "sel";
			else sel_class = "";
			
			buffer += "<li id=\"" + this.groups.objectAt(i).value + "\" class=\"" + sel_class + "\">" + this.groups.objectAt(i).name + "</li>";
		}
		buffer += "</ul>";
//		buffer += "</div>";
		this.set('innerHTML', buffer) ;
	},

	/** Action method to be called when the button is pressed.  Will be overridden by instance.
	*/
	action: function(value) {
	
	}
  
}) ;

