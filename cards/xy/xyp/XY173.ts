import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY173",
	localId: "XY173",

	// Card informations
	name: {
		en: "Volcanion-EX",
	},

	hp: 180,

	type: [
		Type.FIRE,
		Type.WATER,
	],

	dexId: 721,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY173/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY173/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},

	abilities: [{
		id: 527,
		type: AbilityType.TALENT,
		name: {
			en: "Steam Up",
		},
		text: {
			en: "Once during your turn (before your attack), you may discard a Fire Energy card from your hand. If you do, during this turn, your Basic Fire Pokémon's attacks do 30 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Volcanic Heat",
		},
		text: {
			en: "This Pokémon can't attack during your next turn.",
		},
		damage: 130
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card

