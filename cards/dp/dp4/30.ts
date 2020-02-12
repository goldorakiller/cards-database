import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp4-30",
	localId: 30,

	// Card informations
	name: {
		en: "Wailord",
		fr: "Wailord",
	},

	hp: 200,

	type: [
		Type.WATER,
	],

	dexId: 321,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp4/30/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/30/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/30/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/30/high.png",
		},
	},

	evolveFrom: {
		en: "Wailmer",
		fr: "Wailmer",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},

	abilities: [{
		id: 847,
		type: AbilityType.POKEBODY,
		name: {
			en: "Sleeping Pulse",
			fr: "Pouls dormant",
		},
		text: {
			en: "As long as Wailord remains Asleep between turns, remove 1 damage counter from Wailord.",
			fr: "Tant que Wailord est Endormi entre deux tours, retirez-lui 1 marqueur de dégât.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Sink Deep",
			fr: "Couler",
		},
		text: {
			en: "If Wailord has any damage counters on it, Wailord is now Asleep.",
			fr: "Si Wailord possède des marqueurs de dégât, il est maintenant Endormi.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Great Encounters",
		code: "dp4"
	}
}

export default card
