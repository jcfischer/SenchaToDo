Ext.define('TD.store.TaskStore', {
  extend: 'Ext.data.Store',

  requires: [ 'TD.model.Task' ],

  config: {
      proxy: {
          type: 'localstorage',
          id: 'tdstore'
      },
      storeId: 'TaskStore',
      model: 'TD.model.Task',
      autoLoad: true,
      autoSync: true,
      groupField: 'dueDate',
      groupDir: 'DESC',

      sorters: [
          {
              property: 'title',
              direction: 'ASC'
          }
      ]

  }

});