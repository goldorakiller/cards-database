import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw1-6",
	localId: 6,

	// Card informations
	name: {
		en: "Serperior",
		fr: "Majaspic",
	},

	hp: 130,

	type: [
		Type.GRASS,
	],

	dexId: 497,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw1/6/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/6/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw1/6/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/6/high.png",
		},
	},

	evolveFrom: {
		en: "Servine",
		fr: "Lianaja",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},

	abilities: [{
		id: 372,
		type: AbilityType.TALENT,
		name: {
			en: "Royal Heal",
		},
		text: {
			en: "At any time between turns, heal 10 damage from each of your Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Leaf Tornado",
			fr: "Phytomixeur",
		},
		text: {
			en: "Move as many Grass Energy attached to your Pokémon to your other Pokémon in any way you like.",
			fr: "Déplacez autant d’Énergies Grass attachées à vos Pokémon que vous voulez vers vos autres Pokémon, de la manière que vous voulez.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Black & White",
		code: "bw1"
	}
}

export default card

