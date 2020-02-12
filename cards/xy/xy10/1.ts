import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-1",
	localId: 1,

	// Card informations
	name: {
		en: "Shuckle",
		fr: "Caratroc",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 213,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/1/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/1/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/1/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/1/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 24,
		name: "sui"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Hide a Berry",
			fr: "Cache Baie",
		},
		text: {
			en: "Draw 2 cards. Then, put a card from your hand on the bottom of your deck.",
			fr: "Piochez 2 cartes. Ensuite, mettez une carte de votre main en dessous de votre deck.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Wrap",
			fr: "Ligotage",
		},
		text: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card
