import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex8-17",
	localId: 17,

	// Card informations
	name: {
		en: "Deoxys",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 386,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex8/17/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex8/17/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 60,
		name: "Hironobu Yoshida"
	},

	abilities: [{
		id: 43,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Form Change",
		},
		text: {
			en: "Once during your turn (before your attack), you may search your deck for another Deoxys and switch it with Deoxys. (Any cards attached to Deoxys, damage counters, Special Conditions, and effects on it are now on the new Pokémon.) If you do, put Deoxys on top of your deck. Shuffle your deck afterward. You can't use more than 1 Form Change Poké-Power each turn.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Energy Crush",
		},
		text: {
			en: "Does 10 damage plus 10 more damage for each Energy attached to all of your opponent's Pokémon.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Deoxys",
		code: "ex8"
	}
}

export default card
