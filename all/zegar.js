function odliczanie()
	 {
	  let dzisiaj = new Date();
	  
	  let godziny = dzisiaj.getHours();
	  if (godziny<10) godzina = "0" + godziny;
	  
	  let minuty = dzisiaj.getMinutes();
	  if (minuty<10) minuty = "0" + minuty;
	  
	  let sekundy = dzisiaj.getSeconds();
	  if (sekundy<10) sekundy = "0" + sekundy;
	  
    document.getElementById("clock").innerHTML = godziny+":"+minuty+":"+sekundy;
	  
	  setTimeout("odliczanie()",1000);
	 }
	 
window.onload = odliczanie;