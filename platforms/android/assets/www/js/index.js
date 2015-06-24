var resultDiv;

document.addEventListener("deviceready", init, false);
function init() {
    document.querySelector("#startScan").addEventListener("touchend", startScan, false);
    resultDiv = document.querySelector("#results");
   // resultDiv = document.querySelector("#loadpage");
}

function startScan() {

    cordova.plugins.barcodeScanner.scan(
        function (result) {
            var str = "Connect to bar merda"
            var s = "Result: " + result.text + "<br/>";
            //var s = "Result: " + result.text + "<br/>" +
            //"Format: " + result.format + "<br/>" +
            //"Cancelled: " + result.cancelled;
            var result = str.link("http://www.google.it")
            resultDiv.innerHTML = result;
//        document.getElementById("loadpage").innerHTML = "Gooooo";
        },
        function (error) {
            alert("Scanning failed: " + error);
        }
    );

}
