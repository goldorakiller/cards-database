import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex7-26",
	localId: 26,

	// Card informations
	name: {
		en: "Quagsire",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 195,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex7/26/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex7/26/high.png",
		},
	},

	evolveFrom: {
		en: "Wooper",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 37,
		name: "Miki Tanaka"
	},

	abilities: [{
		id: 295,
		type: AbilityType.POKEBODY,
		name: {
			en: "Saturation",
		},
		text: {
			en: "When you attach a Water Energy card from your hand to Quagsire, remove all Special Conditions and 2 damage counters from Quagsire.\"",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Hyper Pump",
		},
		text: {
			en: "Does 20 damage plus 20 more damage for each basic Energy card attached to Quagsire but not used to pay for this attack's Energy cost. You can't add more than 60 damage in this way.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Team Rocket Returns",
		code: "ex7"
	}
}

export default card
