import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-242",
	localId: 242,

	// Card informations
	name: {
		en: "Mewtwo & Mew-GX",
	},

	hp: 270,

	type: [
		Type.PSYCHIC,
	],

	dexId: 150,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/242/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/242/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],



	abilities: [{
		id: 814,
		type: AbilityType.TALENT,
		name: {
			en: "Perfection",
		},
		text: {
			en: "This Pokémon can use the attacks of any Pokémon-GX or Pokémon-EX on your Bench or in your discard pile. (You still need the necessary Energy to use each attack.)",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Miraculous Duo GX",
		},
		text: {
			en: "If this Pokémon has at least 1 extra Energy attached to it (in addition to this attack's cost), heal all damage from all of your Pokémon. (You can't use more than 1 GX attack in a game.)",
		},
		damage: 200
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
