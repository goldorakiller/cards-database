import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-54",
	localId: 54,

	// Card informations
	name: {
		en: "Whiscash 4",
		fr: "Barbicha  Niv. 50",
	},

	hp: 80,

	type: [
		Type.FIGHTING,
	],

	dexId: 340,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/54/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/54/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/54/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/54/high.png",
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



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Sleep Pulse",
			fr: "Pouls dodo",
		},
		text: {
			en: "The Defending Pokémon is now Asleep.",
			fr: "Le Pokémon Défenseur est maintenant Endormi.",
		},
		damage: 10
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Earthquake",
			fr: "Séisme",
		},
		text: {
			en: "Does 10 damage to each of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Inflige 10 dégâts à chacun de vos Pokémon de Banc. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card
