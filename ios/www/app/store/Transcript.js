Ext.define('IU.store.Transcript', {
	extend : 'Ext.data.Store',
	config : {
		model : 'IU.model.Transcript',
		proxy : {
			type : 'ajax',
			url : BaseURL + '/Transcript.php',
			reader : {
				type : 'json',
				rootProperty : 'attemptedCourses'
			}
		},
		sorters : [{
			property : 'semester_no',
			direction : 'DESC'
		}],
		grouper : {
			groupFn : function(record) {
				if(record && record.data.semester_name) {
					return record.get('semester_name');
				} else {
					return '';
				}
			}
		}
	}
});
