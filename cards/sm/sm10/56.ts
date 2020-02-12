import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-56",
	localId: 56,

	// Card informations
	name: {
		en: "Stunfisk",
		fr: "Limonde",
	},

	hp: 110,

	type: [
		Type.LIGHTNING,
	],

	dexId: 618,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/56/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/56/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/56/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/56/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 96,
		name: "sowsow"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Raging Thunder",
			fr: "Tonnerre Déchaîné",
		},
		text: {
			en: "This attack does 10 damage to 1 of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 10 dégâts à l’un de vos Pokémon de Banc. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 30
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Electric Trap",
			fr: "Piège Électrique",
		},
		text: {
			en: "This attack does 30 damage for each of your Pokémon that has any damage counters on it.",
			fr: "Cette attaque inflige 30 dégâts pour chacun de vos Pokémon ayant au moins un marqueur de dégâts.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
