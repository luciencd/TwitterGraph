var inputBar = document.getElementById("twitterInput");

wage.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
        validate(e);
    }
});

function validate(e) {
    var text = e.value;
    var outputlist = document.getElementById("outputlist");
    outputlist.html(text);

    //validation of the input...
}
alert("works");
