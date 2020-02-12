import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-73",
	localId: 73,

	// Card informations
	name: {
		en: "Exeggcute",
		fr: "Noeunoeuf",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 102,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/73/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/73/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/73/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/73/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 136,
		name: "otumami"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Leech Seed",
			fr: "Vampigraine",
		},
		text: {
			en: "Heal 10 damage from this Pokémon.",
			fr: "Soignez 10 dégâts à ce Pokémon.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
