import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "g1-RC13",
	localId: "RC13",

	// Card informations
	name: {
		en: "Jirachi",
		fr: "Jirachi",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 385,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/g1/RC13/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/g1/RC13/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/g1/RC13/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/g1/RC13/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 95,
		name: "kirisAki"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Wish",
			fr: "Vœu",
		},
		text: {
			en: "Search your deck for a card and put it into your hand. Shuffle your deck afterward.",
			fr: "Cherchez une carte dans votre deck puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Heart Sign",
			fr: "Signe de Cœur",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Generations",
		code: "g1"
	}
}

export default card
