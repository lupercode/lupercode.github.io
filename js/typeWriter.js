	var i = 0;
	//var txt = document.getElementsByClassName("typeWriter")[0].innerText;
	//var t = document.getElementsByClassName("typeWriter")[0].getAttribute('data-type');
	//var txt = Array(t);
	//var speed = document.getElementsByClassName("typeWriter")[0].getAttribute('data-period');
	//var txt = ["Desenvolvedor Front End", "Designer", "Consultor"];
	var txt = ["Soluções Linux", "Design Gráfico", "Desenvolvimento Web"];
	var speed = 120;

	typeWriter();
	
	function typeWriter() {
	var spell = txt[0];
		if (i < spell.length) {
	    	document.getElementsByClassName("typeWriter")[0].innerHTML += spell.charAt(i);
	    	i++;
	    	setTimeout(typeWriter, speed);
		}
		else {
				txt.shift();
				setTimeout(del, 700);
			}
	}

    function del() {
		if (i > 0){
    		var str = document.getElementsByClassName('typeWriter')[0].innerHTML; 
    		var res = str.substring(0, str.length - 1);
    		document.getElementsByClassName("typeWriter")[0].innerHTML = res;
			i--
			setTimeout(del, 40);
		}
			else if (txt.length == 0) {
					txt = ["Soluções Linux", "Design Gráfico", "Desenvolvimento Web"];
					setTimeout(typeWriter, 500);
				}
		else {
				setTimeout(typeWriter, 500);
			}
	}
