import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm35-33",
	localId: 33,

	// Card informations
	name: {
		en: "Plusle",
		fr: "Posipi",
	},

	hp: 70,

	type: [
		Type.LIGHTNING,
	],

	dexId: 311,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm35/33/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/33/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm35/33/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/33/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 18,
		name: "Tomokazu Komiya"
	},



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Tag Team Boost",
			fr: "Boost de Groupe",
		},
		text: {
			en: "If Minun is on your Bench, this attack does 50 more damage.",
			fr: "Si Négapi est sur votre Banc, cette attaque inflige 50 dégâts supplémentaires.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Shining Legends",
		code: "sm35"
	}
}

export default card

