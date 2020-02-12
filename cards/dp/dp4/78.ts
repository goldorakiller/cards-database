import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp4-78",
	localId: 78,

	// Card informations
	name: {
		en: "Makuhita",
		fr: "Makuhita",
	},

	hp: 60,

	type: [
		Type.FIGHTING,
	],

	dexId: 296,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp4/78/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/78/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/78/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/78/high.png",
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
			en: "Punch",
			fr: "Koud'poing",
		},
		damage: 10
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Arm Thrust",
			fr: "Cogne",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing. If heads, discard an Energy card attached to the Defending Pokémon.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque est sans effet. Si c'est face, défaussez une carte Énergie attachée au Pokémon Défenseur.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+10"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Great Encounters",
		code: "dp4"
	}
}

export default card
