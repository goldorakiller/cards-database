import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-31",
	localId: 31,

	// Card informations
	name: {
		en: "Infernape",
		fr: "Simiabraz",
	},

	hp: 110,

	type: [
		Type.FIRE,
	],

	dexId: 392,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/31/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/31/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/31/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/31/high.png",
		},
	},

	evolveFrom: {
		en: "Monferno",
		fr: "Chimpenfeu",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Rushing Flames",
			fr: "Flammes dévorantes",
		},
		text: {
			en: "Discard as many Fire Energy as you like attached to your Pokémon in play. Flip a coin for each Energy card you discarded. This attack does 80 damage times the number of heads.",
			fr: "Défaussez autant d'Énergies Fire attachées à vos Pokémon en jeu que vous voulez. Lancez une pièce pour chaque carte Énergie défaussée. Cette attaque inflige 80 dégâts multipliés par le nombre de faces.",
		},
		damage: 80
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rage",
			fr: "Frénésie",
		},
		text: {
			en: "Does 30 damage plus 10 more damage for each damage counter on Infernape.",
			fr: "Inflige 30 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégât sur Simiabraz.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "+30"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
