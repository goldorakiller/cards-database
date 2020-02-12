import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex1-7",
	localId: 7,

	// Card informations
	name: {
		en: "Gardevoir",
	},

	hp: 100,

	type: [
		Type.PSYCHIC,
	],

	dexId: 282,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex1/7/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex1/7/high.png",
		},
	},

	evolveFrom: {
		en: "Kirlia",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},

	abilities: [{
		id: 614,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Psy Shadow",
		},
		text: {
			en: "Once during your turn (before your attack), you may search your deck for a Psychic Energy card and attach it to 1 of your Pokémon. Put 2 damage counters on that Pokémon. Shuffle your deck afterward. This power can't be used if Gardevoir is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Energy Burst",
		},
		text: {
			en: "Does 10 damage times the total amount of Energy attached to Gardevoir and the Defending Pokémon.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Ruby & Sapphire",
		code: "ex1"
	}
}

export default card
