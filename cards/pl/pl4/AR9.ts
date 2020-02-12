import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl4-AR9",
	localId: "AR9",

	// Card informations
	name: {
		en: "Arceus",
		fr: "Arceus",
	},

	hp: 90,

	type: [
		Type.METAL,
	],

	dexId: 493,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl4/AR9/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl4/AR9/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl4/AR9/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl4/AR9/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 20,
		name: "TOKIYA"
	},



	attacks: [{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Metal Barrier",
			fr: "Barrière métallique",
		},
		text: {
			en: "Prevent all effects of attacks, including damage, done to Arceus by Pokémon LV.X during your opponent's next turn.",
			fr: "Prévenez tous les effets d'attaques, dégâts inclus, infligés à Arceus par des Pokémon NIV.X lors du prochain tour de votre adversaire.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Arceus",
		code: "pl4"
	}
}

export default card
