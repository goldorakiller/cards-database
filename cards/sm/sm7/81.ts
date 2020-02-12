import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-81",
	localId: 81,

	// Card informations
	name: {
		en: "Groudon",
		fr: "Groudon",
	},

	hp: 130,

	type: [
		Type.FIGHTING,
	],

	dexId: 383,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/81/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/81/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/81/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/81/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Wreck",
			fr: "Anéantissement",
		},
		text: {
			en: "If there is any Stadium card in play, this attack does 50 more damage. Then, discard that Stadium card.",
			fr: "S’il y a une carte Stade en jeu, cette attaque inflige 50 dégâts supplémentaires. Ensuite, défaussez la carte Stade.",
		},
		damage: 50
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Ground Slash",
			fr: "Tranch’Sol",
		},
		text: {
			en: "Discard an Energy from this Pokémon.",
			fr: "Défaussez une Énergie de ce Pokémon.",
		},
		damage: 130
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
