$(function() {
	console.log("DOM READY...");
	
	loadCitations();
	
});

function loadCitations() {
	$.getJSON( "citations/citations.json", function( data ) {
		console.log(data[0]);
		
		var i = getRandomInt(0, data.length);
		
		console.log(data[i].texte);
		console.log(data[i].auteur);
		$("#citations .txt").text(data[i].texte);
		$("#citations .auteur").text(data[i].auteur);
		$("#citations").css("opacity","1");
		setInterval(function() {
			var i = getRandomInt(0, data.length);
		
		console.log(data[i].texte);
		console.log(data[i].auteur);
		$("#citations .txt").text(data[i].texte);
		$("#citations .auteur").text(data[i].auteur);
		$("#citations").css("opacity","1");
		}, 5000)
		
	});
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}