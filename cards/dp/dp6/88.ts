import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-88",
	localId: 88,

	// Card informations
	name: {
		en: "Chinchou",
		fr: "Loupio",
	},

	hp: 50,

	type: [
		Type.LIGHTNING,
	],

	dexId: 170,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/88/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/88/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/88/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/88/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 2,
		name: "Midori Harada"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Razor Fin",
			fr: "Aileron-rasoir",
		},
		damage: 10
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Aqua Spark",
			fr: "Aqua-étincelle",
		},
		text: {
			en: "If Chinchou has any Water Energy attached to it, this attack does 20 damage plus 10 more damage.",
			fr: "Si Loupio possède de l'Énergie Water, cette attaque inflige 20 dégâts plus 10 dégâts supplémentaires.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
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
