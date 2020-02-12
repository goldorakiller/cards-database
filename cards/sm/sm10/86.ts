import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-86",
	localId: 86,

	// Card informations
	name: {
		en: "Dugtrio",
		fr: "Triopikeur",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 51,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/86/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/86/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/86/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/86/high.png",
		},
	},

	evolveFrom: {
		en: "Diglett",
		fr: "Taupiqueur",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 48,
		name: "Akira Komayama"
	},



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Home Ground",
			fr: "À Domicile",
		},
		text: {
			en: "If you have any Stadium card in play, this attack does 60 more damage.",
			fr: "Si vous avez une carte Stade en jeu, cette attaque inflige 60 dégâts supplémentaires.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
