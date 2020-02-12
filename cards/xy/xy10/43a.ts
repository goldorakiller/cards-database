import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-43",
	localId: 43,

	// Card informations
	name: {
		en: "Regirock-EX",
	},

	hp: 180,

	type: [
		Type.FIGHTING,
	],

	dexId: 377,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/43a/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/43a/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 116,
		name: "PLANETA"
	},

	abilities: [{
		id: 881,
		type: AbilityType.TALENT,
		name: {
			en: "Regi Power",
		},
		text: {
			en: "The attacks of your Fighting Pokémon (excluding Regirock-EX) do 10 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Bedrock Press",
		},
		text: {
			en: "During your opponent's next turn, any damage done to this Pokémon by attacks is reduced by 20 (after applying Weakness and Resistance).",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card
