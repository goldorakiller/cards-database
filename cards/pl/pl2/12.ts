import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-12",
	localId: 12,

	// Card informations
	name: {
		en: "Roserade GL",
		fr: "Roserade  Niv. 22",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 407,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/12/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/12/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/12/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/12/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 40,
		name: "Kanako Eo"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Poison Bind",
			fr: "Entrave toxik",
		},
		text: {
			en: "The Defending Pokémon is now Poisoned and can't retreat during your opponent's next turn.",
			fr: "Le Pokémon Défenseur est maintenant Empoisonné et ne peut pas battre en retraite lors du prochain tour de votre adversaire.",
		},
		damage: 10
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Long Whip",
			fr: "Long fouet",
		},
		text: {
			en: "If the Defending Pokémon is affected by any Special Conditions, you may do 30 damage to any 1 Benched Pokémon instead. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Si le Pokémon Défenseur est affecté par n'importe lequel des États Spéciaux, vous pouvez infliger 30 dégâts à n'importe lequel des Pokémon de Banc à la place. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card
