import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex7-42",
	localId: 42,

	// Card informations
	name: {
		en: "Dark Weezing",
	},

	hp: 80,

	type: [
		Type.GRASS,
		Type.DARKNESS,
	],

	dexId: 110,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex7/42/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex7/42/high.png",
		},
	},

	evolveFrom: {
		en: "Koffing",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},

	abilities: [{
		id: 1238,
		type: AbilityType.POKEBODY,
		name: {
			en: "Methane Leak",
		},
		text: {
			en: "As long as Dark Weezing is your Active Pokémon, put 1 damage counter on each Pokémon that remains Poisoned between turns.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Smog",
		},
		text: {
			en: "The Defending Pokémon is now Poisoned.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Darkness Charge",
		},
		text: {
			en: "Put 2 damage counters on Dark Weezing.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Team Rocket Returns",
		code: "ex7"
	}
}

export default card
