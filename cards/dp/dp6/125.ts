import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-125",
	localId: 125,

	// Card informations
	name: {
		en: "Tentacool",
		fr: "Tentacool",
	},

	hp: 50,

	type: [
		Type.WATER,
	],

	dexId: 72,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/125/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/125/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/125/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/125/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Crystal Barrier",
			fr: "Barrière de cristal",
		},
		text: {
			en: "Flip a coin. If heads, prevent all effects of an attack, including damage, done to Tentacool during your opponent's next turn.",
			fr: "Lancez une pièce. Si c'est face, prévenez tous les effets d'une attaque, dégâts inclus, infligés à Tentacool lors du prochain tour de votre adversaire.",
		},
	},{
		cost: [
			Type.WATER
		],
		name: {
			en: "Mysterious Beam",
			fr: "Rayon mystérieux",
		},
		text: {
			en: "Flip a coin. If heads, discard an Energy card attached to the Defending Pokémon.",
			fr: "Lancez une pièce. Si c'est face, défaussez une carte Énergie attachée au Pokémon Défenseur.",
		},
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
