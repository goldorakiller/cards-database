import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex11-36",
	localId: 36,

	// Card informations
	name: {
		en: "Ditto",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 132,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex11/36/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex11/36/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 45,
		name: "Yuka Morii"
	},

	abilities: [{
		id: 46,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Duplicate",
		},
		text: {
			en: "Once during your turn (before your attack), you may search your deck for another Ditto and switch it with Ditto. (Any cards attached to Ditto, damage counters, Special Conditions, and effects on it are now on the new Pokémon.) If you do, put Ditto on top of your deck. Shuffle your deck afterward. You can't use more than 1 Duplicate Poké-Power each turn.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Toxic",
		},
		text: {
			en: "The Defending Pokémon is now Poisoned. Put 2 damage counters instead of 1 on the Defending Pokémon between turns.",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Delta Species",
		code: "ex11"
	}
}

export default card
