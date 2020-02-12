import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy7-50",
	localId: 50,

	// Card informations
	name: {
		en: "Metagross",
		fr: "Métalosse",
	},

	hp: 150,

	type: [
		Type.METAL,
	],

	dexId: 376,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy7/50/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/50/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy7/50/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/50/high.png",
		},
	},

	evolveFrom: {
		en: "Metang",
		fr: "Métang",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 67,
		name: "Hitoshi Ariga"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Machine Gun Stomp",
			fr: "Double Θ",
		},
		text: {
			en: "This attack does 10 more damage for each card in your hand.",
		},
		damage: 20
	},{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Guard Press",
			fr: "Mitraille-Piétinage",
		},
		text: {
			en: "During your opponent's next turn, any damage done to this Pokémon by attacks is reduced by 20 (after applying Weakness and Resistance).",
			fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque carte dans votre main.",
		},
		damage: 80
	},{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			fr: "Pression de Garde",
		},
		text: {
			fr: "Pendant le prochain tour de votre adversaire, tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 4,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Ancient Origins",
		code: "xy7"
	}
}

export default card
