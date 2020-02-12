import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-104",
	localId: 104,

	// Card informations
	name: {
		en: "Regirock V",
		fr: "Regirock V",
	},

	hp: 220,

	type: [
		Type.FIGHTING,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/104/low.png",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/104/low.png",
		}
	},

	evolveFrom: {},

	tags: [
		Tag.V,
	],

	illustrator: {
		id: 24,
		name: "PLANETA Tsuji"
	},



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Raging Hammer",
			fr: "Marteau Rageur",
		},
		text: {
			en: "This attack does 10 more damage for each damage counter on this Pokémon.",
			fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts sur ce Pokémon.",
		},
		damage: "30+"
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Rocky Tackle",
			fr: "Tacle Rocailleux",
		},
		text: {
			en: "This Pokémon also does 30 damage to itself.",
			fr: "Ce Pokémon s’inflige aussi 30 dégâts.",
		},
		damage: 190
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareV,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card