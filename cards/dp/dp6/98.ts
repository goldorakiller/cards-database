import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-98",
	localId: 98,

	// Card informations
	name: {
		en: "Gulpin",
		fr: "Gloupti",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 316,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/98/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/98/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/98/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/98/high.png",
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
			en: "Amnesia",
			fr: "Amnésie",
		},
		text: {
			en: "Choose 1 of the Defending Pokémon's attacks. That Pokémon can't use that attack during your opponent's next turn.",
			fr: "Choisissez 1 des attaques du Pokémon Défenseur. Il ne peut pas utiliser cette attaque lors du prochain tour de votre adversaire.",
		},
	},{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Gastro Acid",
			fr: "Suc Digestif",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+10"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
