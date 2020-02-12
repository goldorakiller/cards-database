import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-134",
	localId: 134,

	// Card informations
	name: {
		en: "Black Market ◇",
		fr: "Marché Noir ",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/134/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/134/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/134/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/134/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		name: {
			fr: "Règle pour les cartes  (Prisme Étoile)",
		},
	},{
		name: {},
		text: {
			fr: "Lorsqu’un Pokémon Darkness (le vôtre ou celui de votre adversaire) auquel de l’Énergie Darkness est attachée est mis K.O. par les dégâts d’une attaque d’un adversaire, ce joueur récupère une carte Récompense de moins.\n\nChaque fois qu’un joueur joue une carte Objet ou une carte Supporter de sa main, évitez tous les effets de cette carte-là sur cette carte Stade.",
		},
	}],







	rarity: Rarity.RareHolo,

	category: Category.TRAINER,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
