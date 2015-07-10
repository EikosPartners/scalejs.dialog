define([
    'scalejs!core', 'scalejs!application'
], function(
    core
) {
    var dialog = core.dialog;

    // For deeper testing, log to console
    console.log('core.dialog: ', dialog);

    describe('core.dialog', function() {

        it('is defined', function() {
            expect(dialog).toBeDefined();
        });

    });
});

