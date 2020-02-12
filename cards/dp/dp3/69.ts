import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-69",
	localId: 69,

	// Card informations
	name: {
		en: "Unown N",
		fr: "Zarbi N",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 201,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/69/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/69/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/69/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/69/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 94,
		name: "Daisuke Ito"
	},

	abilities: [{
		id: 1062,
		type: AbilityType.POKEPOWER,
		name: {
			en: "NOD",
			fr: "Non-oui",
		},
		text: {
			en: "Once during your turn (before your attack), if you have Unown N, Unown O, and Unown D on your Bench, you may ask your opponent to take a Prize card. If he or she does, you take a Prize card. If he or she doesn't, draw a card.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), si Zarbi N, Zarbi O et Zarbi D sont sur votre Banc, vous pouvez demander à votre adversaire de récolter une carte Récompense. Vous récoltez alors une carte Récompense. S'il ou elle choisit de ne pas en récolter, vous piochez une carte.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Hidden Power",
			fr: "Puissance cachée",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Burned.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Brûlé.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
