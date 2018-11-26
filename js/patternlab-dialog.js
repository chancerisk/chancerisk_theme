jQuery( document ).ready( function() {

    jQuery( "#opener" ).click(function() {
        jQuery("#dialog-modal").dialog({
            autoOpen: true,
            resizable: true,
            width: 635,
            modal: true,
        });

    });
});