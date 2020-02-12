import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp2-88",
	localId: 88,

	// Card informations
	name: {
		en: "Magby",
	},

	hp: 40,

	type: [
		Type.FIRE,
	],

	dexId: 240,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp2/88/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp2/88/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 2,
		name: "Midori Harada"
	},

	abilities: [{
		id: 23,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Baby Evolution",
		},
		text: {
			en: "Once during your turn (before your attack), you may put Magmar from your hand onto Magby (this counts as evolving Magby) and remove all damage counters from Magby.",
		}
	}],

	attacks: [{
		name: {
			en: "Scorch",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Burned.",
		},
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "+10"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Mysterious Treasures",
		code: "dp2"
	}
}

export default card
