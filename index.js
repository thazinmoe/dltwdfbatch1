let display = document.getElementById('display');

	let buttons = Array.form(document.getElementByClassName('button'));
	button.map(button =>{
		button.addEventListener('click', (e)=>{
			switch(e.targe.innerText){
				case 'C':
				display.innerText = " ";
				break;
				case '=' :
				try{
					display.innerText= eval(display.innerText);
				}catch{
					display.innertext = "Error"
				}
				break;
				case '<-':
				if (display.innerText){
					display.innerText= display.innerText.slice(0,-1);
				}
				break;
				default:
				display.innerText+= e.target.innerText;
			}
		});
	});
	
