import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-157",
	localId: 157,

	// Card informations
	name: {
		en: "Smeargle",
		fr: "Queulorior",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 235,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/157/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/157/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/157/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/157/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Stunning Likeness",
			fr: "Ressemblance Frappante",
		},
		text: {
			en: "Your opponent reveals their hand. You may use the effect of a Supporter card you find there as the effect of this attack.",
			fr: "Votre adversaire dévoile sa main. Vous pouvez utiliser l’effet d’une carte Supporter que vous y trouvez en tant qu’effet de cette attaque.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Tail Smash",
			fr: "Éclate-Queue",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c’est pile, cette attaque ne fait rien.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
