var xmlhttp = new XMLHttpRequest();
if(!xmlhttp)
alert("Error 404  :P");
/*function soronous()
{
	var s= getElementById("songload");
	s.innerHTML= "<audio autoplay= "+"autoplay"+">
    <source src="+"s.mp3"+" type="+"audio/mpeg"+" />
  Your browser does not support the audio element.
</audio>"*/

function validate() {
	//alert("Can't connect to server");
	if(xmlhttp) {
		try {
			alert("Can't connect to server1");
			xmlhttp.open("GET", "http://localhost/test.txt", true);
			xmlhttp.onreadystatechange = handleRequestStateChange;
			xmlhttp.send(null);

		}
		catch(e) {
			alert("Can't connect to server2");
		}
    }
}

function handleRequestStateChange() {
	alert("Can't connect to server3");
	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			alert("just there");
			document.getElementById("1024").innerHTML = "haha";
	}
}

function allowDrop(ev)
{
	ev.preventDefault();
}

function drag(ev)
{
	ev.dataTransfer.setData("Text",ev.target.id);
}

function drop(ev)
{
	ev.preventDefault();
	var data=ev.dataTransfer.getData("Text");
	ev.target.appendChild(document.getElementById(data));
}