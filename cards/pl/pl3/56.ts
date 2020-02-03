import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-56",
	localId: 56,

	// Card informations
	name: {
		en: "Dragonite FB",
		fr: "Dracolosse ",
	},

	hp: 100,

	type: [
		Type.COLORLESS,
	],

	dexId: 149,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/56/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/56/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/56/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/56/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 19,
		name: "Shin Nagasawa"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Mach Blow",
			fr: "Coup supersonique",
		},
		text: {
			en: "If the Defending Pokémon is a Pokémon SP, this attack's base damage is 80 instead of 20.",
			fr: "Si le Pokémon Défenseur est un Pokémon SP, les dégâts de base de cette attaque sont de 80 au lieu de 20.",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Giant Tail",
			fr: "Longue queue",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque est sans effet.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.COLORLESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card

