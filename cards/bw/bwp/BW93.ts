import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bwp-BW93",
	localId: "BW93",

	// Card informations
	name: {
		en: "Umbreon",
		fr: "Noctali",
	},

	hp: 100,

	type: [
		Type.DARKNESS,
	],

	dexId: 197,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW93/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW93/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW93/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW93/high.png",
		},
	},

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 160,
		name: "Illus.＆Direc.The Pokémon Company Art Team"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Shadow Drain",
			fr: "Sangsue de l'Ombre",
		},
		text: {
			en: "Heal from this Pokémon the same amount of damage you did to the Defending Pokémon.",
			fr: "Soignez à ce Pokémon la même quantité de dégâts que vous avez infligée au Pokémon Défenseur.",
		},
		damage: 30
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Slashing Strike",
			fr: "Coup Déchirant",
		},
		text: {
			en: "This Pokémon can't use Slashing Strike during your next turn.",
			fr: "Ce Pokémon ne peut pas utiliser Coup Déchirant pendant votre prochain tour.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "BW Black Star Promos",
		code: "bwp"
	}
}

export default card
