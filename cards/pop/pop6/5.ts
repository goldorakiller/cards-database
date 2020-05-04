import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pop6-5",
	localId: 5,

	// Card informations
	name: {
		en: "Rampardos",
	},

	hp: 120,

	type: [
		Type.FIGHTING,
	],

	dexId: 409,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pop/pop6/5/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pop/pop6/5/high",
		},
	},

	evolveFrom: {
		en: "Cherrim",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Kazuyuki Kano",



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Assurance",
		},
		text: {
			en: "As long as the Defending Pokémon's remaining HP is 60 or less, this attack's base damage is 60 instead of 30.",
		},
		damage: 30
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Hasty Headbutt",
		},
		text: {
			en: "Rampardos does 20 damage to itself. This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "+30"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "POP Series 6",
		code: "pop6"
	}
}

export default card
