import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-60",
	localId: 60,

	// Card informations
	name: {
		en: "Probopass",
		fr: "Tarinorme",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 476,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/60/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/60/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/60/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/60/high.png",
		},
	},

	evolveFrom: {
		en: "Nosepass",
		fr: "Tarinor",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Stealth Rock",
			fr: "Piège de Roc",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 30 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Hyper Beam",
			fr: "Ultralaser",
		},
		text: {
			en: "Flip a coin. If heads, discard an Energy card attached to the Defending Pokémon.",
			fr: "Lancez une pièce. Si c'est face, défaussez une carte Énergie attachée au Pokémon Défenseur.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "+20"
	}],



	retreat: 3,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card

