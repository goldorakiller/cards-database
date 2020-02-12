import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp2-47",
	localId: 47,

	// Card informations
	name: {
		en: "Dunsparce",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 206,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp2/47/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp2/47/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 2,
		name: "Midori Harada"
	},



	attacks: [{
		name: {
			en: "Snake Hook",
		},
		text: {
			en: "Draw a card.",
		},
	},{
		name: {
			en: "Bite and Run",
		},
		text: {
			en: "Switch Dunsparce with 1 of your Benched Pokémon.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+10"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Mysterious Treasures",
		code: "dp2"
	}
}

export default card
