
var fieldTitel, fieldWochentag, fieldZeit = "";
var Titel,Kurs, Wochentag, Zeit = "";

$.getJSON("kursdaten.json", function (data) {
  
  $.each(data, function (key, val) {
    Titel = data[key].Titel;
    Kurs = data[key].Kurs;
    Wochentag = data[key].Wochentag;
    Zeit = data[key].Zeit;

    $("#kurs-aktuell").append("<li><a href='" + Kurs + ".html' "  + "<a>" + Titel + " " + Wochentag +  " " + Zeit + "</a></li>");

 
  });


  $('#kurs-aktuell li').on('click', function (event) {
    console.dir(event.target);
    console.log(event.target.textContent);
    console.log(event.target.id);
  });

})