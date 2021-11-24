const model = {
	sectionId: "home",
	home: {
		header: {
			selectedLanguage: "english",
			changeLanguageBtnToggle: false,
			featherCount: "4",
			flameCount: "4",
			iconBtnToggle: false,
		},
		stats: {
			lessons: {
				read: "10",
				total: "120",
			},
			exercices: {
				done: "5",
				total: "42",
			},
			articles: {
				read: "5",
				total: "42",
			},
		},
		progression: {
			dailyChallenge: [
				{
					id: "1",
					completed: false,
					rewards: {
						feathers: "0",
						treasures: "3",
					},
				},
			],
			dailyObjectives: [
				{
					id: "1",
					progression: {
						count: "0",
						total: "2",
					},
				},
			],
			nextAward: {
				currentXP: "5",
				totalXP: "10",
			},
		},
		dashboard: {
			section: "recentActivities",
			recentActivities: {
				helpBtnToggle: false,
				activities: [
					{
						id: "1",
						progress: "100",
					},
				],
			},
			activitiesSummary: {
				helpBtnToggle: false,
				activities: [
					{
						id: "1",
					},
				],
			},
			suggestedLessons: {
				helpBtnToggle: false,
				lessons: [
					{
						id: "1",
					},
				],
			},
		},
		trainReading: {
			articles: [
				{
					id: "1",
				},
			],
			categories: [
				{
					id: "1",
				},
			],
			moreCategoriesBtnToggle: false,
		},
	},
	skillPage: {
		elementary: {
			locked: false,
			exercices: [
				{
					id: "1",
				},
			]
		},
		independant: {
			locked: false,
			exercices: [
				{
					id: "1",
				},
			]
		},
		advanced: {
			locked: false,
			exercices: [
				{
					id: "1",
				},
			]
		},
	},
	exercicePage: {
		exerciceId: "1",
		step: "1",
	},
	exercicePicker: {
		conjugations: [
			{
				id: "1",
				checked: true,
			},
			{
				id: "2",
				checked: false,
			},
			{
				id: "3",
				checked: true,
			},
		],
		themes: [
			{
				id: "1",
				checked: true,
			},
			{
				id: "2",
				checked: false,
			},
			{
				id: "3",
				checked: true,
			},
		],
		durations: {
			min5: true,
			min10: true,
			min15: false
		},
		/*OU
		selectedConjugation: 'Present perfect',
		selectedTheme: 'School',
		selectedDuration: '5',*/
		resultCount: 8,
		exercices: [
			{
				id: "1",
			}
		],
		pageNumber: 1,
	}
};

export default model;
