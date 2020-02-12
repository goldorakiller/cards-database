import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-42",
	localId: 42,

	// Card informations
	name: {
		en: "Hippowdon 4",
		fr: "Hippodocus  Niv. 52",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 450,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/42/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/42/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/42/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/42/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},

	abilities: [{
		id: 709,
		type: AbilityType.POKEBODY,
		name: {
			en: "Sand Armor",
			fr: "Armure de sable",
		},
		text: {
			en: "If Hippowdon has any Fighting Energy attached to it, any damage done to Hippowdon by attacks is reduced by 10 (after applying Weakness and Resistance).",
			fr: "Si  Hippodocus  possède de l'Énergie Fighting, tous dégâts qui lui sont infligés par des attaques sont réduits de 10 (après application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Bite and Crush",
			fr: "Mordre et écraser",
		},
		text: {
			en: "Flip 2 coins. This attack does 30 damage plus 10 more damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts plus 10 dégâts supplémentaires pour chaque face.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],

	resistances: [{
		type: Type.LIGHTNING,
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
