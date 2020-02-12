import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw5-29",
	localId: 29,

	// Card informations
	name: {
		en: "Empoleon",
	},

	hp: 140,

	type: [
		Type.WATER,
	],

	dexId: 395,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw5/29/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw5/29/high.png",
		},
	},

	evolveFrom: {
		en: "Prinplup",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 15,
		name: "Naoki Saito"
	},

	abilities: [{
		id: 620,
		type: AbilityType.TALENT,
		name: {
			en: "Diving Draw",
		},
		text: {
			en: "Once during your turn (before your attack), you may discard a card from your hand. If you do, draw 2 cards.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Attack Command",
		},
		text: {
			en: "Does 10 damage times the number of Pokémon in play (both yours and your opponent's).",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Dark Explorers",
		code: "bw5"
	}
}

export default card
