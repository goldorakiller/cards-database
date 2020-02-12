import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-89",
	localId: 89,

	// Card informations
	name: {
		en: "Growlithe",
		fr: "Caninos",
	},

	hp: 70,

	type: [
		Type.FIRE,
	],

	dexId: 58,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/89/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/89/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/89/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/89/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Roar",
			fr: "Hurlement",
		},
		text: {
			en: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
			fr: "Votre adversaire échange le Pokémon Défenseur avec 1 des Pokémon de son Banc.",
		},
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Dig Claws",
			fr: "Creuse-griffe",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "+20"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
