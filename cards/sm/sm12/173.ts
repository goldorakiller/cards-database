import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-173",
	localId: 173,

	// Card informations
	name: {
		en: "Zangoose",
		fr: "Mangriff",
	},

	hp: 100,

	type: [
		Type.COLORLESS,
	],

	dexId: 335,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/173/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/173/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/173/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/173/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 61,
		name: "tetsuya koizumi"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Corkscrew Punch",
			fr: "Poing Tire-Bouchon",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Brutal Edge",
			fr: "Tranche Brutale",
		},
		text: {
			en: "This attack does 10 more damage for each damage counter on your opponent's Active Pokémon.",
			fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur le Pokémon Actif de votre adversaire.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
