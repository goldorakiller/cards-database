import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp5-44",
	localId: 44,

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
			en: "https://assets.tcgdex.net/en/dp/dp5/44/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/44/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp5/44/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/44/high.png",
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
		id: 44,
		name: "Kent Kanetsuna"
	},



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Ice Blade",
			fr: "Lame de glace",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 30 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Wash Over",
			fr: "Gros lavage",
		},
		text: {
			en: "Does 10 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Inflige 10 dégâts à 2 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Majestic Dawn",
		code: "dp5"
	}
}

export default card
