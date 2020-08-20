var currentDay = moment().format("dddd, MMM Do");


var date = document.createElement("p1")
date.innerHTML = currentDay
$("header").append(date)

$(".saveBtn").on("click", function () {
    console.log(this)

    var textArea = $(this).parent().siblings().find("textarea").val()
    console.log(textArea)

    var localSt = $(this).parent().siblings().find("textarea").attr("id")

    console.log(localSt)

    var task = {
        time: localSt,
        value: textArea
    }

    localStorage.setItem(localSt, textArea)

})

var task = localStorage.getItem("9")
if (task) {
    $("#9").val(task)
}

var rows = $('.row');

var currentTime = (moment().hour())


$(".row").each(function () {
    // var timeId = $(this).find('textarea').attr('id');
    var idInteger = parseInt(timeId)

    // console.log(idInteger)
    const $textarea = $(this).find("textarea");

    if (idInteger < currentTime) {
        $textarea.addClass(["past"]);
    }
    if (idInteger > currentTime) {
        $textarea.addClass(["future"]);
    }
    if (idInteger === currentTime) {
        $textarea.addClass(["present"]);
    }
});
