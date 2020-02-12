import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-86",
	localId: 86,

	// Card informations
	name: {
		en: "Regigigas",
		fr: "Regigigas",
	},

	hp: 130,

	type: [
		Type.COLORLESS,
	],

	dexId: 486,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/86/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/86/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/86/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/86/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 27,
		name: "kawayoo"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Daunt",
			fr: "Découragement",
		},
		text: {
			en: "During your opponent's next turn, any damage done by attacks from the Defending Pokémon is reduced by 40 (before applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, tous les dégâts infligés par des attaques du Pokémon Défenseur sont réduits de 40 (avant application de la Faiblesse et de la Résistance).",
		},
		damage: 80
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Heavy Impact",
			fr: "Gros Impact",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Phantom Forces",
		code: "xy4"
	}
}

export default card
