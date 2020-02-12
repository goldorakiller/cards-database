import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-54",
	localId: 54,

	// Card informations
	name: {
		en: "Magneton",
		fr: "Magneton",
	},

	hp: 70,

	type: [
		Type.METAL,
	],

	dexId: 82,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/54/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/54/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/54/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/54/high.png",
		},
	},

	evolveFrom: {
		en: "Magnemite",
		fr: "Magneti",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tri Attack",
			fr: "Triplattaque",
		},
		text: {
			en: "Flip 3 coins. This attack does 20 damage times the number of heads.",
			fr: "Lancez 3 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
		},
		damage: 20
	},{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Magnetic Ray",
			fr: "Rayon magnétique",
		},
		text: {
			en: "Before doing damage, you may choose 1 of your opponent's Benched Pokémon that has any Energy attached to it and switch that Pokémon with 1 of the Defending Pokémon.",
			fr: "Avant d'infliger des dégâts, vous pouvez choisir 1 des Pokémon de Banc de votre adversaire possédant de l'Énergie et l'échanger avec 1 des Pokémon Défenseurs.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Diamond & Pearl",
		code: "dp1"
	}
}

export default card
