import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp5-20",
	localId: 20,

	// Card informations
	name: {
		en: "Glaceon",
		fr: "Givrali",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 471,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp5/20/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/20/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp5/20/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/20/high.png",
		},
	},

	evolveFrom: {
		en: "Eevee",
		fr: "Evoli",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Ice Shot",
			fr: "Coup glacial",
		},
		text: {
			en: "Does 10 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Inflige 10 dégâts à 1 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
		},
		damage: 30
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Icy Wind",
			fr: "Vent glacé",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Asleep.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Endormi.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Majestic Dawn",
		code: "dp5"
	}
}

export default card
