Ext.define('FakebookConnect.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Welcome',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Welcome to Sencha Touch 2',
                    items: [
                        {
                            xtype: 'button',
                            text: 'Login',
                            listeners: {
                                tap: function () {
                                    var me = this;
                                    var panel = me.getParent().getParent().getParent();
                                    try {
                                        FB.login(function (response) {
                                            if (response.authResponse) {
                                                FB.api('/me', function (response) {
                                                    //panel.setHtml('Good to see you, ' + response.name + '.');
                                                    panel.setHtml(JSON.stringify(response));
                                                });
                                            } else {
                                                console.log('User cancelled login or did not fully authorize.');
                                            }
                                            //panel.setHtml(JSON.stringify(response));
                                        }, { scope: "email" });
                                    }
                                    catch (e) {
                                        panel.setHtml(e.message);
                                    }
                                }
                            }
                        }
                    ]
                },

                html: 'This is a facebook connection test'
            }
        ]
    }
});
