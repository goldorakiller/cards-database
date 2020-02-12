import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-51",
	localId: 51,

	// Card informations
	name: {
		en: "Carbink BREAK",
		fr: "Strassie TURBO",
	},

	hp: 110,

	type: [
		Type.FIGHTING,
	],

	dexId: 703,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/51/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/51/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/51/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/51/high.png",
		},
	},

	evolveFrom: {
		en: "Carbink",
		fr: "Strassie",
	},

	tags: [
		Tag.BREAK,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Diamond Gift",
			fr: "Règle des Évolutions TURBO",
		},
		text: {
			en: "Attach 2 Energy cards from your discard pile to 1 of your Fighting Pokémon.",
		},
		damage: 20
	},{
		cost: [
			Type.FIGHTING
		],
		name: {
			fr: "Cadeau de Diamant",
		},
		text: {
			fr: "Attachez 2 cartes Énergie de votre pile de défausse à l'un de vos Pokémon Fighting.",
		},
		damage: 20
	}],







	rarity: Rarity.RareBREAK,

	category: Category.POKEMON,

	set: {
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card
