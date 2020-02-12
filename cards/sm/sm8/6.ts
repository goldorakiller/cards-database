import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-6",
	localId: 6,

	// Card informations
	name: {
		en: "Chikorita",
		fr: "Germignon",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 152,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/6/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/6/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/6/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/6/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 96,
		name: "sowsow"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Mini Drain",
			fr: "Mini-Assèchement",
		},
		text: {
			en: "Heal 10 damage from this Pokémon.",
			fr: "Soignez 10 dégâts à ce Pokémon.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
