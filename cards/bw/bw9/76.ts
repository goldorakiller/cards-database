import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw9-76",
	localId: 76,

	// Card informations
	name: {
		en: "Deino",
		fr: "Solochi",
	},

	hp: 60,

	type: [
		Type.DARKNESS,
	],

	dexId: 633,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw9/76/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/76/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw9/76/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/76/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 15,
		name: "Naoki Saito"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Slam",
			fr: "Souplesse",
		},
		text: {
			en: "Flip 2 coins. This attack does 20 damage times the number of heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Plasma Freeze",
		code: "bw9"
	}
}

export default card
