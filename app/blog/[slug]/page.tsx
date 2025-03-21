import Link from "next/link"
import Image from "next/image"
import { Calendar, ArrowLeft, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"

// This would typically come from a CMS or database
const blogPosts = {
  "elegance-intemporelle": {
    title: "L'élégance intemporelle du Salon de Paris",
    subtitle: "Une histoire d'excellence depuis 1980",
    date: "15 Mars 2025",
    image: "/placeholder.svg?height=600&width=1200",
    content: `
      <h2>Depuis plus de quatre décennies, Le Salon de Paris s'est imposé comme une référence incontournable dans l'univers de la coiffure de prestige. Fondé en 1980 par le visionnaire Si Ahmed, notre établissement incarne la parfaite alliance entre tradition française et innovations contemporaines.</h2>
      
      <h3>Un héritage d'excellence</h3>
      <p>Notre équipe de coiffeurs virtuoses perpétue l'art capillaire parisien avec passion et précision. Chaque prestation - des coupes sculptées aux colorations raffinées en passant par nos soins régénérants - reflète notre engagement envers l'excellence et l'élégance qui ont fait notre réputation.</p>
      
      <h3>L'expérience Salon de Paris</h3>
      <ul>
        <li><strong>Expertise consacrée :</strong> Quarante ans de savoir-faire au service de votre beauté</li>
        <li><strong>Techniques exclusives :</strong> Méthodes françaises adaptées à la spécificité de chaque chevelure</li>
        <li><strong>Soins signature :</strong> Formulations premium pour une santé capillaire optimale</li>
        <li><strong>Cadre distingué :</strong> Une atmosphère où luxe et sérénité se rencontrent</li>
      </ul>
      
      <p>Transformez votre chevelure et sublimez votre style dans notre sanctuaire de beauté parisien. Réservez votre métamorphose dès aujourd'hui.</p>
    `,
  },
  "chic-parisien": {
    title: "Chic parisien",
    subtitle: "Les coiffures intemporelles qui ne se démodent jamais",
    date: "10 Mars 2025",
    image: "/placeholder.svg?height=600&width=1200",
    content: `
      <h2>La coiffure parisienne incarne l'élégance naturelle et la simplicité sophistiquée dans toute sa splendeur. Au Salon de Paris, nos experts maîtrisent parfaitement ces styles intemporels qui révèlent et subliment votre personnalité unique.</h2>
      
      <h3>Les coiffures parisiennes incontournables</h3>
      <p><strong>Le Carré Français</strong> – Cette coupe emblématique allie structure et fluidité pour une silhouette raffinée qui traverse les époques.</p>
      
      <p><strong>Le Balayage Naturel</strong> – Une technique d'éclaircissement subtile créant un effet soleil et lumière qui illumine le visage avec délicatesse.</p>
      
      <p><strong>Les Ondulations Souples</strong> – Ce style décontracté-chic, comme si vous vous étiez réveillée naturellement ainsi, capture l'essence même de l'élégance parisienne.</p>
      
      <p><strong>Le Chignon Élégant</strong> – Une création versatile qui apporte instantanément une touche de sophistication, parfaite du bureau aux événements prestigieux.</p>
      
      <h3>L'art d'entretenir l'élégance parisienne</h3>
      <ul>
        <li>Privilégiez des produits capillaires de qualité supérieure pour préserver l'aspect naturel de votre chevelure.</li>
        <li>Adoptez le minimalisme dans votre routine quotidienne – moins c'est souvent mieux.</li>
        <li>Maintenez l'excellence de votre coiffure avec des rendez-vous réguliers au Salon de Paris.</li>
      </ul>
      
      <p>Aspirez-vous à incarner cette élégance parisienne intemporelle ? Découvrez notre univers de prestations exclusives et laissez-nous transformer votre style.</p>
    `,
  },
  "soins-capillaires": {
    title: "Le secret des cheveux sublimes",
    subtitle: "Nos soins capillaires exclusifs",
    date: "5 Mars 2025",
    image: "/placeholder.svg?height=600&width=1200",
    content: `
      <h2>Une belle coiffure s'épanouit sur un terrain fertile : des cheveux en pleine santé. Au Salon de Paris, nous avons développé une gamme de soins capillaires exclusifs conçus pour restaurer, nourrir et sublimer chaque type de chevelure.</h2>
      
      <h3>Nos soins signature</h3>
      <p><strong>Soin à la Kératine</strong> – Ce traitement restructurant dompte les frisottis tout en apportant hydratation et discipline aux cheveux les plus rebelles.</p>
      
      <p><strong>Masque Hydratant Intense</strong> – Véritable cure de jouvence, ce rituel de nutrition profonde régénère les fibres capillaires desséchées et fragilisées.</p>
      
      <p><strong>Détox du Cuir Chevelu</strong> – Notre protocole purifiant élimine les résidus accumulés, réactive la croissance et rétablit l'équilibre naturel de votre cuir chevelu.</p>
      
      <p><strong>Protection des Cheveux Colorés</strong> – Formulé spécialement pour préserver l'intensité et la longévité de votre coloration, ce soin scelle la pigmentation et ravive l'éclat.</p>
      
      <h3>Les bénéfices de nos soins professionnels</h3>
      <ul>
        <li>Réparation en profondeur des structures capillaires endommagées</li>
        <li>Transformation spectaculaire en termes de brillance et souplesse</li>
        <li>Bouclier efficace contre les agressions environnementales quotidiennes</li>
        <li>Formulations personnalisées pour chaque nature de cheveux</li>
      </ul>
      
      <p>Accordez à votre chevelure l'excellence qu'elle mérite – Réservez votre soin signature dès aujourd'hui !</p>
    `,
  },
  "coiffure-mariee": {
    title: "Coiffure de mariée",
    subtitle: "Le guide ultime pour être sublime le jour J",
    date: "28 Février 2025",
    image: "/placeholder.svg?height=600&width=1200",
    content: `
      <h2>Le jour de votre mariage représente l'apogée de votre mise en beauté, et votre coiffure doit être aussi resplendissante que votre tenue. Au Salon de Paris, notre équipe d'artistes capillaires conçoit des créations sur-mesure qui magnifient votre beauté naturelle et complètent parfaitement votre silhouette nuptiale.</h2>
      
      <h3>Les tendances coiffures pour mariées en 2025</h3>
      <p><strong>Le Chignon Bas Élégant</strong> – Cette création intemporelle apporte une touche de sophistication classique tout en mettant admirablement en valeur votre voile et vos bijoux.</p>
      
      <p><strong>Les Ondulations Romantiques</strong> – Ces vagues délicates encadrent le visage avec douceur, créant une silhouette aérienne parfaite pour les cérémonies au style bohème ou champêtre.</p>
      
      <p><strong>La Couronne Tressée</strong> – Cette composition artisanale allie naturel et raffinement, idéale pour les mariées recherchant un équilibre entre tradition et modernité.</p>
      
      <p><strong>La Queue de Cheval Glamour</strong> – Cette option contemporaine offre une allure épurée mais luxueuse, particulièrement flatteuse pour les robes à dos travaillé.</p>
      
      <h3>Notre approche pour une coiffure nuptiale parfaite</h3>
      <ul>
        <li><strong>L'essai préalable</strong> – Indispensable pour ajuster chaque détail et vous assurer une tranquillité d'esprit absolue le jour J.</li>
        <li><strong>Les soins préparatoires</strong> – Un programme de revitalisation capillaire personnalisé dans les semaines précédant l'événement garantit un résultat impeccable.</li>
        <li><strong>L'harmonie esthétique</strong> – Notre expertise vous guide pour sélectionner une création capillaire en parfaite résonance avec votre robe, accessoires et l'ambiance générale de votre célébration.</li>
      </ul>
      
      <p>Future mariée en quête de perfection ? Confiez la mise en beauté de vos cheveux à nos experts et rayonnez d'une élégance incomparable lors de cette journée mémorable.</p>
    `,
  },
  "massage-cuir-chevelu": {
    title: "Les bienfaits du massage du cuir chevelu",
    subtitle: "Le secret pour des cheveux forts et en bonne santé",
    date: "20 Février 2025",
    image: "/placeholder.svg?height=600&width=1200",
    content: `
      <h2>Le massage du cuir chevelu est une pratique ancestrale trop souvent négligée, pourtant fondamentale pour la vitalité capillaire et l'équilibre du cuir chevelu. Au Salon de Paris, nous avons intégré cette technique précieuse au cœur de nos protocoles de soins pour offrir une expérience alliant efficacité thérapeutique et bien-être profond.</h2>
      
      <h3>Les bienfaits essentiels du massage capillaire</h3>
      <p><strong>Stimulation microcirculatoire</strong> – En activant délicatement les échanges sanguins au niveau des follicules, le massage optimise l'apport en nutriments et oxygène essentiels à la croissance, tout en renforçant l'ancrage des cheveux.</p>
      
      <p><strong>Purification en profondeur</strong> – Ce processus mécanique aide à libérer le cuir chevelu des cellules mortes, résidus de produits coiffants et excès de sébum qui étouffent les racines.</p>
      
      <p><strong>Régulation neuro-émotionnelle</strong> – Les techniques de massage réduisent significativement les tensions musculaires et le stress chronique, facteurs scientifiquement liés à l'amincissement capillaire.</p>
      
      <p><strong>Équilibrage des sécrétions sébacées</strong> – Le massage régule naturellement la production de sébum, résolvant simultanément les problématiques de sécheresse et d'excès de gras.</p>
      
      <h3>Techniques de massage recommandées</h3>
      <ul>
        <li><strong>Mouvements circulaires progressifs</strong> – Exercez une pression douce mais ferme avec les pulpes des doigts, en partant des tempes vers le sommet du crâne.</li>
        <li><strong>Application d'huiles botaniques sélectionnées</strong> – Nous recommandons des huiles pures d'argan, de jojoba ou notre complexe signature aux actifs végétaux pour optimiser l'absorption des nutriments.</li>
        <li><strong>Régularité thérapeutique</strong> – Consacrez quelques minutes quotidiennement à cette pratique pour des résultats visibles et durables.</li>
        <li><strong>Expertise professionnelle</strong> – Complétez votre routine par des séances régulières au Salon de Paris, où nos spécialistes maîtrisent des techniques avancées inaccessibles à domicile.</li>
      </ul>
      
      <h3>Nos rituels de massage exclusifs</h3>
      <p>Le Salon de Paris propose une collection de protocoles de massage capillaire élaborés selon les principes de la trichologie moderne et adaptés à chaque problématique :</p>
      <ul>
        <li><strong>Rituel Détente Profonde</strong> – Un massage aux huiles essentielles sélectionnées pour leurs propriétés apaisantes et nourrissantes</li>
        <li><strong>Protocole Détox Intense</strong> – Une combinaison de techniques manuelles et de produits purifiants pour revitaliser le cuir chevelu</li>
        <li><strong>Cure Croissance Accélérée</strong> – Des manœuvres stimulantes précises associées à des actifs fortifiants pour densifier la chevelure</li>
      </ul>
      
      <p>Investissez dans la santé durable de vos cheveux – Réservez votre consultation personnalisée dès aujourd'hui !</p>
    `,
  },
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    return (
      <div className="flex flex-col min-h-screen items-center justify-center">
        <h1 className="text-2xl font-bold">Article non trouvé</h1>
        <Link href="/blog">
          <Button variant="link">Retour au blog</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 pt-32">
        <article className="salon-container max-w-4xl mx-auto py-12">
          <div className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center text-sm font-medium text-salon-gray hover:text-salon-black mb-8 bg-cream px-4 py-2 rounded-full transition-all hover:bg-cream-dark"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour au blog
            </Link>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-2 text-sm text-salon-gray bg-cream-light px-4 py-2 rounded-full inline-block">
              <Calendar className="h-4 w-4" />
              <time dateTime="2023-01-01">{post.date}</time>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-salon-black">{post.title}</h1>
            <p className="text-xl text-salon-gray">{post.subtitle}</p>
          </div>

          <div className="relative aspect-video mb-12 rounded-xl overflow-hidden shadow-xl">
            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-salon-black/20 to-transparent"></div>
          </div>

          <div
            className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-salon-black prose-p:text-salon-gray prose-strong:text-salon-black prose-li:text-salon-gray prose-headings:font-bold rounded-xl bg-white p-8 shadow-sm border border-cream/30"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-16 pt-8 border-t border-cream">
            <div className="p-8 bg-cream rounded-xl shadow-inner">
              <h3 className="text-2xl font-heading font-bold mb-4 text-salon-black">Vous avez aimé cet article ?</h3>
              <p className="text-salon-gray mb-6">
                Contactez-nous pour prendre rendez-vous et bénéficier de notre expertise.
              </p>
              <Link href="tel:+21252442273">
                <Button className="btn-primary rounded-full shadow-md">
                  <Phone className="mr-2 h-4 w-4" />
                  Réserver un rendez-vous
                </Button>
              </Link>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}

