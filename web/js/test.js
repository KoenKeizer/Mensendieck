				var a1 = "";
				var a2 = "";
				var a3 = "";

				var q1 = 0;
				var yes = 0;

				function yesclick1() {
					q1++;
					yes++;
					if(q1 == 1) {
						document.getElementById("q1").innerHTML = '2. Heb je pijn in de regio van je schouder of nek?';
					}
					if(q1 == 2) {
						document.getElementById("q1").innerHTML = '3. Heb je pijn tijdens het gebruik van een iPad, telefoon of computer?';
					}
					if(q1 == 3) {
						document.getElementById("q1").innerHTML = '4. Heb je last van je knieen, enkels of heupen tijdens of na het sporten?';
					}
					if(q1 == 4) {
						document.getElementById("q1").innerHTML = '5. Heb je hoofdpijn, spanning of slaap je slecht?';
					}
					if(q1 == 5) {
						document.getElementById("q1").innerHTML = '6. Ben je onzeker in groepen?';
					}
					if(q1 == 6) {
						document.getElementById("q1").innerHTML = '7. Vind jij je houding niet mooi, stoer, chill of relaxed?';
					}
					if (q1 >= 7) {
						if(yes == 0) {
							document.getElementById("q1").innerHTML = 'Je bent nu klaar met de test!<br><br> Je houding is waarschijnlijk wel OK! Wil je het toch zeker weten doe dan alsnog een GRATIS houdingscheck!';
				 			document.getElementById("buttons").innerHTML = '';
				 		}

				 		if(yes >= 1) {
				 			document.getElementById("q1").innerHTML = 'Je bent nu klaar met de test!<br><br> Je houding is waarschijnlijk niet optimaal. Wil je het beste uit jezelf halen dan is het zinvol om je houding eens te laten bekijken door de oefentherapeut.';
				 			document.getElementById("buttons").innerHTML = '';
					 		}

				 		if(yes >= 3) {
				 			document.getElementById("q1").innerHTML = 'Je bent nu klaar met de test!<br><br> Je houding is waarschijnlijk matig tot slecht. Een bezoek aan de oefentherapeut voor adviezen en houdingsverbetering is een absolute MUST en een investering in je toekomst!';
				 			document.getElementById("buttons").innerHTML = '';
				 		}
					}
				}

				function noclick1() {
					q1++;
					if(q1 == 1) {
						document.getElementById("q1").innerHTML = '2. Heb je pijn in de regio van je schouder of nek?';
					}
					if(q1 == 2) {
						document.getElementById("q1").innerHTML = '3. Heb je pijn tijdens het gebruik van een iPad, telefoon of computer?';
					}
					if(q1 == 3) {
						document.getElementById("q1").innerHTML = '4. Heb je last van je knieen, enkels of heupen tijdens of na het sporten?';
					}
					if(q1 == 4) {
						document.getElementById("q1").innerHTML = '5. Heb je hoofdpijn, spanning of slaap je slecht?';
					}
					if(q1 == 5) {
						document.getElementById("q1").innerHTML = '6. Ben je onzeker in groepen?';
					}
					if(q1 == 6) {
						document.getElementById("q1").innerHTML = '7. Vind jij je houding niet mooi, stoer, chill of relaxed?';
					}
					if(q1 >= 7) {
						if(yes == 0) {
							document.getElementById("q1").innerHTML = 'Je bent nu klaar met de test!<br><br> Je houding is waarschijnlijk wel OK! Wil je het toch zeker weten doe dan alsnog een GRATIS houdingscheck!';
							document.getElementById("buttons").innerHTML = '';
				 		}

				 		if(yes >= 1) {
				 			document.getElementById("q1").innerHTML = 'Je bent nu klaar met de test!<br><br> Je houding is waarschijnlijk niet optimaal. Wil je het beste uit jezelf halen dan is het zinvol om je houding eens te laten bekijken door de oefentherapeut.';
				 			document.getElementById("buttons").innerHTML = '';
				 		}

				 		if(yes >= 3) {
				 			document.getElementById("q1").innerHTML = 'Je bent nu klaar met de test!<br><br> Je houding is waarschijnlijk matig tot slecht. Een bezoek aan de oefentherapeut voor adviezen en houdingsverbetering is een absolute MUST en een investering in je toekomst!';
				 			document.getElementById("buttons").innerHTML = '';
				 		}
					}
				}