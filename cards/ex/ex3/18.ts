import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex3-18",
	localId: 18,

	// Card informations
	name: {
		en: "Ninjask",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 291,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex3/18/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex3/18/high.png",
		},
	},

	evolveFrom: {
		en: "Nincada",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 30,
		name: "Hajime Kusajima"
	},

	abilities: [{
		id: 108,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Loose Shell",
		},
		text: {
			en: "Once during your turn, when you play Ninjask from your hand to evolve 1 of your Pokémon, you may search your deck for Shedinja and put it onto your Bench. Treat the new Benched Pokémon as a Basic Pokémon. Shuffle your deck afterward.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Quick Touch",
		},
		text: {
			en: "You may switch Ninjask with 1 of your Benched Pokémon. If you do, you may move any number of Grass Energy cards attached to Ninjask to the new Active Pokémon.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Dragon",
		code: "ex3"
	}
}

export default card

