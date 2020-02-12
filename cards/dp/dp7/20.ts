import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-20",
	localId: 20,

	// Card informations
	name: {
		en: "Machamp",
		fr: "Machamp",
	},

	hp: 130,

	type: [
		Type.FIGHTING,
	],

	dexId: 68,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/20/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/20/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/20/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/20/high.png",
		},
	},

	evolveFrom: {
		en: "Machoke",
		fr: "Machopeur",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Take Out",
			fr: "Éliminer",
		},
		text: {
			en: "If the Defending Pokémon isn't an Evolved Pokémon, that Pokémon is Knocked Out instead of damaged by this attack.",
			fr: "Si le Pokémon  Défenseur n'est pas un Pokémon Évolué, ce Pokémon est mis K.O par cette attaque.",
		},
		damage: 40
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hurricane Punch",
			fr: "Poing ouragan",
		},
		text: {
			en: "Flip 4 coins. This attack does 30 damage times the number of heads.",
			fr: "Lancez 4 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de faces.",
		},
		damage: 30
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rage",
			fr: "Frénésie",
		},
		text: {
			en: "Does 60 damage plus 10 more damage for each damage counter on Machamp.",
			fr: "Inflige 60 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégât sur Mackogneur.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+30"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card
