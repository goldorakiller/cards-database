import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-10",
	localId: 10,

	// Card informations
	name: {
		en: "Ledian",
		fr: "Coxyclaque",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 166,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/10/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/10/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/10/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/10/high.png",
		},
	},

	evolveFrom: {
		en: "Ledyba",
		fr: "Coxy",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Swift",
			fr: "Météores",
		},
		text: {
			en: "This attack's damage isn't affected by Weakness, Resistance, or any other effects on your opponent's Active Pokémon.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance ou tout autre effet en action sur le Pokémon Actif de votre adversaire.",
		},
		damage: 30
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Comet Punch",
			fr: "Poing Comète",
		},
		text: {
			en: "Flip 4 coins. This attack does 40 damage for each heads.",
			fr: "Lancez 4 pièces. Cette attaque inflige 40 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
