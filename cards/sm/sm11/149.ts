import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-149",
	localId: 149,

	// Card informations
	name: {
		en: "Dragonair",
		fr: "Draco",
	},

	hp: 90,

	type: [
		Type.DRAGON,
	],

	dexId: 148,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/149/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/149/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/149/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/149/high.png",
		},
	},

	evolveFrom: {
		en: "Dratini",
		fr: "Minidraco",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 39,
		name: "Sanosuke Sakuma"
	},



	attacks: [{
		cost: [
			Type.WATER,
			Type.LIGHTNING
		],
		name: {
			en: "Twister",
			fr: "Ouragan",
		},
		text: {
			en: "Flip 2 coins. For each heads, discard an Energy from your opponent's Active Pokémon. If both of them are tails, this attack does nothing.",
			fr: "Lancez 2 pièces. Pour chaque côté face, défaussez une Énergie du Pokémon Actif de votre adversaire. Si vous obtenez 2 côtés pile, cette attaque ne fait rien.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
