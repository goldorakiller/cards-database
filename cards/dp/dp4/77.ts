import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp4-77",
	localId: 77,

	// Card informations
	name: {
		en: "Luvdisc",
		fr: "Lovdisc",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 370,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp4/77/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/77/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/77/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/77/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 114,
		name: "Motofumi Fujiwara"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Rendezvous",
			fr: "Rendezvous",
		},
		text: {
			en: "Reveal the top card of your deck and put it into your hand. If that card is a Pokémon, draw 2 cards.",
			fr: "Retournez la carte du dessus de votre deck et placez-la dans votre main. Si c'est un Pokémon, piochez 2 cartes.",
		},
	},{
		cost: [
			Type.WATER
		],
		name: {
			en: "Synchro Dance",
			fr: "Danse synchronisée",
		},
		text: {
			en: "If Luvdisc and the Defending Pokémon have the same amount of Energy attached to them, this attack does 10 damage plus 20 more damage.",
			fr: "Si Lovdisc et le Pokémon Défenseur possède le même nombre d'Énergies, cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Great Encounters",
		code: "dp4"
	}
}

export default card
