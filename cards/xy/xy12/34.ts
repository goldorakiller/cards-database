import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy12-34",
	localId: 34,

	// Card informations
	name: {
		en: "Gyarados",
		fr: "Léviator",
	},

	hp: 130,

	type: [
		Type.WATER,
	],

	dexId: 130,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy12/34/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/34/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy12/34/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/34/high.png",
		},
	},

	evolveFrom: {
		en: "Magikarp",
		fr: "Magicarpe",
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
			Type.WATER,
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Bubble Beam",
			fr: "Bulles d’O",
		},
		text: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
		},
		damage: 50
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Dragon Rage",
			fr: "Draco-Rage",
		},
		text: {
			en: "Flip 2 coins. If either of them is tails, this attack does nothing.",
			fr: "Lancez 2 pièces. Si vous obtenez au moins un côté pile, cette attaque ne fait rien.",
		},
		damage: 180
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Evolutions",
		code: "xy12"
	}
}

export default card
