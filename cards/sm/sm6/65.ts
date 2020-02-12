import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-65",
	localId: 65,

	// Card informations
	name: {
		en: "Pancham",
		fr: "Pandespiègle",
	},

	hp: 70,

	type: [
		Type.FIGHTING,
	],

	dexId: 674,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/65/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/65/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/65/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/65/high.png",
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



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Act Tough",
			fr: "Dur à Cuire",
		},
		text: {
			en: "If this Pokémon has any Darkness Energy attached to it, this attack does 30 more damage.",
			fr: "Si de l’Énergie Darkness est attachée à ce Pokémon, cette attaque inflige 30 dégâts supplémentaires.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
