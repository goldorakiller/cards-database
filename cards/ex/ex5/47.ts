import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex5-47",
	localId: 47,

	// Card informations
	name: {
		en: "Sealeo",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 364,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex5/47/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex5/47/high.png",
		},
	},

	evolveFrom: {
		en: "Spheal",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Super Icy Wind",
		},
		text: {
			en: "Does 10 damage to each of your opponent's Pokémon. This attack's damage isn't affected by Weakness or Resistance.",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Skull Bash",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Hidden Legends",
		code: "ex5"
	}
}

export default card
