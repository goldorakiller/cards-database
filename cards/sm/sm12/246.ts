import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-246",
	localId: 246,

	// Card informations
	name: {
		en: "Excadrill",
		fr: "Minotaupe",
	},

	hp: 140,

	type: [
		Type.FIGHTING,
	],

	dexId: 530,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/246/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/246/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/246/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/246/high.png",
		},
	},

	evolveFrom: {
		en: "Drilbur",
		fr: "Rototaupe",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Eleventh Hour Tackle",
			fr: "Tacle Désespéré",
		},
		text: {
			en: "If there are 3 or fewer cards in your deck, this attack does 150 more damage.",
			fr: "S’il y a 3 cartes ou moins dans votre deck, cette attaque inflige 150 dégâts supplémentaires.",
		},
		damage: 30
	},{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Drill Bazooka",
			fr: "Perceuse Bazooka",
		},
		text: {
			en: "Discard the top 4 cards of your deck.",
			fr: "Défaussez les 4 cartes du dessus de votre deck.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card

