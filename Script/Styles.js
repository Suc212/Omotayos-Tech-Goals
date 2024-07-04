window.onload = function () {
  function updateTime() {
    const now = new Date();
    document.getElementById("time").innerText = now.toUTCString();
    document.getElementById("day").innerText = now.toLocaleDateString("en-US", {
      weekday: "long",
    });
  }

  updateTime();
  setInterval(updateTime, 1000);
};
