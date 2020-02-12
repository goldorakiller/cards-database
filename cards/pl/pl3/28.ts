import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-28",
	localId: 28,

	// Card informations
	name: {
		en: "Exploud",
		fr: "Brouhabam",
	},

	hp: 130,

	type: [
		Type.COLORLESS,
	],

	dexId: 295,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/28/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/28/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/28/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/28/high.png",
		},
	},

	evolveFrom: {
		en: "Loudred",
		fr: "Ramboum",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},

	abilities: [{
		id: 797,
		type: AbilityType.POKEBODY,
		name: {
			en: "Erasing Sound",
			fr: "Son effaçant",
		},
		text: {
			en: "Each of your Pokémon has no Weakness.",
			fr: "Aucun de vos Pokémon ne possède de Faiblesse.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Knock Back",
			fr: "Engloutir",
		},
		text: {
			en: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
			fr: "Votre adversaire échange le Pokémon Défenseur avec 1 de ses Pokémon de Banc.",
		},
		damage: 40
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hyper Beam",
			fr: "Ultralaser",
		},
		text: {
			en: "Flip a coin. If heads, discard an Energy card attached to the Defending Pokémon.",
			fr: "Lancez une pièce. Si c'est face, défaussez une carte Énergie attachée au Pokémon Défenseur.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+30"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
