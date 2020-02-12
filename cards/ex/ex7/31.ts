import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex7-31",
	localId: 31,

	// Card informations
	name: {
		en: "Dark Dragonair",
	},

	hp: 70,

	type: [
		Type.DARKNESS,
	],

	dexId: 148,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex7/31/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex7/31/high.png",
		},
	},

	evolveFrom: {
		en: "Dratini",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 131,
		name: "Emi Miwa"
	},

	abilities: [{
		id: 969,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Evolutionary Light",
		},
		text: {
			en: "Once during your turn (before your attack), if Dark Dragonair is your Active Pokémon, you may search your deck for an Evolution card. Show it to your opponent and put it into your hand. Shuffle your deck afterward. This power can't be used if Dark Dragonair is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.LIGHTNING
		],
		name: {
			en: "Dragon Rage",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.COLORLESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.GRASS,
		value: "-30"
	},{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Team Rocket Returns",
		code: "ex7"
	}
}

export default card
