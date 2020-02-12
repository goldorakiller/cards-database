import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-67",
	localId: 67,

	// Card informations
	name: {
		en: "Raichu",
		fr: "Raichu",
	},

	hp: 120,

	type: [
		Type.LIGHTNING,
	],

	dexId: 26,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/67/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/67/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/67/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/67/high.png",
		},
	},

	evolveFrom: {
		en: "Pikachu",
		fr: "Pikachu",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 164,
		name: "AKIRA EGAWA"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Nuzzle",
			fr: "Frotte-Frimousse",
		},
		text: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
		},
	},{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Powerful Spark",
			fr: "Étincelle Puissante",
		},
		text: {
			en: "This attack does 20 damage times the amount of Lightning Energy attached to all of your Pokémon.",
			fr: "Cette attaque inflige 20 dégâts multipliés par le nombre d’Énergies Lightning attachées à tous vos Pokémon.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
