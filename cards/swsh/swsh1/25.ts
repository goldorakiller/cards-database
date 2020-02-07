import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-25",
	localId: 25,

	// Card informations
	name: {
		en: "Victini V",
		fr: "Victini V",
	},

	hp: 190,

	type: [
		Type.FIRE,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/25/low.png",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/25/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/25/high.png",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/25/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.V,
	],

	illustrator: {
		id: 24,
		name: "PLANETA Tsuji"
	},



	attacks: [{
		name: {
			en: "V rule",
			fr: "Règle V",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Spreading Flames",
			fr: "Flammes Rampantes",
		},
		text: {
			en: "Attach up to 3 Fire Energy cards from your discard pile to your Pokémon in any way you like.",
			fr: "Attachez jusqu’à 3 cartes Énergie Fire de votre pile de défausse à vos Pokémon comme il vous plaît.",
		},
	},{
		cost: [
			Type.FIRE,
			Type.FIRE
		],
		name: {
			en: "Energy Burst",
			fr: "Explosion d’Énergie",
		},
		text: {
			en: "This attack does 30 damage for each Energy attached to both Active Pokémon.",
			fr: "Cette attaque inflige 30 dégâts pour chaque Énergie attachée aux deux Pokémon Actifs.",
		},
		damage: "30×"
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareV,

	category: Category.POKEMON,

	set: {
		name: "undefined",
		code: "swsh1"
	}
}

export default card

