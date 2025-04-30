export interface Lavoro {
    id: number,
    nome: string,
    mainImage: string,
    images: string[]
}

export let lavori: Lavoro[] = [
    {
        id: 1,
        nome: "Borgo Marino Pescara",
        mainImage: "/lavori/borgoMarino/borgoMarino.jpg",
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
        nome: "Vetratra Impacchettabile",
        mainImage: "/lavori/vetrataImpacchettabile/vetrata.jpg",
        images: [
            "/lavori/vetrataImpacchettabile/vetrata.jpg", 
            "/lavori/vetrataImpacchettabile/vetrata1.jpg",
            "/lavori/vetrataImpacchettabile/vetrata2.jpg",
            "/lavori/vetrataImpacchettabile/vetrata3.jpg",
        ]
    },
    {
        id: 3,
        nome: "Ringhiere In Vetro",
        mainImage: "/lavori/ringhiereVetro/ringhiere.jpg",
        images: [
            "/lavori/ringhiereVetro/ringhiere.jpg", 
            "/lavori/ringhiereVetro/ringhiere1.jpg",
            "/lavori/ringhiereVetro/ringhiere2.jpg",
        ]
    },
    {
        id: 4,
        nome: "Ringhiera certificata in vetro/alluminio",
        mainImage: "/lavori/lavoro1.jpg",
        images: [
            
        ]
    },
    {
        id: 5,
        nome: "Ringhiere in alluminio/vetro 2",
        mainImage: "/lavori/lavoro2.jpg",
        images: [
        ]
    },
    {
        id: 6,
        nome: "Vetrofacciata gradinata",
        mainImage: "/lavori/lavoro3.jpg",
        images: [
            
        ]
    },
]