
Object.extend(String.English,{});IndexScroller=SC.Object.create({server:SC.Server.create({prefix:['IndexScroller']}),FIXTURES:[]});require('core');IndexScroller.Address=SC.Record.extend({fullName:function(){return[this.get('firstName'),this.get('lastName')].compact().join(' ');}.property('firstName','lastName')});function main(){IndexScroller.server.preload(IndexScroller.FIXTURES);SC.page.awake();SC.page.get('demoScroller').set('value',0);var addresses=IndexScroller.Address.findAll().clone();IndexScroller.listController.set('content',addresses);};require('core');IndexScroller.IndexScrollerLabelView=SC.LabelView.extend({emptyElement:'<li class="index-group"></li>',indexValue:null,mouseDown:function(evt){this.get('parentNode').set('indexSelection',this);},mouseDragged:function(evt){this.get('parentNode').set('indexSelection',this);}});IndexScroller.IndexScrollerView=SC.ButtonView.extend({emptyElement:'<ul class="index-scroller-view"></ul>',groups:[{name:'A',value:0},{name:'B',value:8},{name:'C',value:16},{name:'D',value:24},{name:'E',value:32},{name:'F',value:40},{name:'G',value:48}],awake:function(){arguments.callee.base.apply(this,arguments);this._generateIndexLabels();},value:null,indexSelection:function(key,val){if(val){if(this._indexSelection!==val){if(this._indexSelection){this._indexSelection.removeClassName('selected-index-group');this._indexSelection.addClassName('index-group');}
val.removeClassName('index-group');val.addClassName('selected-index-group');this._indexSelection=val;this.set('value',val.get('indexValue'));}
SC.page.getPath('workspace.sidebar.masterList.list').scrollToIndex(val.get('indexValue'));}
else return this._indexSelection;}.property(),_generateIndexLabels:function(){this.clear();var groups=this.get('groups');var groupsLen=groups.get('length');var grp;var v;for(var i=0;i<groupsLen;i++){grp=groups[i];v=IndexScroller.IndexScrollerLabelView.create().set('value',grp.name).set('indexValue',grp.value);this.appendChild(v);}}.observes('groups'),action:function(value){}});require('core');IndexScroller.listController=SC.ArrayController.create({allowsEmptySelection:true,allowsMultipleSelection:false});require('core');IndexScroller.MyListView=SC.ListView.extend({scrollToIndex:function(idx){var scroll=SC.page.getPath('workspace.sidebar.masterList.list');scroll.scrollToContent(scroll.get('content').objectAt(idx));}});require('core');IndexScroller.FIXTURES=IndexScroller.FIXTURES.concat([{guid:1,type:'Address',firstName:"Michael",lastName:"Scott"},{guid:2,type:'Address',firstName:"Dwight",lastName:"Schrute"},{guid:3,type:'Address',firstName:"Jim",lastName:"Halpert"},{guid:4,type:'Address',firstName:"Pam",lastName:"Beesly"},{guid:5,type:'Address',firstName:"Ryan",lastName:"Howard"},{guid:6,type:'Address',firstName:"Michael",lastName:"Scott"},{guid:7,type:'Address',firstName:"Dwight",lastName:"Schrute"},{guid:8,type:'Address',firstName:"Jim",lastName:"Halpert"},{guid:9,type:'Address',firstName:"Pam",lastName:"Beesly"},{guid:10,type:'Address',firstName:"Ryan",lastName:"Howard"},{guid:11,type:'Address',firstName:"Michael",lastName:"Scott"},{guid:12,type:'Address',firstName:"Dwight",lastName:"Schrute"},{guid:13,type:'Address',firstName:"Jim",lastName:"Halpert"},{guid:14,type:'Address',firstName:"Pam",lastName:"Beesly"},{guid:15,type:'Address',firstName:"Ryan",lastName:"Howard"},{guid:16,type:'Address',firstName:"Michael",lastName:"Scott"},{guid:17,type:'Address',firstName:"Dwight",lastName:"Schrute"},{guid:18,type:'Address',firstName:"Jim",lastName:"Halpert"},{guid:19,type:'Address',firstName:"Pam",lastName:"Beesly"},{guid:20,type:'Address',firstName:"Ryan",lastName:"Howard"},{guid:21,type:'Address',firstName:"Michael",lastName:"Scott"},{guid:22,type:'Address',firstName:"Dwight",lastName:"Schrute"},{guid:23,type:'Address',firstName:"Jim",lastName:"Halpert"},{guid:24,type:'Address',firstName:"Pam",lastName:"Beesly"},{guid:25,type:'Address',firstName:"Ryan",lastName:"Howard"},{guid:26,type:'Address',firstName:"Michael",lastName:"Scott"},{guid:27,type:'Address',firstName:"Dwight",lastName:"Schrute"},{guid:28,type:'Address',firstName:"Jim",lastName:"Halpert"},{guid:29,type:'Address',firstName:"Pam",lastName:"Beesly"},{guid:30,type:'Address',firstName:"Ryan",lastName:"Howard"},{guid:31,type:'Address',firstName:"Michael",lastName:"Scott"},{guid:32,type:'Address',firstName:"Dwight",lastName:"Schrute"},{guid:33,type:'Address',firstName:"Jim",lastName:"Halpert"},{guid:34,type:'Address',firstName:"Pam",lastName:"Beesly"},{guid:35,type:'Address',firstName:"Ryan",lastName:"Howard"},{guid:36,type:'Address',firstName:"Michael",lastName:"Scott"},{guid:37,type:'Address',firstName:"Dwight",lastName:"Schrute"},{guid:28,type:'Address',firstName:"Jim",lastName:"Halpert"},{guid:39,type:'Address',firstName:"Pam",lastName:"Beesly"},{guid:40,type:'Address',firstName:"Ryan",lastName:"Howard"},{guid:41,type:'Address',firstName:"Michael",lastName:"Scott"},{guid:42,type:'Address',firstName:"Dwight",lastName:"Schrute"},{guid:43,type:'Address',firstName:"Jim",lastName:"Halpert"},{guid:44,type:'Address',firstName:"Pam",lastName:"Beesly"},{guid:45,type:'Address',firstName:"Ryan",lastName:"Howard"},{guid:46,type:'Address',firstName:"Michael",lastName:"Scott"},{guid:47,type:'Address',firstName:"Dwight",lastName:"Schrute"},{guid:48,type:'Address',firstName:"Jim",lastName:"Halpert"},{guid:49,type:'Address',firstName:"Pam",lastName:"Beesly"}]);