import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-85",
	localId: 85,

	// Card informations
	name: {
		en: "Piplup",
		fr: "Tiplouf",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 393,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/85/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/85/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/85/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/85/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Muddy Water",
			fr: "Ocroupi",
		},
		text: {
			en: "Does 10 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Inflige 10 dégâts à 1 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
		},
		damage: 10
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Pound",
			fr: "Écras'face",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
