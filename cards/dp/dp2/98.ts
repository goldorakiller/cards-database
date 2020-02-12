import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp2-98",
	localId: 98,

	// Card informations
	name: {
		en: "Shinx",
	},

	hp: 60,

	type: [
		Type.LIGHTNING,
	],

	dexId: 403,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp2/98/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp2/98/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 104,
		name: "Lee HyunJung"
	},



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Plasma",
		},
		text: {
			en: "Flip a coin. If heads, search your discard pile for a Lightning Energy card and attach it to Shinx.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+10"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],



	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Mysterious Treasures",
		code: "dp2"
	}
}

export default card
