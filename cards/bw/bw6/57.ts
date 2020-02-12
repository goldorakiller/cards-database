import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw6-57",
	localId: 57,

	// Card informations
	name: {
		en: "Gothitelle",
		fr: "Sidérella",
	},

	hp: 130,

	type: [
		Type.PSYCHIC,
	],

	dexId: 576,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw6/57/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/57/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw6/57/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/57/high.png",
		},
	},

	evolveFrom: {
		en: "Gothorita",
		fr: "Mesmérella",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 48,
		name: "Akira Komayama"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Doom Decree",
			fr: "Verdict Fatal",
		},
		text: {
			en: "Flip 2 coins. If both of them are heads, the Defending Pokémon is Knocked Out.",
			fr: "Lancez 2 pièces. Si vous obtenez 2 côtés face, le Pokémon Défenseur est mis K.O.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Black Magic",
			fr: "Magie Noire",
		},
		text: {
			en: "Does 20 more damage for each of your opponent's Benched Pokémon.",
			fr: "Inflige 20 dégâts supplémentaires pour chaque Pokémon de Banc de votre adversaire.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Dragons Exalted",
		code: "bw6"
	}
}

export default card
