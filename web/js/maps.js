function initialize() {
        var mapOptions = {
          center: new google.maps.LatLng(52.473789, 5.166387),
          zoom: 9,
          scrollwheel: false,
    navigationControl: false,
    mapTypeControl: false,
    scaleControl: false,
    draggable: false
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);

        var koopweg = new google.maps.LatLng(52.269752,5.167363);
        var naarden = new google.maps.LatLng(52.284377,5.161876);
        var demeent = new google.maps.LatLng(52.271464,5.137891);
        var huizen = new google.maps.LatLng(52.297569,5.229542);
        var weesp = new google.maps.LatLng(52.304593,5.038460);
        var hilcentrum = new google.maps.LatLng(52.221491,5.174376);
        var hiloost = new google.maps.LatLng(52.224606,5.198466);
        var mtc = new google.maps.LatLng(52.689618,5.246345);

        var contentString01 = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Centrum voor Gezond Bewegen</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Adres</b> Koopweg 4, 1402 PD Bussum' +
            '<p><b>Telefoonnummers</b> 035-6914883' +
            '<h4><b>Websites</h4>' +
            '<p><a href=" http://www.centrumvoorgezondbewegen.nl">www.centrumvoorgezondbewegen.nl</a></p>' +
            '<h4><b>Email Adressen</h4>' +
            '<p><a href=" http://oefentherapiebussum@hotmail.com">oefentherapiebussum@hotmail.com</a></p>' +
            '</div>'+
            '</div>';

            var contentString02 = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Centrum voor Gezond Bewegen Naarden</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Adres</b> Lambertus Hortensiuslaan 40-c, 1412GX Naarden' +
            '<p><b>Telefoonnummers</b> 035-6940940' +
            '<h4><b>Websites</h4>' +
            '<p><a href=" http://www.centrumvoorgezondbewegen.nl">www.centrumvoorgezondbewegen.nl</a></p>' +
            '</div>'+
            '</div>';

            var contentString03 = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Centrum voor Gezond Bewegen De Meent</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Adres</b> De Meent 10-b, 1218 CB Hilversum' +
            '<p><b>Telefoonnummers</b> 06-26706095' +
            '<h4><b>Websites</h4>' +
            '<p><a href=" http://www.centrumvoorgezondbewegen.nl">www.centrumvoorgezondbewegen.nl</a></p>' +
            '<h4><b>Email Adressen</h4>' +
            '<p><a href=" http://oefentherapiebussum@hotmail.com">oefentherapiebussum@hotmail.com</a></p>' +
            '</div>'+
            '</div>';

            var contentString04 = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">MTC Huizen</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Adres</b> De Ruyterstraat 7, 1271 SR Huizen' +
            '<p><b>Telefoonnummers</b> 035-5257089' +
            '<h4><b>Websites</h4>' +
            '<p><a href=" http://www.mtchuizen.com">www.mtchuizen.com</a></p>' +
            '<h4><b>Email Adressen</h4>' +
            '<p><a href=" schram@mtchuizen.com">schram@mtchuizen.com</a></p>' +
            '</div>'+
            '</div>';

            var contentString05 = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Gezondheidscentrum Weesp</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Adres</b> C.J. van Houtenlaan 1E, 1381 CN Weesp' +
            '<p><b>Telefoonnummers</b> 029-4418322 ' +
            '<h4><b>Websites</h4>' +
            '<p><a href=" http://www.mpraktijk.nl">www.mpraktijk.nl</a></p>' +
            '<h4><b>Email Adressen</h4>' +
            '<p><a href=" info@mpraktijk.nl">info@mpraktijk.nl</a></p>' +
            '</div>'+
            '</div>';

            var contentString06 = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Gezondheidscentrum Casa Cura</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Adres</b> Neuweg 27, 1211 LV Hilversum' +
            '<p><b>Telefoonnummers</b> 035-6424388  ' +
            '<h4><b>Websites</h4>' +
            '<p><a href=" http://www.mpraktijk.nl">www.mpraktijk.nl</a></p>' +
            '<h4><b>Email Adressen</h4>' +
            '<p><a href=" info@mpraktijk.nl">info@mpraktijk.nl</a></p>' +
            '</div>'+
            '</div>';

            var contentString07 = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Paramedisch Centrum Daltonstraat</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Adres</b> Daltonstraat 176, 1223 RT Hilversum' +
            '<p><b>Telefoonnummers</b> 035-6424388' +
            '<h4><b>Websites</h4>' +
            '<p><a href=" http://www.mpraktijk.nl">www.mpraktijk.nl</a></p>' +
            '<h4><b>Email Adressen</h4>' +
            '<p><a href=" info@mpraktijk.nl">info@mpraktijk.nl</a></p>' +
            '</div>'+
            '</div>';

            var contentString08 = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">MTC Huizen</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Adres</b> Hugo de Grootsingel 1' +
            '<p><b>Telefoonnummers</b> 035-5231144' +
            '<h4><b>Websites</h4>' +
            '<p><a href=" http://www.mtchuizen.com">www.mtchuizen.com</a></p>' +
            '<h4><b>Email Adressen</h4>' +
            '<p><a href=" smitswarte@mtchuizen.com">smitswarte@mtchuizen.com</a></p>' +
            '</div>'+
            '</div>';

        var infowindow01 = new google.maps.InfoWindow({
          content: contentString01
        });

        var infowindow02 = new google.maps.InfoWindow({
          content: contentString02
        });

        var infowindow03 = new google.maps.InfoWindow({
          content: contentString03
        });

        var infowindow04 = new google.maps.InfoWindow({
          content: contentString04
        });

        var infowindow05 = new google.maps.InfoWindow({
          content: contentString05
        });

        var infowindow06 = new google.maps.InfoWindow({
          content: contentString06
        });

        var infowindow07 = new google.maps.InfoWindow({
          content: contentString07
        });

        var infowindow08 = new google.maps.InfoWindow({
          content: contentString08
        });

        var marker01 = new google.maps.Marker({
          position: koopweg,
          map: map,
          title: 'Centrum voor Gezond Bewegen, Koopweg'
        });

        var marker02 = new google.maps.Marker({
          position: naarden,
          map: map,
          title: 'Centrum voor Gezond Bewegen, Naarden'
        });

        var marker03 = new google.maps.Marker({
          position: demeent,
          map: map,
          title: 'Centrum voor Gezond Bewegen, De Meent'
        });

        var marker04 = new google.maps.Marker({
          position: huizen,
          map: map,
          title: 'MTC Huizen'
        });

        var marker05 = new google.maps.Marker({
          position: weesp,
          map: map,
          title: 'Gezondheidscentrum Weesp'
        });

        var marker06 = new google.maps.Marker({
          position: hilcentrum,
          map: map,
          title: 'Gezondheidscentrum Casa Cura'
        });

        var marker07 = new google.maps.Marker({
          position: hiloost,
          map: map,
          title: 'Paramedisch Centrum Daltonstraat'
        });

        var marker08 = new google.maps.Marker({
          position: mtc,
          map: map,
          title: 'MTC Huizen'
        });

        google.maps.event.addListener(marker01, 'click', function() {
            infowindow01.open(map,marker01);
        });
        google.maps.event.addListener(marker02, 'click', function() {
            infowindow02.open(map,marker02);
        });
        google.maps.event.addListener(marker03, 'click', function() {
            infowindow03.open(map,marker03);
        });
        google.maps.event.addListener(marker04, 'click', function() {
            infowindow04.open(map,marker04);
        });
        google.maps.event.addListener(marker05, 'click', function() {
            infowindow05.open(map,marker05);
        });
        google.maps.event.addListener(marker06, 'click', function() {
            infowindow06.open(map,marker06);
        });
        google.maps.event.addListener(marker07, 'click', function() {
            infowindow07.open(map,marker07);
        });
        google.maps.event.addListener(marker08, 'click', function() {
            infowindow08.open(map,marker08);
        });

      }
      google.maps.event.addDomListener(window, 'load', initialize);