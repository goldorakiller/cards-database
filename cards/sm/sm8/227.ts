import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-227",
	localId: 227,

	// Card informations
	name: {
		en: "Lugia-GX",
		fr: "Lugia-GX",
	},

	hp: 190,

	type: [
		Type.COLORLESS,
	],

	dexId: 249,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/227/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/227/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/227/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/227/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.GX,
	],

	illustrator: {
		id: 141,
		name: "PLANETA Igarashi"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Psychic",
			fr: "Psyko",
		},
		text: {
			en: "This attack does 30 more damage times the amount of Energy attached to your opponent's Active Pokémon.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires multipliés par le nombre d’Énergies attachées au Pokémon Actif de votre adversaire.",
		},
		damage: 30
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Pelagic Blade",
			fr: "Lame Pélagique",
		},
		text: {
			en: "This Pokémon can't use Pelagic Blade during your next turn.",
			fr: "Ce Pokémon ne peut pas utiliser Lame Pélagique pendant votre prochain tour.",
		},
		damage: 170
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Lost Purge-GX",
			fr: "Purge Perdue-GX",
		},
		text: {
			en: "Put your opponent's Active Pokémon and all cards attached to it in the Lost Zone. (You can't use more than 1 GX attack in a game.)",
			fr: "Placez le Pokémon Actif de votre adversaire et toutes les cartes qui lui sont attachées dans la Zone Perdue. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
