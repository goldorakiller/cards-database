import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-15",
	localId: 15,

	// Card informations
	name: {
		en: "Bronzong",
		fr: "Archéodong",
	},

	hp: 90,

	type: [
		Type.METAL,
	],

	dexId: 437,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/15/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/15/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/15/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/15/high.png",
		},
	},

	evolveFrom: {
		en: "Bronzor",
		fr: "Archeomire",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 45,
		name: "Yuka Morii"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Legend Ceremony",
			fr: "Cérémonie légendaire",
		},
		text: {
			en: "Search your deck for both halves of a Pokémon LEGEND, show them to your opponent, and put them into your hand. Shuffle your deck afterward.",
			fr: "Cherchez les deux moitiés d'un Pokémon LÉGENDE dans votre deck, montrez-les à votre adversaire, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Reflect Energy",
			fr: "Renvoi d'énergie",
		},
		text: {
			en: "Move an Energy card attached to Bronzong to 1 of your Benched Pokémon.",
			fr: "Prenez une carte Énergie attachée à Archéodong et attachez-la à l'un de vos Pokémon de Banc.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card
