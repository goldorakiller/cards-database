import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-94",
	localId: 94,

	// Card informations
	name: {
		en: "Diancie",
		fr: "Diancie",
	},

	hp: 90,

	type: [
		Type.FAIRY,
	],

	dexId: 719,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/94/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/94/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/94/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/94/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 20,
		name: "TOKIYA"
	},



	attacks: [{
		cost: [
			Type.FAIRY
		],
		name: {
			en: "Sparkling Wish",
			fr: "Espoir Étincelant",
		},
		text: {
			en: "Search your deck for a card that evolves from 1 of your Pokémon and put it onto that Pokémon to evolve it. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck une carte Évolution de l’un de vos Pokémon et placez-la sur ce dernier pour le faire évoluer. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.FAIRY,
			Type.COLORLESS
		],
		name: {
			en: "Diamond Storm",
			fr: "Orage Adamantin",
		},
		text: {
			en: "Heal 30 damage from each of your Fairy Pokémon.",
			fr: "Soignez 30 dégâts à chacun de vos Pokémon Fairy.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
