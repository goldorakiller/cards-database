import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex6-45",
	localId: 45,

	// Card informations
	name: {
		en: "Pidgeotto",
	},

	hp: 70,

	type: [
		Type.COLORLESS,
	],

	dexId: 17,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex6/45/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex6/45/high.png",
		},
	},

	evolveFrom: {
		en: "Pidgey",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 2,
		name: "Midori Harada"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Clutch",
		},
		text: {
			en: "The Defending Pokémon can't retreat until the end of your opponent's next turn.",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Cutting Wind",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "FireRed & LeafGreen",
		code: "ex6"
	}
}

export default card
