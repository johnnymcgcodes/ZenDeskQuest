function startSettingUp() {
  const storyDiv = document.getElementById("story");
  storyDiv.innerHTML = `<p>You start dragging out your Xbox, finding cables, and trying to remember how to connect everything for multiplayer. Do you search online for help or try to figure it out yourself?</p>
    <button onclick="searchOnline()">Search Online</button>
    <button onclick="figureItOut()">Figure It Out</button>`;
}

function searchOnline() {
  document.getElementById("story").innerHTML =
    "<p>You find a helpful guide online and follow the steps to set up your LAN party successfully. Friends are impressed!</p>";
}

function figureItOut() {
  document.getElementById("story").innerHTML =
    "<p>After some trial and error, you manage to set everything up just as the first guest arrives. It's game time!</p>";
}
