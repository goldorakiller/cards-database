import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo3-15",
	localId: 15,

	// Card informations
	name: {
		en: "Aerodactyl",
	},

	hp: 60,

	type: [
		Type.FIGHTING,
	],

	dexId: 142,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo3/15/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo3/15/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 119,
		name: "Shin-ichi Yoshida"
	},

	abilities: [{
		id: 715,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Prehistoric Memory",
		},
		text: {
			en: "Whenever an Evolved Pokémon attacks (even if it's your opponent's), it can use any attack from its Basic card or any Evolution card attached to it. It still has to pay for that attack's Energy cost. This power stops working while Aerodactyl is Asleep, Confused, or Paralyzed.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Fly",
		},
		text: {
			en: "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to Aerodactyl. If tails, this attack does nothing (not even damage).",
		},
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Neo Revelation",
		code: "neo3"
	}
}

export default card
