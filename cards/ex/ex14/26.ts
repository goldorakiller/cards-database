import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex14-26",
	localId: 26,

	// Card informations
	name: {
		en: "Pelipper δ",
	},

	hp: 70,

	type: [
		Type.LIGHTNING,
	],

	dexId: 279,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex14/26/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex14/26/high.png",
		},
	},

	evolveFrom: {
		en: "Wingull",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},

	abilities: [{
		id: 894,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Delta Transport",
		},
		text: {
			en: "Once during your turn (before your attack), if Pelipper is on your Bench, you may switch 1 of your Active Pokémon that has δ on its card with 1 of your Benched Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Supersonic",
		},
		text: {
			en: "The Defending Pokémon is now Confused.",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Wing Attack",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Crystal Guardians",
		code: "ex14"
	}
}

export default card
