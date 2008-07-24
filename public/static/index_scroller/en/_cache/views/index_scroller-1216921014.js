/* Start ----------------------------------------------------- views/index_scroller.js*/

// ==========================================================================
// IndexScroller.IndexScrollerView
// ==========================================================================

require('core');

IndexScroller.IndexScrollerLabelView = SC.LabelView.extend(
/** @scope IndexScroller.IndexScrollerLabelView.prototype */ {
    emptyElement: '<li class="index-group"></li>',
    
    indexValue: null,
    
  	mouseDown: function(evt) {
  	  this.get('parentNode').set('indexSelection', this);
  	},

  	mouseDragged: function(evt) {
  		this.get('parentNode').set('indexSelection', this);
  	}

});

/** @class

  (Document Your View Here)

  @extends SC.View
  @author    AuthorName  
  @version 0.1
*/
IndexScroller.IndexScrollerView = SC.ButtonView.extend(
/** @scope IndexScroller.IndexScrollerView.prototype */ {
  
  emptyElement: '<ul class="index-scroller-view"></ul>',
  
	/** An array of groups to display.  Can be either:
	  - array of strings:  strings are both the names to display and the value
	  - array of hashes with two keys:  name: the display name and value: the value of the group.
	*/
	groups: [
		{name: 'A', value: 0},
		{name: 'B', value: 8},
		{name: 'C', value: 16},
		{name: 'D', value: 24},
		{name: 'E', value: 32},
		{name: 'F', value: 40},
		{name: 'G', value: 48}
	],
	
  awake: function() {
    arguments.callee.base.apply(this, arguments);
    this._generateIndexLabels();
  },

	/**
	    The most recently selected value.
	*/
	value: null,
	
  // valueDidChange: function() {
  //  // this.showIndexes();
  // }.observes('value'),
	
	indexSelection: function(key, val) {
	  // val is an IndexScroller.IndexScrollerLabelView
	  if (val) {
	    if (this._indexSelection !== val) {
	      if (this._indexSelection) {
	        this._indexSelection.removeClassName('selected-index-group');
	        this._indexSelection.addClassName('index-group');
	      }
        val.removeClassName('index-group');
	      val.addClassName('selected-index-group');
	      this._indexSelection = val;
	      this.set('value', val.get('indexValue'));
	    }
	    SC.page.getPath('workspace.sidebar.masterList.list').scrollToIndex(val.get('indexValue'));
	  }
	  else return this._indexSelection;
	}.property(),
	
  _generateIndexLabels: function() {
    this.clear(); // remove our children
    
  	var groups = this.get('groups');
  	var groupsLen = groups.get('length');
  	var grp;
  	var v;

  	for (var i = 0; i < groupsLen; i++) {
  	  grp = groups[i];
  	  v = IndexScroller.IndexScrollerLabelView.create().set('value', grp.name).set('indexValue', grp.value);
  	  this.appendChild(v);
  	}
  }.observes('groups'),

	/** Action method to be called when the button is pressed.  Will be overridden by instance.
	*/
	action: function(value) {
	
	}
  
}) ;

/* End ------------------------------------------------------- views/index_scroller.js*/

