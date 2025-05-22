export interface Lavoro {
    id: number,
    nome: string,
    mainImage: string,
    homePage: boolean,
    images: string[]
}

export let lavori: Lavoro[] = [
    {
        id: 6,
        nome: "Vetrofacciate e infissi - Scutti SRL Casoli",
        mainImage: "/lavori/scuttiCasoli/scuttiCasoli1.jpg",
        homePage: true,
        images: [
            "/lavori/scuttiCasoli/scuttiCasoli1.jpg",
            "/lavori/scuttiCasoli/scuttiCasoli2.jpg",
            "/lavori/scuttiCasoli/scuttiCasoli3.jpg",
            "/lavori/scuttiCasoli/scuttiCasoli4.jpg",
            "/lavori/scuttiCasoli/scuttiCasoli5.jpg",
            "/lavori/scuttiCasoli/scuttiCasoli6.jpg",
            "/lavori/scuttiCasoli/scuttiCasoli7.jpg",
            "/lavori/scuttiCasoli/scuttiCasoli8.jpg",
            "/lavori/scuttiCasoli/scuttiCasoli9.jpg",
        ]
    },
    {
        id: 1,
        nome: "Infissi e persiane - Borgo Marino Pescara",
        mainImage: "/lavori/borgoMarino/borgoMarino.jpg",
        homePage: true,
        images: [
            "/lavori/borgoMarino/borgoMarino.jpg", 
            "/lavori/borgoMarino/borgoMarino1.jpg",
            "/lavori/borgoMarino/borgoMarino2.jpg",
            "/lavori/borgoMarino/borgoMarino3.jpg",
            "/lavori/borgoMarino/borgoMarino4.jpg",
            "/lavori/borgoMarino/borgoMarino5.jpg",
            "/lavori/borgoMarino/borgoMarino6.jpg",
            "/lavori/borgoMarino/borgoMarino7.jpg",
        ]
    },
    {
        id: 2,
        nome: "Vetratra Impacchettabile - Fossacesia",
        mainImage: "/lavori/vetrataImpacchettabile/vetrata.jpg",
        homePage: false,
        images: [
            "/lavori/vetrataImpacchettabile/vetrata.jpg", 
            "/lavori/vetrataImpacchettabile/vetrata1.jpg",
            "/lavori/vetrataImpacchettabile/vetrata2.jpg",
            "/lavori/vetrataImpacchettabile/vetrata3.jpg",
        ]
    },
    {
        id: 3,
        nome: "Ringhiere In Vetro - Chieti",
        mainImage: "/lavori/ringhiereVetro/ringhiere.jpg",
        homePage: false,
        images: [
            "/lavori/ringhiereVetro/ringhiere.jpg", 
            "/lavori/ringhiereVetro/ringhiere1.jpg",
            "/lavori/ringhiereVetro/ringhiere2.jpg",
        ]
    },
    {
        id: 4,
        nome: "Vetrofacciata - Pescara",
        mainImage: "/lavori/lavoro3.jpg",
        homePage: false,
        images: [
            
        ]
    },
    {
        id: 5,
        nome: "Ringhiere Alluminio-Vetro - Lanciano",
        mainImage: "/lavori/ringhiereVetroLanciano/RingVetroLanciano1.jpg",
        homePage: true,
        images: [
            "/lavori/ringhiereVetroLanciano/RingVetroLanciano1.jpg",
            "/lavori/ringhiereVetroLanciano/RingVetroLanciano2.jpg",
            "/lavori/ringhiereVetroLanciano/RingVetroLanciano3.jpg",
            "/lavori/ringhiereVetroLanciano/RingVetroLanciano4.jpg",
            "/lavori/ringhiereVetroLanciano/RingVetroLanciano5.jpg",
            "/lavori/ringhiereVetroLanciano/RingVetroLanciano6.jpg",
            "/lavori/ringhiereVetroLanciano/RingVetroLanciano7.jpg",
        ]
    },
    {
        id: 7,
        nome: "Infissi e ringhiere alluminio-vetro - edificio residenziale Casoli",
        mainImage: "/lavori/residenzialeCasoli/residenzialeCasoli1.jpg",
        homePage: false,
        images: [
            "/lavori/residenzialeCasoli/residenzialeCasoli1.jpg",
            "/lavori/residenzialeCasoli/residenzialeCasoli2.jpg",
            "/lavori/residenzialeCasoli/residenzialeCasoli3.jpg",
            "/lavori/residenzialeCasoli/residenzialeCasoli4.jpg",
        ]
    },
    {
        id: 8,
        nome: "Infissi e ringhiere alluminio-vetro - edificio commerciale Casoli",
        mainImage: "/lavori/commercialeCasoli/commercialeCasoli1.jpg",
        homePage: false,
        images: [
            "/lavori/commercialeCasoli/commercialeCasoli1.jpg",
            "/lavori/commercialeCasoli/commercialeCasoli2.jpg",
            "/lavori/commercialeCasoli/commercialeCasoli3.jpg",
            "/lavori/commercialeCasoli/commercialeCasoli4.jpg",
            "/lavori/commercialeCasoli/commercialeCasoli5.jpg",
        ]
    },
    {
        id: 9,
        nome: "Infissi e ringhiere alluminio-vetro - edificio commerciale Casoli",
        mainImage: "/lavori/commercialeCasoli2/commercialeCasoli21.jpg",
        homePage: false,
        images: [
            "/lavori/commercialeCasoli2/commercialeCasoli21.jpg",
            "/lavori/commercialeCasoli2/commercialeCasoli22.jpg",
            "/lavori/commercialeCasoli2/commercialeCasoli23.jpg",
            "/lavori/commercialeCasoli2/commercialeCasoli24.jpg",
        ]
    },
]