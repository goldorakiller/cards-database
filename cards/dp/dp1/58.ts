import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-58",
	localId: 58,

	// Card informations
	name: {
		en: "Prinplup",
		fr: "Prinplouf",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 394,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/58/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/58/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/58/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/58/high.png",
		},
	},

	evolveFrom: {
		en: "Piplup",
		fr: "Tiplouf",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Aqua Shower",
			fr: "Aqua-douche",
		},
		text: {
			en: "Does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Inflige 10 dégâts à chacun des Pokémon de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
		},
	},{
		cost: [
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Brine",
			fr: "Saumure",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon that has any damage counters on it. This attack does 40 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Choisissez 1 des Pokémon de votre adversaire possédant des marqueurs de dégât. Cette attaque lui inflige 40 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
		},
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Diamond & Pearl",
		code: "dp1"
	}
}

export default card

