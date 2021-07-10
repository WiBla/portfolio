const data = {
	trainings: [
		{
			id: 1,
			logo: 'training/W@C.jpg',
			date: '2018 - 2020',
			title: 'BAC+2',
			location: 'Web@cadémie by Epitech',
			locationLink: 'https://www.webacademie.org/',
			description: 'Développeur / Intégrateur web',
		},
	],
	experiences: [
		{
			id: 1,
			logo: 'experiences/Logo_ET9_Carré.png',
			date: "Dec. 2020 - Aujourd'hui",
			title: 'CDI',
			location: 'Europe Tech Group',
			locationLink: 'https://europe-tech-group.com/',
			subtitle: '127 Grand Rue, 67500 Haguenau',
			description: 'Développement React, C# et Dynamics Nav',
		},
		{
			id: 2,
			logo: 'experiences/Logo_ET9_Carré.png',
			date: 'Mars 2020 - Nov. 2020',
			title: 'Alternant',
			location: 'Europe Tech Group',
			locationLink: 'https://europe-tech-group.com/',
			subtitle: '127 Grand Rue, 67500 Haguenau',
			description: 'Développement Bootstrap, jQuery, C# et Dynamics Nav',
		},
	],
	skills: {
		frontEnd: {
			title: 'Front End',
			skills: [
				{ title: 'HTML5', logo: 'HTML5.png' },
				{ title: 'CSS3', logo: 'CSS3.png' },
				{ title: 'JavaScript', logo: 'JavaScript.jpg' },
				{ title: 'TypeScript', logo: 'TypeScript.png' },
				{ title: 'Bootstrap', logo: 'Bootstrap.png' },
				{ title: 'jQuery', logo: 'jQuery.png' },
				{ title: 'Vue', logo: 'Vue.png' },
				{ title: 'React', logo: 'React.png' },
				{ title: 'p5', logo: 'p5.png' },
			],
		},
		backEnd: {
			title: 'Back End',
			skills: [
				{ title: 'Node.js', logo: 'Node.jpg' },
				{ title: 'Deno', logo: 'Deno.png' },
				{ title: 'PHP', logo: 'php.jpg' },
				{ title: 'Symfony', logo: 'Symfony.png' },
				{ title: 'Laravel', logo: 'Laravel.png' },
				{ title: 'Prestashop', logo: 'Prestashop.png' },
				{ title: 'C#', logo: 'CSharp.png' },
				{ title: 'Dynamics NAV', logo: 'Dynamics NAV.png' },
				{ title: 'Go', logo: 'Go.png' },
				{ title: 'Firebase', logo: 'Firebase.png' },
			],
		},
		other: {
			title: 'Logiciels',
			skills: [
				{ title: 'Git', logo: 'Git.png' },
				// { title: 'Github', logo: 'Github.png' },
				{ title: 'Gitkraken', logo: 'Gitkraken.jpg' },
				{ title: 'Adobe XD', logo: 'Adobe XD.png' },
				{ title: 'Gimp', logo: 'Gimp.png' },
			],
		},
	},
	projects: [
		{
			id: 1,
			thumbnail: 'PreviouslyOn.png',
			title: 'PreviouslyOn',
			short_description:
				"Suivez vos séries préférées et découvrez en d'autres à l'aide de l'API Betaseries.",
			detailed_description: '',
			tags: ['W@C', 'PHP', 'Materialize', 'Betaseries'],
			creationDate: new Date(2019, 9, 3),
			url: '',
		},
		{
			id: 2,
			thumbnail: '',
			title: '',
			short_description: '',
			detailed_description: '',
			tags: ['W@C'],
			creationDate: new Date(),
			url: '',
		},
	],
}

export default data
