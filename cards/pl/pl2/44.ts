import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-44",
	localId: 44,

	// Card informations
	name: {
		en: "Lairon",
		fr: "Galegon Niv. 37",
	},

	hp: 80,

	type: [
		Type.METAL,
	],

	dexId: 305,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/44/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/44/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/44/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/44/high.png",
		},
	},

	evolveFrom: {
		en: "Aron",
		fr: "Galekid",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 22,
		name: "Yukiko Baba"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Heavy Metal",
			fr: "Heavy Métal",
		},
		text: {
			en: "Flip a coin for each Metal Energy attached to Lairon. This attack does 10 damage plus 20 more damage for each heads.",
			fr: "Lancez une pièce pour chaque Énergie Metal attachée à Galegon. Cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires pour chaque face.",
		},
		damage: 10
	},{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Granite Head",
			fr: "Tête de granit",
		},
		text: {
			en: "During your opponent's next turn, any damage done to Lairon by attacks is reduced by 10 (after applying Weakness and Resistance).",
			fr: "Lors du prochain tour de votre adversaire, tous dégâts infligés à Galegon par des attaques sont réduits de 10 (après application de la Faiblesse et de la Résistance).",
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
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card
