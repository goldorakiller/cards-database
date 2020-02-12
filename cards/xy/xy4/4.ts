import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-4",
	localId: 4,

	// Card informations
	name: {
		en: "Yanmega",
		fr: "Yanmega",
	},

	hp: 110,

	type: [
		Type.GRASS,
	],

	dexId: 469,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/4/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/4/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/4/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/4/high.png",
		},
	},

	evolveFrom: {
		en: "Yanma",
		fr: "Yanma",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Windfall",
			fr: "Rafale de Vent",
		},
		text: {
			en: "Shuffle your hand into your deck. Then, draw 6 cards.",
			fr: "Mélangez votre main avec votre deck. Ensuite, piochez 6 cartes.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Surprise Strike",
			fr: "Frappe Surprise",
		},
		text: {
			en: "If this Pokémon was on the Bench and became an Active Pokémon this turn, this attack does 50 more damage.",
			fr: "Si ce Pokémon était sur le Banc et est devenu un Pokémon Actif pendant ce tour, cette attaque inflige 50 dégâts supplémentaires.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Phantom Forces",
		code: "xy4"
	}
}

export default card
