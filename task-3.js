function checkForSpam(message) {
    if (message.toLowerCase().includes("spam")) {
        return true;
    } else if (message.toLowerCase().includes("sale")) {
        return true;
    }else {
        return false;
    }
}