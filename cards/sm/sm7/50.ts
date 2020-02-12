import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-50",
	localId: 50,

	// Card informations
	name: {
		en: "Lanturn",
		fr: "Lanturn",
	},

	hp: 110,

	type: [
		Type.LIGHTNING,
	],

	dexId: 171,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/50/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/50/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/50/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/50/high.png",
		},
	},

	evolveFrom: {
		en: "Chinchou",
		fr: "Loupio",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 43,
		name: "Aya Kusube"
	},

	abilities: [{
		id: 384,
		type: AbilityType.TALENT,
		name: {
			en: "Energy Grounding",
			fr: "Source d’Énergie",
		},
		text: {
			en: "When 1 of your Pokémon is Knocked Out by damage from an opponent's attack, you may move a basic Energy card from that Pokémon to this Pokémon.",
			fr: "Lorsque l’un de vos Pokémon est mis K.O. par les dégâts d’une attaque de votre adversaire, vous pouvez déplacer une carte Énergie de base du Pokémon mis K.O. vers celui-ci.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Lightning Strike",
			fr: "Frap’Éclair",
		},
		text: {
			en: "You may discard all Lightning Energy from this Pokémon. If you do, this attack does 70 more damage.",
			fr: "Vous pouvez défausser toute l’Énergie Lightning attachée à ce Pokémon. Dans ce cas, cette attaque inflige 70 dégâts supplémentaires.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
