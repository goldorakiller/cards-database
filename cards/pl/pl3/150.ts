import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-150",
	localId: 150,

	// Card informations
	name: {
		en: "Zapdos",
		fr: "Electhor",
	},

	hp: 70,

	type: [
		Type.LIGHTNING,
	],

	dexId: 145,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/150/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/150/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/150/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/150/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 73,
		name: "Toshinao Aoki"
	},



	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.LIGHTNING
		],
		name: {
			en: "Lightning Burn",
			fr: "Brûlure éclairante",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) If tails, Zapdos does 30 damage to itself.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts à 1 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.) Si c'est pile, Electhor s'inflige 30 dégâts.",
		},
		damage: 30
	}],



	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],

	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
