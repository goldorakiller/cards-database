import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-88",
	localId: 88,

	// Card informations
	name: {
		en: "Purugly G",
		fr: "Chaffreux ",
	},

	hp: 90,

	type: [
		Type.COLORLESS,
	],

	dexId: 432,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/88/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/88/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/88/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/88/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
		Tag.SP,
	],

	illustrator: {
		id: 84,
		name: "Ryota Saito"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Chip Off",
			fr: "Grignoter",
		},
		text: {
			en: "If your opponent has 6 or more cards in his or her hand, discard a number of cards without looking until your opponent has 5 cards left in his or her hand.",
			fr: "Si votre adversaire possède plus de 6 cartes en main, défaussez des cartes sans regarder jusqu'à ce qu'il ne reste à votre adversaire que 5 cartes en main.",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Poor Sleep",
			fr: "Sommeil agité",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 50 damage plus 30 more damage and Purugly is now Asleep.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 50 dégâts plus 30 dégâts supplémentaires et Chaffreux  est maintenant Endormi.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card

