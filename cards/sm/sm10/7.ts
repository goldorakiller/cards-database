import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-7",
	localId: 7,

	// Card informations
	name: {
		en: "Gloom",
		fr: "Ortide",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 44,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/7/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/7/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/7/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/7/high.png",
		},
	},

	evolveFrom: {
		en: "Oddish",
		fr: "Mystherbe",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 50,
		name: "Anesaki Dynamic"
	},

	abilities: [{
		id: 374,
		type: AbilityType.TALENT,
		name: {
			en: "Irresistible Aroma",
			fr: "Arôme Irrésistible",
		},
		text: {
			en: "Once during your turn (before your attack), if your opponent's Bench isn't full, you may flip a coin. If heads, your opponent reveals their hand. Put a Basic Pokémon you find there onto their Bench.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), si le Banc de votre adversaire n’est pas plein, vous pouvez lancer une pièce. Si c’est face, votre adversaire dévoile sa main. Placez sur son Banc un Pokémon de base que vous y trouvez.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Drool",
			fr: "Gluant",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card

