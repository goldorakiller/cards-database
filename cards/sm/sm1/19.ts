import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-19",
	localId: 19,

	// Card informations
	name: {
		en: "Steenee",
		fr: "Candine",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 762,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/19/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/19/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/19/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/19/high.png",
		},
	},

	evolveFrom: {
		en: "Bounsweet",
		fr: "Croquine",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 3,
		name: "Mizue"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Sweet Scent",
			fr: "Doux Parfum",
		},
		text: {
			en: "Heal 30 damage from 1 of your Pokémon.",
			fr: "Soignez 30 dégâts à l’un de vos Pokémon.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Stomp",
			fr: "Écrasement",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 more damage.",
			fr: "Lancez une pièce. Si c’est face, cette attaque inflige 20 dégâts supplémentaires.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
