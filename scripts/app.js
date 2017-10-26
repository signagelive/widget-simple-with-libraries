require.config({
    baseUrl: 'scripts/lib',
    paths: {
        app: '../app',
        jquery: 'vendor/jquery'
    }
});

require(['jquery', 'wdf/widget-config'], function($, WidgetConfig) {

    // load the widget configuration
    var config = new WidgetConfig();
    config.on('config-initialized', function(event, data) {
        $('#output').text(config.preferences['Text']);
    });
    config.on('config-error', function() {
        $('#output').text('Error loading preferences');
    });
    config.init();
});