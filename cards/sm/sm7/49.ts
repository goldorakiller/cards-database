import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-49",
	localId: 49,

	// Card informations
	name: {
		en: "Chinchou",
		fr: "Loupio",
	},

	hp: 60,

	type: [
		Type.LIGHTNING,
	],

	dexId: 170,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/49/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/49/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/49/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/49/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 43,
		name: "Aya Kusube"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Pound",
			fr: "Écras’Face",
		},
		damage: 10
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Spark",
			fr: "Étincelle",
		},
		text: {
			en: "This attack does 10 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 10 dégâts à 2 des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
