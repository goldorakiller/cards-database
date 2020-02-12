import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex14-16",
	localId: 16,

	// Card informations
	name: {
		en: "Combusken",
	},

	hp: 80,

	type: [
		Type.FIGHTING,
	],

	dexId: 256,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex14/16/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex14/16/high.png",
		},
	},

	evolveFrom: {
		en: "Torchic",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 29,
		name: "Suwama Chiaki"
	},



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Focus Energy",
		},
		text: {
			en: "During your next turn, Combusken's High Jump Kick attack's base damage is 70.",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "High Jump Kick",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Crystal Guardians",
		code: "ex14"
	}
}

export default card
