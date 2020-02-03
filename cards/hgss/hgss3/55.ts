import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss3-55",
	localId: 55,

	// Card informations
	name: {
		en: "Makuhita",
		fr: "Makuhita",
	},

	hp: 70,

	type: [
		Type.FIGHTING,
	],

	dexId: 296,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/55/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/55/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/55/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/55/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 18,
		name: "Tomokazu Komiya"
	},



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Slap Down",
			fr: "Écraser",
		},
		text: {
			en: "Flip 2 coins. This attack does 20 damage plus 10 more damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque côté face.",
		},
		damage: 20
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Slap Push",
			fr: "Gifle",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "HS—Undaunted",
		code: "hgss3"
	}
}

export default card

