let joy = document.getElementById("joystick");

let active = false;

joy.addEventListener("touchstart", () => {
  active = true;
});

joy.addEventListener("touchmove", (e) => {
  if (!active) return;

  let t = e.touches[0];
  console.log("MOVE:", t.clientX, t.clientY);
});

joy.addEventListener("touchend", () => {
  active = false;
});

document.getElementById("fireBtn").onclick = () => {
  console.log("FIRE");
};

document.getElementById("jumpBtn").onclick = () => {
  console.log("JUMP");
};
