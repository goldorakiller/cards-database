import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy2-53",
	localId: 53,

	// Card informations
	name: {
		en: "Stunky",
		fr: "Moufouette",
	},

	hp: 60,

	type: [
		Type.DARKNESS,
	],

	dexId: 434,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy2/53/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/53/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy2/53/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/53/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 25,
		name: "Kyoko Umemoto"
	},



	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Smokescreen",
			fr: "Brouillard",
		},
		text: {
			en: "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
			fr: "Si le Pokémon Défenseur essaie d'attaquer pendant le prochain tour de votre adversaire, ce dernier lance une pièce. Si c’est pile, son attaque ne fait rien.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Slash",
			fr: "Tranche",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Flashfire",
		code: "xy2"
	}
}

export default card
