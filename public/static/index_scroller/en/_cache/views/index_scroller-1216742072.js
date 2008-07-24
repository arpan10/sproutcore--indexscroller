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
		this.selectIndex(parseInt(el.id));
	},
	
	mouseDragged: function(evt) {
		var el = Event.element(evt);
		this.selectIndex(parseInt(el.id));
	},
	
	selectIndex: function(new_idx) {
		this.set('value', new_idx);
	},
	
	updateIndex: function() {
		
	},
	
	showIndexes: function() {
		var buffer = [];
		buffer.push('<ul class="index-scroller-view">');

		var groups = this.get('groups');
		var groupsLen = groups.get('length');
		var val = this.get('value');
		var grp;
		var grpVal;
		var sel_class;

		for (var i = 0; i < groupsLen; i++) {
			grp = groups[i];
			grpVal = grp.value;
			sel_class = (val === grpVal) ? 'sel' : '';

			buffer.push('<li id="' + grpVal + '" class="index-group ' + sel_class + '">' + grp.name + '</li>');
		}
		buffer.push('</ul>');
		this.set('innerHTML', buffer.join('')) ;
	},

	/** Action method to be called when the button is pressed.  Will be overridden by instance.
	*/
	action: function(value) {
	
	}
  
}) ;

