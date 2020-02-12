import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sma-SV32",
	localId: "SV32",

	// Card informations
	name: {
		en: "Celesteela",
		fr: "Bamboiselle",
	},

	hp: 140,

	type: [
		Type.METAL,
	],

	dexId: 797,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV32/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV32/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV32/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV32/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Moon Raker",
			fr: "Ratissage Lunaire",
		},
		text: {
			en: "If the total of both players' remaining Prize cards is exactly 6, this attack can be used for Metal.",
			fr: "S’il reste exactement 6 cartes Récompense aux deux joueurs réunis, cette attaque peut être utilisée pour Metal.",
		},
		damage: 160
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 4,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Shiny Vault",
		code: "sma"
	}
}

export default card
