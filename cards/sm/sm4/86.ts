import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-86",
	localId: 86,

	// Card informations
	name: {
		en: "Cinccino",
		fr: "Pashmilla",
	},

	hp: 90,

	type: [
		Type.COLORLESS,
	],

	dexId: 573,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm4/86/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/86/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/86/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/86/high.png",
		},
	},

	evolveFrom: {
		en: "Minccino",
		fr: "Chinchidou",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 112,
		name: "0313"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Amazing Plea",
			fr: "Requête Incroyable",
		},
		text: {
			en: "Choose 2 cards from your discard pile. Then, ask your opponent if you may put them into your hand. If yes, put those cards into your hand. If no, this attack does 80 damage to your opponent's Active Pokémon.",
			fr: "Choisissez 2 cartes dans votre pile de défausse. Ensuite, demandez à votre adversaire si vous pouvez les mettre dans votre main. Si oui, placez ces cartes dans votre main. Si non, cette attaque inflige 80 dégâts au Pokémon Actif de votre adversaire.",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Crimson Invasion",
		code: "sm4"
	}
}

export default card
