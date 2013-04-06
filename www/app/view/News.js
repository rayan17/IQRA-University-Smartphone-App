Ext.define('IU.view.News', {
	extend : 'Ext.List',
	xtype : 'iu-news',
	config : {
		cls : 'iu-news',
		store : 'News',
		selectedCls : '',
		itemTpl : ['<div class="iu-news-item-title">{title}</div>'].join(''),
		emptyText : '"Iqra University - IU" Facebook page has no updates.',
		plugins : [{
			xclass : 'Ext.plugin.PullRefresh',
			refreshFn : function(plugin) {
				var store = plugin.getList().getStore();
				store.load();
			}
		}],
		listeners : {
			painted : function(sender, eOpts) {
				target = Ext.getCmp('iu-news');

				if (!target.getStore().isLoaded()) {
					target.setMasked({
						xtype : 'loadmask',
						message : 'Loading News'
					});

					target.getStore().load({
						callback : function() {
							target.setMasked(false);	
						}
					});	
				}
			}
		}
	}
});
