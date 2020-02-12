import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-58",
	localId: 58,

	// Card informations
	name: {
		en: "Charjabug",
		fr: "Chrysapile",
	},

	hp: 80,

	type: [
		Type.LIGHTNING,
	],

	dexId: 737,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/58/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/58/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/58/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/58/high.png",
		},
	},

	evolveFrom: {
		en: "Grubbin",
		fr: "Larvibule",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 89,
		name: "Sekio"
	},

	abilities: [{
		id: 424,
		type: AbilityType.TALENT,
		name: {
			en: "Battery",
			fr: "Batterie",
		},
		text: {
			en: "Once during your turn (before your attack), you may attach this card from your hand to 1 of your Vikavolt or Vikavolt-GX as a Special Energy card. This card provides 2 Lightning Energy only while it's attached to a Pokémon.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez attacher cette carte de votre main à l’un de vos Lucanon ou Lucanon-GX comme carte Énergie spéciale. Cette carte ne fournit 2 Énergies Lightning que lorsqu’elle est attachée à ce Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Pierce",
			fr: "Transpercement",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
