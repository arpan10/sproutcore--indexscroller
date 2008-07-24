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
		{name: 'D', value: 30}
	],

	/**
	    The most recently selected value.
	*/
	value: null,
	
	valueDidChange: function() {
		this.showIndexes();
	}.observes('value'),
	
	showIndexes: function() {
		var buffer = "";
		buffer += "<div style=\"background-color: #000; color: #ccc; font-size: 20px; padding: 5px; margin: 5px; height: 20px;\">";
		for (var i = 0; i < this.groups.get('length'); i++)
			buffer += "<div style=\"float: left; padding: 0 2px;\">" + this.groups.objectAt(i).name + "</div>";
		buffer += "</div>";
		this.set('innerHTML', buffer) ;
	},

	/** Action method to be called when the button is pressed.  Will be overridden by instance.
	*/
	action: function(value) {
	
	}
  
}) ;

