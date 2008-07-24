/* Start ----------------------------------------------------- models/address.js*/

// ==========================================================================
// IndexScroller.Address
// ==========================================================================

require('core');

/** @class

  (Document your class here)

  @extends SC.Record
  @author AuthorName
  @version 0.1
*/
IndexScroller.Address = SC.Record.extend(
/** @scope IndexScroller.Address.prototype */ {

  	fullName: function() {
	    return [this.get('firstName'), this.get('lastName')].compact().join(' ');
	  }.property('firstName', 'lastName')

}) ;


/* End ------------------------------------------------------- models/address.js*/

