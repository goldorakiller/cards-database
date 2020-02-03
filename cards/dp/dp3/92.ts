import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-92",
	localId: 92,

	// Card informations
	name: {
		en: "Lotad",
		fr: "Nénupiot",
	},

	hp: 50,

	type: [
		Type.WATER,
	],

	dexId: 270,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/92/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/92/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/92/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/92/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 62,
		name: "Saya Tsuruta"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Water Sport",
			fr: "Tourniquet",
		},
		text: {
			en: "If Lotad has less Energy attached to it than the Defending Pokémon, this attack does 10 damage plus 20 more damage.",
			fr: "Si Nénupiot possède moins d'Énergie que le Pokémon Défenseur, cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires.",
		},
		damage: 10
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Ram",
			fr: "Collision",
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
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card

