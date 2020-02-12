import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp4-29",
	localId: 29,

	// Card informations
	name: {
		en: "Unown H",
		fr: "Zarbi H",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 201,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp4/29/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/29/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/29/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/29/high.png",
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
		id: 151,
		type: AbilityType.POKEPOWER,
		name: {
			en: "HEAL",
			fr: "HEAL",
		},
		text: {
			en: "Once during your turn (before your attack), if you have Unown H, Unown E, Unown A, and Unown L on your Bench, you may remove all Special Conditions from 1 of your Active Pokémon.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), si Zarbi H, Zarbi E, Zarbi A et Zarbi L se trouvent sur votre Banc, vous pouvez retirer à 1 de vos Pokémon Actifs tous ses États Spéciaux.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Hidden Power",
			fr: "Puissance cachée",
		},
		text: {
			en: "Discard a card from your hand. (If you can't discard a card from your hand, this attack does nothing.)",
			fr: "Défaussez une carte de votre main. (Si vous ne pouvez pas défausser de carte de votre main, cette attaque est sans effet.)",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Great Encounters",
		code: "dp4"
	}
}

export default card
