import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "neo2-36",
	localId: 36,

	// Card informations
	name: {
		en: "Yanma",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 193,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo2/36/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo2/36/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Shockwave",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 10 damage to each of your opponent's Pokémon. Don't apply Weakness and Resistance. Then, if your opponent has any Benched Pokémon, he or she chooses 1 of them and switches it with the Defending Pokémon.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.GRASS
		],
		name: {
			en: "Swift",
		},
		text: {
			en: "This attack's damage isn't affected by Weakness, Resistance, Pokémon Powers, or any other effects on the Defending Pokémon.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Neo Discovery",
		code: "neo2"
	}
}

export default card
