import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-84",
	localId: 84,

	// Card informations
	name: {
		en: "Deino",
		fr: "Solochi",
	},

	hp: 60,

	type: [
		Type.DRAGON,
	],

	dexId: 633,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/84/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/84/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/84/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/84/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 29,
		name: "Suwama Chiaki"
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
			en: "Your opponent switches his or her Active Pokémon with 1 of his or her Benched Pokémon.",
			fr: "Votre adversaire échange son Pokémon Actif avec l’un de ses Pokémon de Banc.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.DARKNESS
		],
		name: {
			en: "Headbutt Bounce",
			fr: "Culbute Surprise",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card

