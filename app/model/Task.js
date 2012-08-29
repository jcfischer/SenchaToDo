Ext.define('TD.model.Task', {
    extend:'Ext.data.Model',

    config:{
        fields:[
            {
                name:'id',
                type:'int'
            },
            {
                name:'completed',
                type:'boolean'
            },
            {
                name:'title',
                type:'string'
            },
            {
                name:'description',
                type:'string'
            },
            {
                name:'dueDate',
                type:'date'
            }
        ],
        idProperty: 'id'
    }

})