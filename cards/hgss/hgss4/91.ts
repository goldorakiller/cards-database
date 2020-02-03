import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-91",
	localId: 91,

	// Card informations
	name: {
		en: "Absol",
		fr: "Absol",
	},

	hp: 80,

	type: [
		Type.DARKNESS,
	],

	dexId: 359,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/91/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/91/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/91/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/91/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 54,
		name: "Hideaki Hakozaki"
	},

	abilities: [{
		id: 919,
		type: AbilityType.POKEBODY,
		name: {
			en: "Eye of Disaster",
			fr: "Œil du chaos",
		},
		text: {
			en: "As long as Absol is your Active Pokémon, whenever your opponent puts a Basic Pokémon from his or her hand onto his or her Bench, put 2 damage counters on that Pokémon.",
			fr: "Tant qu'Absol est votre Pokémon Actif, chaque fois que votre adversaire ajoute un Pokémon de base de sa main à son Banc, placez 2 marqueurs de dégât sur ce Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Vicious Claw",
			fr: "Pince vicieuse",
		},
		text: {
			en: "Choose 1 Pokémon from your hand and put it in the Lost Zone. (If you can't put a Pokémon in the Lost Zone, this attack does nothing.)",
			fr: "Choisissez un Pokémon dans votre main et placez-le dans la Zone Perdue. (Si vous ne pouvez pas, cette attaque ne fait rien.)",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RarePrime,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card

