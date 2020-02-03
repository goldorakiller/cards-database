import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-141",
	localId: 141,

	// Card informations
	name: {
		en: "Gardevoir",
		fr: "Gardevoir",
	},

	hp: 130,

	type: [
		Type.FAIRY,
	],

	dexId: 282,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/141/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/141/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/141/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/141/high.png",
		},
	},

	evolveFrom: {
		en: "Kirlia",
		fr: "Kirlia",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 161,
		name: "Ryota Murayama"
	},



	attacks: [{
		cost: [
			Type.FAIRY
		],
		name: {
			en: "Brilliant Search",
			fr: "Recherche Brillante",
		},
		text: {
			en: "Search your deck for up to 3 cards and put them into your hand. Then, shuffle your deck.",
			fr: "Cherchez jusqu’à 3 cartes dans votre deck et ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.FAIRY,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sensitive Ray",
			fr: "Rayon Sensible",
		},
		text: {
			en: "If you played a Supporter card from your hand during this turn, this attack does 90 more damage.",
			fr: "Si vous avez joué une carte Supporter de votre main pendant ce tour, cette attaque inflige 90 dégâts supplémentaires.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card

