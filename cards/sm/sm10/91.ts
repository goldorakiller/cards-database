import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-91",
	localId: 91,

	// Card informations
	name: {
		en: "Marowak",
		fr: "Ossatueur",
	},

	hp: 110,

	type: [
		Type.FIGHTING,
	],

	dexId: 105,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/91/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/91/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/91/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/91/high.png",
		},
	},

	evolveFrom: {
		en: "Cubone",
		fr: "Osselait",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 95,
		name: "kirisAki"
	},



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Bone Rush",
			fr: "Charge-Os",
		},
		text: {
			en: "Flip a coin until you get tails. This attack does 50 damage for each heads.",
			fr: "Lancez une pièce jusqu’à ce que vous obteniez un côté pile. Cette attaque inflige 50 dégâts pour chaque côté face.",
		},
		damage: 50
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Assault Boom",
			fr: "Dégât d’Assaut",
		},
		text: {
			en: "If your opponent's Active Pokémon has a Pokémon Tool card attached to it, this attack does 70 more damage.",
			fr: "Si une carte Outil Pokémon est attachée au Pokémon Actif de votre adversaire, cette attaque inflige 70 dégâts supplémentaires.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card

