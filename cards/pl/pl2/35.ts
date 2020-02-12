import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-35",
	localId: 35,

	// Card informations
	name: {
		en: "Vespiquen 4",
		fr: "Apireine  Niv. 50",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 416,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/35/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/35/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/35/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/35/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},

	abilities: [{
		id: 392,
		type: AbilityType.POKEBODY,
		name: {
			en: "Royal Gain",
			fr: "Gain royal",
		},
		text: {
			en: "When you attach a Grass Energy card from your hand to Vespiquen , remove 1 damage counter from Vespiquen .",
			fr: "Lorsque vous attachez une carte Énergie Grass à Apireine , retirez-lui 1 marqueur de dégât.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Leaf Needle",
			fr: "Feuille-aiguille",
		},
		text: {
			en: "Flip a coin for each Grass Energy attached to Vespiquen . This attack does 30 damage plus 20 more damage for each heads.",
			fr: "Lancez une pièce pour chaque Énergie Grass attachée à Apireine . Cette attaque inflige 30 dégâts plus 20 dégâts supplémentaires pour chaque face.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card
