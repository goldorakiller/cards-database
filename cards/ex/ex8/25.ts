import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex8-25",
	localId: 25,

	// Card informations
	name: {
		en: "Shiftry",
	},

	hp: 110,

	type: [
		Type.GRASS,
	],

	dexId: 275,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex8/25/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex8/25/high.png",
		},
	},

	evolveFrom: {
		en: "Nuzleaf",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},

	abilities: [{
		id: 790,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Fan Action",
		},
		text: {
			en: "Once during your turn (before your attack), you may switch 1 of the Defending Pokémon with 1 of your opponent's Benched Pokémon. Your opponent chooses the Benched Pokémon to switch. This power can't be used if Shiftry is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Stadium Power",
		},
		text: {
			en: "If there is any Stadium card in play, this attack does 50 damage plus 20 more damage.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
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

