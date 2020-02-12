import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-47",
	localId: 47,

	// Card informations
	name: {
		en: "Gliscor",
		fr: "Scorvol",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 472,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/47/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/47/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/47/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/47/high.png",
		},
	},

	evolveFrom: {
		en: "Gligar",
		fr: "Scorplane",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 23,
		name: "Naoyo Kimura"
	},



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Submission Hold",
			fr: "Prise Pétrifiante",
		},
		text: {
			en: "Your opponent can't attach Energy from his or her hand to the Defending Pokémon during his or her next turn.",
			fr: "Votre adversaire ne peut pas attacher d'Énergie de sa main au Pokémon Défenseur pendant son prochain tour.",
		},
		damage: 20
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Poison Jab",
			fr: "Direct Toxik",
		},
		text: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Poisoned.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Phantom Forces",
		code: "xy4"
	}
}

export default card
