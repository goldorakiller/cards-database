import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "g1-32",
	localId: 32,

	// Card informations
	name: {
		en: "Slowpoke",
		fr: "Ramoloss",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 79,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/g1/32/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/g1/32/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/g1/32/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/g1/32/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 37,
		name: "Miki Tanaka"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Spacing Out",
			fr: "Trou d'Mémoire",
		},
		text: {
			en: "Flip a coin. If heads, heal 10 damage from this Pokémon.",
			fr: "Lancez une pièce. Si c'est face, soignez 10 dégâts à ce Pokémon.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC
		],
		name: {
			en: "Scavenge",
			fr: "Farfouille",
		},
		text: {
			en: "Discard a Psychic Energy attached to this Pokémon. If you do, put an Item card from your discard pile into your hand.",
			fr: "Défaussez une Énergie Psychic attachée à ce Pokémon. Dans ce cas, prenez une carte Objet dans votre pile de défausse et ajoutez-la à votre main.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Generations",
		code: "g1"
	}
}

export default card
