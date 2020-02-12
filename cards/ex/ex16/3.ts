import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex16-3",
	localId: 3,

	// Card informations
	name: {
		en: "Armaldo",
	},

	hp: 120,

	type: [
		Type.FIGHTING,
	],

	dexId: 348,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex16/3/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex16/3/high.png",
		},
	},

	evolveFrom: {
		en: "Anorith",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Rock Blast",
		},
		text: {
			en: "Discard up to 5 Fighting Energy cards attached to Armaldo. For each Energy card you discarded, choose an opponent's Pokémon in play and this attack does 20 damage to those Pokémon. (You may choose the same Pokémon more than once.) This attack's damage isn't affected by Weakness or Resistance.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Mach Claw",
		},
		text: {
			en: "This attack's damage isn't affected by Resistance.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Power Keepers",
		code: "ex16"
	}
}

export default card
