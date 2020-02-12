import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss2-11",
	localId: 11,

	// Card informations
	name: {
		en: "Xatu",
		fr: "Xatu",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 178,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/11/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/11/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/11/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/11/high.png",
		},
	},

	evolveFrom: {
		en: "Natu",
		fr: "Natu",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 24,
		name: "sui"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Psywave",
			fr: "Vague psy",
		},
		text: {
			en: "Does 20 damage times the amount of Energy attached to the Defending Pokémon.",
			fr: "Inflige 20 dégâts multipliés par le nombre de cartes Énergie attachées au Pokémon Défenseur.",
		},
		damage: 20
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Confuse Ray",
			fr: "Onde folie",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
		},
		damage: 50
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

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "HS—Unleashed",
		code: "hgss2"
	}
}

export default card
