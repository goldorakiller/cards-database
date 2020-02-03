import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-67",
	localId: 67,

	// Card informations
	name: {
		en: "Conkeldurr",
		fr: "Bétochef",
	},

	hp: 140,

	type: [
		Type.FIGHTING,
	],

	dexId: 534,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/67/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/67/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/67/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/67/high.png",
		},
	},

	evolveFrom: {
		en: "Gurdurr",
		fr: "Ouvrifier",
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
			en: "Wake-Up Slap",
			fr: "Réveil Forcé",
		},
		text: {
			en: "If your opponent's Active Pokémon is affected by a Special Condition, this attack does 60 more damage. Then, remove all Special Conditions from that Pokémon.",
			fr: "Si le Pokémon Actif de votre adversaire est affecté par un État Spécial, cette attaque inflige 60 dégâts supplémentaires. Ensuite, retirez tous les États Spéciaux de ce dernier.",
		},
		damage: 30
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Dynamic Punch",
			fr: "Dynamopoing",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 40 more damage and your opponent's Active Pokémon is now Confused.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts supplémentaires et le Pokémon Actif de votre adversaire est maintenant Confus.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card

