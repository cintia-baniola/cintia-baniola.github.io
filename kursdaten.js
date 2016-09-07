var tableHeader = "<table><tr><td>Nr</td><td>Kurs</td><td>Titel</td><td>Beginn</td><td>Zeit</td><td>Preis</td></tr>";
var tableFooter = "<table>";

var table = "";
var tableRows = "";
var trStart = "<tr>";
var trEnd = "</tr>";
var tcStart = "<td>";
var tcEnd = "</td>";

var fieldId, fieldKurs, fieldTitel, fieldBeginn, fieldZeit, fieldPreis = "";
var Id, Kurs, Titel, Beginn, Zeit, Preis = "";

$.getJSON("kursdaten.json", function (data) {
  
  $.each(data, function (key, val) {
    Id = data[key].Id;
    Kurs = data[key].Kurs;
    Titel = data[key].Titel
    Beginn = data[key].Beginn;
    Zeit = data[key].Zeit;
    Preis = data[key].Preis;

    //$("#kurs-list").append("<li id='" + Id + "'>" + Kurs + " - " + Titel + " - Beginn: " + Beginn +  " - Zeit: " + Zeit +  " - Preis: " + Preis + "</li>");

    fieldId = tcStart + Id + tcEnd;
    fieldKurs = tcStart + Kurs + tcEnd;
    fieldTitel = tcStart + Titel + tcEnd;

    fieldBeginn = tcStart + Beginn + tcEnd;

    fieldZeit = tcStart + Zeit + tcEnd;

    fieldPreis = tcStart + Preis + tcEnd;
    tableRows += trStart + fieldId + fieldKurs + fieldTitel + fieldBeginn + fieldZeit + fieldPreis + trEnd;

  });

  table = tableHeader + tableRows + tableFooter;
  
  $("#kurs-table").append(table);

  $('#kurs-list li').on('click', function (event) {
    console.dir(event.target);
    console.log(event.target.textContent);
    console.log(event.target.id);
  });

})