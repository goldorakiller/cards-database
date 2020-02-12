import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp4-9",
	localId: 9,

	// Card informations
	name: {
		en: "Swampert",
		fr: "Laggron",
	},

	hp: 130,

	type: [
		Type.WATER,
	],

	dexId: 260,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp4/9/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/9/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/9/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/9/high.png",
		},
	},

	evolveFrom: {
		en: "Marshtomp",
		fr: "Flobio",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},

	abilities: [{
		id: 87,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Wash Out",
			fr: "Partir au lavage",
		},
		text: {
			en: "As often as you like during your turn (before your attack), you may move a Water or Fighting Energy attached to 1 of your Benched Pokémon to your Active Pokémon. This power can't be used if Swampert is affected by a Special Condition.",
			fr: "Autant de fois que vous le voulez lors de votre tour (avant votre attaque), vous pouvez déplacer une Énergie Water ou Fighting attachée à 1 des Pokémon de votre Banc sur votre Pokémon Actif. Ce pouvoir ne peut pas être utilisé si Laggron est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hammer Arm",
			fr: "Matro-Poing",
		},
		text: {
			en: "Discard the top card from your opponent's deck.",
			fr: "Défaussez la carte du dessus du deck de votre adversaire.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "+30"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Great Encounters",
		code: "dp4"
	}
}

export default card
