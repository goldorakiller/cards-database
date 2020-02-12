import Set from '../../interfaces/Set'

const year = "2016"

const set: Set = {
	name: {
		en: `Macdonald's Collection ${year}`,
		fr: `Collection Macdonald ${year}`,
	},
	expansionCode: "mc",
	code: `${year}xy`,

	cardCount: {
		total: 12,
		official: 12
	},

	releaseDate: `${year}-08-20`,

	legal: {
		standard: false,
		expanded: false,
	}
}

export default set