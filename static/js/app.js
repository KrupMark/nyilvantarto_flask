/*jshint esnext: true */
/*jshint devel: true */
/*jslint node: true */
/*jslint browser: true */
/*jslint jquery: true */

function switchMenu(clickedId) {
  console.log(clickedId+" megnyomva...");
  // jquery selector: minden html elemet kiválaszt amin rajta van content class
  $(".content").css('display', 'none');
  $("#"+clickedId+".content").css('display', 'unset');

  $(".menu-item").removeClass("btn-primary");

  $("#"+clickedId+".menu-item").removeClass("btn-secondary");
  $("#"+clickedId+".menu-item").addClass("btn-primary");
}
function getToday() {
    let now = new Date();
    let testDay = new Date("January 23, 2014 11:13:00");
    console.log("teszt dátum: "+testDate);
    
    // levágjuk az utolsó két elemet a stringből
    let day = ("0" + now.getDate()).slice(-2);
    // January = 0 => +1
    let month = ("0" + (now.getMonth() + 1)).slice(-2);
    let today = now.getFullYear()+"."+(month)+"."+(day);
    return today;
}


function addMunkanap() {
    let lastid = parseInt($('.new_munkanap:last').attr('id'));
    if(isNaN(lastid)) {
        lastid=0;
}
    
    mainap = "Wuff";
    
    $('#munkanapItems').append(`
        <div id="`+(lastid+1)+`" class="new_munkanap row">
            <button id="`+(lastid+1)+`" class="remove btn btn-danger" onclick="removeMunkanap(this.id)">-</button>
            <div class="col-xs-6 col-sm-2">
                <input type="text" placeholder="dátum" id="`+(lastid+1)+`" class="datepicker datum_mezo form-control" value="`+mainap+`">
            </div>
            <div class="col-xs-6 col-sm-2">
                <input type="number" min="0.5" max="12" step="0.5" id="`+(lastid+1)+`" class="munkaora form-control" placeholder="munkaóra">
            </div>
            <div class="col-xs-12 col-sm-6">
                <textarea rows="3" id="`+(lastid+1)+`" class="form-control" placeholder="megjegyzés"></textarea>
            </div>
        </div>
    `);

// bootstrap-datepicker modul:
// http://bootstrap-datepicker.readthedocs.io/en/latest/
$('.datepicker').datepicker({
    language: 'hu',
    autoclose:'true',
    todayBtn: 'true',
    todayHighlight: 'true'
});
} // addMunkanap

let new_munkanaps = [];
// [{id:1, datePiced:"2017.04.03",workedHour:5,comment:"mycomment",okToSend:true},{},{},...]
function collectMunkanaps() {
    //TODO összegyüjteni a munkanapokat egy objecteket tartalmazó tömbbe
    console.log("munkanapok összegyűjtése...");
}

function removeMunkanap(munkanapToRemove) {
    $("#"+munkanapToRemove+".new_munkanap").remove();
}
function sendForm() {
    console.log("sending form...");
    collectMunkanaps();
}


$(document).on('blur', '.munkaora', function() {
    // amit ide irunk kod, az akkor fut le ha a munkaora mezot elhagyja a user
    
    // https://jsfiddle.net/4ksywa6d/1/
    
    munkaoraMezo = parseFloat($(this).val());
    if ( Number.isFinite(munkaoraMezo) ) {
        if ( munkaoraMezo > 8 ) {
            $(this).val('8');
        } else if( munkaoraMezo < 0 ) {
            $(this).val('0');
        }
    } else {
        $(this).val('0');
    }
    
});

$(document).ready(function (){
    // ez akkor fut le miután betöltődik a weboldal böngészőbe
    addMunkanap(); 
});

// Firefox fix! https://bugzilla.mozilla.org/show_bug.cgi?id=1012818
$(function() {
    $("input[type='number']").on("click", function(){
        $(this).focus();
    });
});










