/* Start ----------------------------------------------------- views/my_list.js*/

// ==========================================================================
// IndexScroller.MyListView
// ==========================================================================

require('core');

/** @class

  (Document Your View Here)

  @extends SC.View
  @author AuthorName
  @version 0.1
*/
IndexScroller.MyListView = SC.ListView.extend(
/** @scope IndexScroller.MyListView.prototype */ {
	
  scrollToIndex: function(idx) {
	var scroll = SC.page.getPath('workspace.sidebar.masterList.list');
	scroll.scrollToContent(scroll.get('content').objectAt(idx));
  }

}) ;


/* End ------------------------------------------------------- views/my_list.js*/

