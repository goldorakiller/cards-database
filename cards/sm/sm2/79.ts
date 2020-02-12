import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-79",
	localId: 79,

	// Card informations
	name: {
		en: "Honchkrow",
		fr: "Corboss",
	},

	hp: 110,

	type: [
		Type.DARKNESS,
	],

	dexId: 430,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/79/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/79/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/79/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/79/high.png",
		},
	},

	evolveFrom: {
		en: "Murkrow",
		fr: "Cornèbre",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 83,
		name: "Hideki Ishikawa"
	},



	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Feint Attack",
			fr: "Feinte",
		},
		text: {
			en: "This attack does 30 damage to 1 of your opponent's Pokémon. This damage isn't affected by Weakness, Resistance, or any other effects on that Pokémon.",
			fr: "Cette attaque inflige 30 dégâts à l’un des Pokémon de votre adversaire. Ces dégâts ne sont pas affectés par la Faiblesse, la Résistance ou tout autre effet en action sur ce Pokémon.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Raven's Claw",
			fr: "Serre de Corbeau",
		},
		text: {
			en: "This attack does 10 more damage for each damage counter on all of your opponent's Pokémon.",
			fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur les Pokémon de votre adversaire.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card
