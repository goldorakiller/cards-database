import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex7-2",
	localId: 2,

	// Card informations
	name: {
		en: "Dark Ampharos",
	},

	hp: 120,

	type: [
		Type.LIGHTNING,
		Type.DARKNESS,
	],

	dexId: 181,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex7/2/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex7/2/high.png",
		},
	},

	evolveFrom: {
		en: "Dark Flaaffy",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 131,
		name: "Emi Miwa"
	},

	abilities: [{
		id: 1232,
		type: AbilityType.POKEBODY,
		name: {
			en: "Darkest Impulse",
		},
		text: {
			en: "As long as Dark Ampharos is in play, whenever your opponent plays an Evolution card from his or her hand to evolve 1 of his or her Pokémon, put 2 damage counters on that Pokémon. You can't use more than 1 Darkest Impulse Poké-Body each turn.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Ram",
		},
		damage: 30
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Shock Bolt",
		},
		text: {
			en: "Discard all Lightning Energy attached to Dark Ampharos.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Team Rocket Returns",
		code: "ex7"
	}
}

export default card
