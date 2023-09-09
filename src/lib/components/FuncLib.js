const getLinks = () => [...document.getElementsByClassName('LINK')];
const isEmpty = (s) => s.length === 0;
const isEmail = (s) => (s.includes("@"));
const isValidMsg = (s) => (s.length > 10);
const isAnyEmpty = (o) => Object.keys(o).map((key, i) => { return {IsEmpty: isEmpty(o[key]) || (o[key].length <= 4), index: i}}).filter((v) => v.IsEmpty);

const cp = (T) => {
	if('clipboard' in navigator){
		return navigator.clipboard.writeText(T)
	} else {
		return document.execCommand('copy', true, T)
	}
};

async function PostToApi(API, data) {
  	
  	const response = await fetch(API, {
	    method: 'POST', 
	    mode: 'cors', 
	    cache: 'no-cache', 
	    credentials: 'same-origin',
	    headers: {
	      'Content-Type': 'application/json',
	      'Access-Control-Allow-Origin': API

	    },
	    body: JSON.stringify(data) 
  	});

	return response;
}

const Notify = (Text, x, y) => {
	const E = document.createElement("p");
	E.setAttribute("class", "fixed text-sm font-semibold bg-transparent p-2 ShowTop rounded-md text-green-400 transition");
	
	E.style.top = `${y - 40}px`;
	E.style.left = `${x + 20}px`;
	E.textContent = Text;
	document.body.appendChild(E);
	
	setTimeout(() => {

		E.style.transform = "translateY(-10px)";
		E.style.opacity = "0";
		
		setTimeout(() => {
			document.body.removeChild(E);
		}, 2000);
		
	}, 2000);
}

const EffectNavButtons = (target) => {
	const EL = (target.target) ? target.target : target;
	if(EL){
		getLinks().map((v) => {
			if(v === EL) {
				v.classList.add("text-blue-400");
			} else if (v.textContent === EL.textContent) {
				console.log("Matched text.")
				v.classList.add("text-blue-400");
			} else {
				v.classList.remove("text-blue-400");
			}
		});
	}
}

export { 
	EffectNavButtons, 
	isEmpty, 
	isAnyEmpty,
	isEmail,
	isValidMsg,
	Notify,
	cp,
	PostToApi
};
