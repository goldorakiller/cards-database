import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex13-53",
	localId: 53,

	// Card informations
	name: {
		en: "Sharpedo δ",
	},

	hp: 70,

	type: [
		Type.FIGHTING,
	],

	dexId: 319,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex13/53/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex13/53/high.png",
		},
	},

	evolveFrom: {
		en: "Carvanha",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Brush Aside",
		},
		text: {
			en: "If Sharpedo has any Holon Energy cards attached to it, choose 1 card from your opponent's hand without looking and discard it.",
		},
		damage: 30
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Swift Turn",
		},
		text: {
			en: "If the Defending Pokémon has Fighting Resistance, this attack does 50 damage plus 30 more damage.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Holon Phantoms",
		code: "ex13"
	}
}

export default card
