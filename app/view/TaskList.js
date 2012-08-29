Ext.define('TD.view.TaskList', {
   extend: 'Ext.dataview.List',

   requires: ['TD.store.TaskStore'],
   config: {
       id: 'taskList',
       displayField: 'title',
       store: Ext.create('TD.store.TaskStore'),
       emptyText: '<p>Hier ist (noch) nix</p>',
       itemTpl: '<div>{title}</div>',
       grouped: false,
       onItemDisclosure: true,
       items: [{
           xtype: 'toolbar',
           title: 'To Do List',
           docked: 'top',
           ui: 'light',
           items: [{
               xtype: 'button',
               iconCls: 'add',
               iconMask: true,
               text: '',
               ui: 'plain',
               action: 'createTask'
           }]
       }

       ]

   }

});