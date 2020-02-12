import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-23",
	localId: 23,

	// Card informations
	name: {
		en: "Golem 4",
		fr: "Grolem  Niv. 52",
	},

	hp: 110,

	type: [
		Type.FIGHTING,
	],

	dexId: 76,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/23/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/23/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/23/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/23/high.png",
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
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rage",
			fr: "Frénésie",
		},
		text: {
			en: "Does 20 damage plus 10 more damage for each damage counter on Golem .",
			fr: "Inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégât sur Grolem ",
		},
		damage: 20
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Double-edge",
			fr: "Damoclès",
		},
		text: {
			en: "Golem does 60 damage to itself.",
			fr: "Grolem  s'inflige 60 dégâts.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-20"
	}],

	retreat: 4,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card
