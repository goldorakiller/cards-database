import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM122",
	localId: "SM122",

	// Card informations
	name: {
		en: "Zygarde-GX",
		fr: "Zygarde-GX",
	},

	hp: 180,

	type: [
		Type.FIGHTING,
	],

	dexId: 718,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM122/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM122/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM122/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM122/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.GX,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Vibration",
			fr: "Vibration",
		},
		damage: 20
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Cell Storm",
			fr: "Tempête Cellulaire",
		},
		text: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts à ce Pokémon.",
		},
		damage: 80
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Liberation-GX",
			fr: "Libération-GX",
		},
		text: {
			en: "Your opponent reveals their hand. This attack does 120 damage for each Energy card you find there. (You can't use more than 1 GX attack in a game.)",
			fr: "Votre adversaire dévoile sa main. Cette attaque inflige 120 dégâts pour chaque carte Énergie que vous y trouvez. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card
