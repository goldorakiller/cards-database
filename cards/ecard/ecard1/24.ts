import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ecard1-24",
	localId: 24,

	// Card informations
	name: {
		en: "Poliwrath",
	},

	hp: 100,

	type: [
		Type.WATER,
	],

	dexId: 62,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/24/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard1/24/high.png",
		},
	},

	evolveFrom: {
		en: "Poliwhirl",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 45,
		name: "Yuka Morii"
	},

	abilities: [{
		id: 319,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Plunge",
		},
		text: {
			en: "Once during your turn (before you attack), if Poliwrath is on your Bench, you may flip a coin. If heads, take all Energy cards attached to your Active Pokémon, if any, and attach them to Poliwrath. Then switch Poliwrath with your Active Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Water Punch",
		},
		text: {
			en: "Flip a number of coins equal to the amount of W Energy cards attached to Poliwrath. This attack does 40 damage plus 10 more damage for each heads.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Expedition Base Set",
		code: "ecard1"
	}
}

export default card
