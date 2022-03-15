export function ga() {
    function sendGAEvent(event, data){
        console.log(event, data);
        gtag('event', event, data);
    }
    $(".first__questions").on("click", function(e){
        sendGAEvent('Sāka testu', {
          'event_category' : 'Sāka testu',
          'event_label' : 'Sāka testu'
        });
    });
    $(".second__questions").on("click", function(e){
        sendGAEvent('Sāka testa otro daļu', {
          'event_category' : 'Sāka testa otro daļu',
          'event_label' : 'Sāka testa otro daļu'
        });
    });
    $(".resultsButton").on("click", function(e){
        sendGAEvent('Apskatījas rezultātus', {
          'event_category' : 'Apskatījas rezultātus',
          'event_label' : 'Apskatījas rezultātus'
        });
    });
}