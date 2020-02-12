import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-27",
	localId: 27,

	// Card informations
	name: {
		en: "M Gyarados-EX",
		fr: "M-Léviator-EEX",
	},

	hp: 240,

	type: [
		Type.WATER,
	],

	dexId: 130,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/27/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/27/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/27/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/27/high.png",
		},
	},

	evolveFrom: {
		en: "Gyarados-EX",
		fr: "Léviator-eEX",
	},

	tags: [
		Tag.MEGA,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Blast Geyser",
			fr: "Geyser Explosif",
		},
		text: {
			en: "You may do 20 more damage for each Water Energy attached to this Pokémon. If you do, discard the top 2 cards of your deck.",
			fr: "Vous pouvez infliger 20 dégâts supplémentaires pour chaque Énergie Water attachée à ce Pokémon. Dans ce cas, défaussez les 2 cartes du dessus de votre deck.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card
