function startGame() {
  document.getElementById("menu").style.display = "none";
  document.getElementById("game").style.display = "block";

  console.log("Web-Life started");

  launchEngine(); // sonra Xash bağlanacak
}

// 🔥 BURAYA XASH ENGINE BAĞLANACAK
function launchEngine() {
  console.log("Xash engine loading... (placeholder)");

  // ileride:
  // Module.canvas = document.getElementById("screen");
  // Module.run();
}
