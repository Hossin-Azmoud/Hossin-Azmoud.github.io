import { faGit, 
		faFigma, 
		faReact, 
		faSquareJs, 
		faNpm, 
		faPython, 
		faGolang, 
		faCss3Alt,
		faLinux,
		faSass,
		faVuejs
} from "@fortawesome/free-brands-svg-icons";


import { faCode, faDisplay } from "@fortawesome/free-solid-svg-icons";

const Experience = [
	{
		header: {h: "Front-end", icon: faCode},
		p: "Experienced with frameworks such as Reactjs and svelte for the creating the UI components and also experienced with css, sass, tailwind to style the application.",
		icons: [
			faCss3Alt, faReact, faNpm, faGit, faSquareJs, faSass, faVuejs
		] 
	}, {
		header: {h: "Back-end", icon: faCode},
		p: "Experienced with frameworks such as Flask, Express, and gin golang framework. And for the database I use SQL or mongodb.",
		icons: [
			faLinux, faGolang, faPython, faSquareJs, faNpm, faGit
		] 
	}, {
		header: {h: "Graphic Design", icon: faDisplay},
		p: "I am experienced in designing using multiple software such as Figma, adobe suite. I design interfaces, logos and edit any neccissary Graphical components such as icons, illustrations.",
		icons: [
			faFigma
		] 
	}
]

// For contact page

// work for work page and some for the main section.

const projects = {

}


/*
# header ICON
	{P}
	icon1 icon2 icon3
*/


export { Experience };