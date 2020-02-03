import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-39",
	localId: 39,

	// Card informations
	name: {
		en: "Frogadier",
		fr: "Croâporal",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 657,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/39/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/39/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/39/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/39/high.png",
		},
	},

	evolveFrom: {
		en: "Froakie",
		fr: "Grenousse",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 19,
		name: "Shin Nagasawa"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Water Duplicates",
			fr: "Duplicat'Eau",
		},
		text: {
			en: "Search your deck for up to 3 Frogadier and put them onto your Bench. Shuffle your deck afterward.",
			fr: "Cherchez jusqu'à 3 Croâporal dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck.",
		},
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card

