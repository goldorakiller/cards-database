import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-32",
	localId: 32,

	// Card informations
	name: {
		en: "Kyogre",
		fr: "Kyogre",
	},

	hp: 100,

	type: [
		Type.WATER,
	],

	dexId: 382,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/32/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/32/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/32/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/32/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 44,
		name: "Kent Kanetsuna"
	},



	attacks: [{
		name: {
			en: "Drizzle",
			fr: "Crachin",
		},
		text: {
			en: "Choose up to 2 basic Water Energy cards from your hand and attach them to 1 of your Pokémon.",
			fr: "Choisissez jusqu'à 2 cartes Énergie de base Water de votre main et attachez-les à 1 de vos Pokémon.",
		},
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "High Tide",
			fr: "Marée haute",
		},
		text: {
			en: "Discard 2 Water Energy attached to Kyogre. This attack does 20 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Défaussez 2 Énergies Water attachées à Kyogre. Cette attaque inflige 20 dégâts à chacun des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
