function getheatindex() {
    let temp = document.getElementById("heatt").value;
    let hum = document.getElementById("khour").value;

    temp = Number(temp);
    hum = Number(hum);

    if (temp === 0 && humidity === 0) {
        alert("Please enter values!");
        return;
    }

    let heatIn = temp + (0.33 * hum) - 4;

    let category = "";
    let status = "";

    if (heatIndex <= 27) {
        category = "cool";
    } 
    else if (heatIndex <= 32) {
        category = "warm";
    } 
    else if (heatIndex <= 37) {
        category = "hot";
    } 
    else if (heatIndex <= 41) {
        category = "veryhot";
    } 
    else {
        category = "extreme";
    }

    switch (category) {
        case "cool":
            status = "Comfortable / Cool";
            break;
        case "warm":
            status = "Warm";
            break;
        case "hot":
            status = "Hot";
            break;
        case "veryhot":
            status = "Very Hot / Caution";
            break;
        case "extreme":
            status = "Extreme Heat / Danger";
            break;
        default:
            status = "Unknown";
    }

    alert("Heat Index: " + heatIndex + "\nStatus: " + status);
}