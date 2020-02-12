import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-51",
	localId: 51,

	// Card informations
	name: {
		en: "Malamar",
		fr: "Sepiatroce",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 687,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/51/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/51/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/51/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/51/high.png",
		},
	},

	evolveFrom: {
		en: "Inkay",
		fr: "Sepiatop",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 70,
		name: "You Iribi"
	},

	abilities: [{
		id: 1144,
		type: AbilityType.TALENT,
		name: {
			en: "Psychic Recharge",
			fr: "Recharge Psy",
		},
		text: {
			en: "Once during your turn (before your attack), you may attach a Psychic Energy card from your discard pile to 1 of your Benched Pokémon.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie Psychic de votre pile de défausse à l’un de vos Pokémon de Banc.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Psychic Sphere",
			fr: "Sphère Psy",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
