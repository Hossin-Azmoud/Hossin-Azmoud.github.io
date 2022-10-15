



const getLinks = () => [...document.getElementsByClassName('LINK')];



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
	
export { EffectNavButtons };