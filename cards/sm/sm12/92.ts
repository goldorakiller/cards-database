import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-92",
	localId: 92,

	// Card informations
	name: {
		en: "Dragalge",
		fr: "Kravarech",
	},

	hp: 120,

	type: [
		Type.PSYCHIC,
	],

	dexId: 691,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/92/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/92/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/92/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/92/high.png",
		},
	},

	evolveFrom: {
		en: "Skrelp",
		fr: "Venalgue",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 2,
		name: "Midori Harada"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Poison Cultivation",
			fr: "Culture de Poison",
		},
		text: {
			en: "If your opponent's Active Pokémon is Poisoned, put 10 damage counters instead of 1 on that Pokémon between turns.",
			fr: "Si le Pokémon Actif de votre adversaire est Empoisonné, placez 10 marqueurs de dégâts au lieu d’un sur ce Pokémon-là entre chaque tour.",
		},
	},{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Sharp Fin",
			fr: "Aileron Aiguisé",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
