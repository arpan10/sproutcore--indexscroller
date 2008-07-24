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
	
	mouseDown: function(evt) {
		var el = Event.element(evt);
		var val = el.id;
		var n = new Number(val);
		this.set('value', n.toNumber());
	},
	
	showIndexes: function() {
		var buffer = "";
		var sel_class;
		buffer += "<div class=\"index_hud\" >";
		buffer += "<ul>"
		alert(typeof(this.value));
		alert("group: " + typeof(this.groups.objectAt(0).value));
		for (var i = 0; i < this.groups.get('length'); i++)
		{
			if (this.value === this.groups.objectAt(i).value)
			{
				sel_class = "sel";
			}
			else sel_class = "";
			buffer += "<li id=\"" + this.groups.objectAt(i).value + "\" class=\"" + sel_class + "\">" + this.groups.objectAt(i).name + "</li>";
		}
		buffer += "</ul>";
		buffer += "</div>";
		this.set('innerHTML', buffer) ;
	},

	/** Action method to be called when the button is pressed.  Will be overridden by instance.
	*/
	action: function(value) {
	
	}
  
}) ;

