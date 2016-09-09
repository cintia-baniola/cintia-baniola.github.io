var tableHeader = "<table><tr><td>Nr</td><td>Kurs</td><td>Titel</td><td>Beginn</td><td>Zeit</td><td>Preis</td></tr>";
var tableFooter = "<table>";

var table = "";
var tableRows = "";
var trStart = "<tr>";
var trEnd = "</tr>";
var tcStart = "<td>";
var tcEnd = "</td>";
var linkStart = "<a href='";
var linkEnd = "</a>";
var linkKurs = "";
var linkTitel = "";

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

    fieldId = tcStart + Id + tcEnd;

    //linkKurs = linkStart + (Kurs).toLowerCase() + " >" + Kurs + linkEnd;
    

    fieldKurs = tcStart + Kurs + tcEnd;
    
    linkTitel = linkStart + (Kurs).toLowerCase() + ".html' >" + Titel + linkEnd;
    fieldTitel = tcStart + linkTitel + tcEnd;
    console.log(fieldTitel);

    fieldBeginn = tcStart + Beginn + tcEnd;

    fieldZeit = tcStart + Zeit + tcEnd;

    fieldPreis = tcStart + Preis + tcEnd;
    tableRows += trStart  + fieldId + fieldKurs + fieldTitel + fieldBeginn + fieldZeit + fieldPreis + trEnd;
    
  });

  table = tableHeader + tableRows + tableFooter;
  
  $("#kurs-table").append(table);

  $('#kurs-list li').on('click', function (event) {
    console.dir(event.target);
    console.log(event.target.textContent);
    console.log(event.target.id);
  });

})