import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-34",
	localId: 34,

	// Card informations
	name: {
		en: "Alolan Golem-GX",
		fr: "Grolem d’Alola-GX",
	},

	hp: 250,

	type: [
		Type.LIGHTNING,
	],

	dexId: 76,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm4/34/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/34/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/34/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/34/high.png",
		},
	},

	evolveFrom: {
		en: "Alolan Graveler",
		fr: "Gravalanch d’Alola",
	},

	tags: [
		Tag.GX,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hammer In",
			fr: "Enfoncement",
		},
		damage: 80
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Super Electromagnetic Tackle",
			fr: "Super Charge Électromagnétique",
		},
		text: {
			en: "This Pokémon does 50 damage to itself.",
			fr: "Ce Pokémon s’inflige 50 dégâts.",
		},
		damage: 200
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Heavy Rock-GX",
			fr: "Lourd Rocher-GX",
		},
		text: {
			en: "Your opponent can't play any cards from their hand during their next turn. (You can't use more than 1 GX attack in a game.)",
			fr: "Votre adversaire ne peut pas jouer de carte de sa main pendant son prochain tour. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 4,

	rarity: Rarity.RareHoloGX,

	category: Category.POKEMON,

	set: {
		name: "Crimson Invasion",
		code: "sm4"
	}
}

export default card
