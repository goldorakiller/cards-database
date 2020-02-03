import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-12",
	localId: 12,

	// Card informations
	name: {
		en: "Alolan Marowak",
		fr: "Ossatueur d’Alola",
	},

	hp: 100,

	type: [
		Type.FIRE,
	],

	dexId: 105,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm4/12/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/12/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/12/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/12/high.png",
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
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		name: {
			en: "Dance of Flames",
			fr: "Flammes Dansantes",
		},
		text: {
			en: "For each Energy attached to your opponent's Pokémon, attach a Fire Energy card from your discard pile to your Pokémon in any way you like.",
			fr: "Pour chaque Énergie attachée au Pokémon de votre adversaire, attachez une carte Énergie Fire de votre pile de défausse à vos Pokémon de la manière que vous voulez.",
		},
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Burning Bonemerang",
			fr: "Osmerang Enflammé",
		},
		text: {
			en: "Flip 2 coins. This attack does 70 damage for each heads. If either of them is heads, your opponent's Active Pokémon is now Burned.",
			fr: "Lancez 2 pièces. Cette attaque inflige 70 dégâts multipliés par le nombre de côtés face. Si vous obtenez au moins un côté face, le Pokémon Actif de votre adversaire est maintenant Brûlé.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Crimson Invasion",
		code: "sm4"
	}
}

export default card

