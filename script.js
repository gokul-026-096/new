<script>
function generateOutput() {
    let serialNumber = document.getElementById("serialNumber").value;
    if (serialNumber.trim() === "") {
        alert("Please enter a valid serial number.");
        return;
    }
    let result = Math.random() < 0.5 ? "BIG" : "SMALL";
    document.getElementById("output").innerText = "Output: " + result;
}
</script>