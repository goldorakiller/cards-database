import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-42",
	localId: 42,

	// Card informations
	name: {
		en: "Magneton",
		fr: "Magneton",
	},

	hp: 80,

	type: [
		Type.METAL,
	],

	dexId: 82,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/42/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/42/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/42/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/42/high.png",
		},
	},

	evolveFrom: {
		en: "Magnemite",
		fr: "Magneti",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 30,
		name: "Hajime Kusajima"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Magnetic Resonance",
			fr: "Résonance magnétique",
		},
		text: {
			en: "If you have a Stadium card in play, this attack does 20 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Si vous avez une carte Stade en jeu, cette attaque infllige 20 dégâts à 2 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
		},
		damage: 20
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Magnetic Release",
			fr: "Relâche magnétique",
		},
		text: {
			en: "Does 40 damage plus 10 more damage for each Energy attached to the Defending Pokémon.",
			fr: "Inflige 40 dégâts plus 10 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Défenseur.",
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

	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card
