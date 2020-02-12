import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-33",
	localId: 33,

	// Card informations
	name: {
		en: "Mothim",
		fr: "Papilord",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 414,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/33/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/33/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/33/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/33/high.png",
		},
	},

	evolveFrom: {
		en: "Burmy",
		fr: "Cheniti",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 97,
		name: "Kazuyuki Kano"
	},



	attacks: [{
		name: {
			en: "Silver Wind",
			fr: "Vent argenté",
		},
		text: {
			en: "During your next turn, if an attack does damage to the Defending Pokémon (after applying Weakness and Resistance), that attack does 40 more damage.",
			fr: "Lors de votre prochain tour, si une attaque inflige des dégâts au Pokémon Défenseur (après application de la Faiblesse et de la Résistance), cette attaque inflige 40 dégâts supplémentaires.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Raging Scales",
			fr: "Écailles enragées",
		},
		text: {
			en: "If Mothim has any damage counters on it, this attack does 30 damage plus 40 more damage.",
			fr: "Si Papilord possède des marqueurs de dégât, cette attaque inflige 30 dégâts plus 40 dégâts supplémentaires.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
