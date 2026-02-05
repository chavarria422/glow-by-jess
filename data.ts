import { Product, Brand } from './types';

export const products: Product[] = [
    {
        id: 1,
        name: "Contorneador Bissu",
        description: "Rostro definido",
        price: 156.00,
        image: "https://drive.google.com/thumbnail?id=16XEA6L_RGABjpLEQqMcQ7T1KKghszMAz&sz=w800"
    },
    {
        id: 2,
        name: "Set Gloss Thirsty Pout ITALIA DELUXE",
        description: "Set de 4 piezas",
        price: 250.00,
        image: "https://drive.google.com/thumbnail?id=1LfhpQ6Cg0rvCXRitekJKJu73Drm8osW2&sz=w800"
    },
    {
        id: 3,
        name: "Rubor Bissu",
        description: "Color intenso",
        price: 57.00,
        image: "https://drive.google.com/thumbnail?id=1j3aSMBCO0vbF3lBUA-yqwiiX8nAFvSNM&sz=w800"
    },
    {
        id: 4,
        name: "Rimel Prosa",
        description: "Volumen natural",
        price: 50.00,
        image: "https://drive.google.com/thumbnail?id=1KqG2Veh2TCV7L_OML0MK9ppF8_xJ6LCY&sz=w800"
    },
    {
        id: 5,
        name: "Brillo Bissu labial",
        description: "Brillo sutil",
        price: 70.00,
        image: "https://drive.google.com/thumbnail?id=1DIit-GUd4l-aHZHONrg8CAuREJNDCmpz&sz=w800"
    },
    {
        id: 6,
        name: "Brillo Bissu Mágico",
        description: "Cambia de color",
        price: 70.00,
        image: "https://drive.google.com/thumbnail?id=1R29TnLqcfcIpdYY5fPOvOD79a9nUr7ec&sz=w800"
    },
    {
        id: 7,
        name: "Labial Bissu Humectante",
        description: "Hidratación diaria",
        price: 55.00,
        image: "https://drive.google.com/thumbnail?id=13X8PewJF9bxA9YjhSYK97mUgkd0FNmVh&sz=w800"
    },
    {
        id: 8,
        name: "Labial Líquido Loreal",
        description: "Larga duración",
        price: 250.00,
        image: "https://drive.google.com/thumbnail?id=15QTqIEAtLsI3kZQZOlYantMHCf-D2y8r&sz=w800"
    },
    {
        id: 9,
        name: "Maybelline Superstay Teddy",
        description: "Tinta mate suave",
        price: 240.00,
        image: "https://drive.google.com/thumbnail?id=1AwpUOJwGSrI9FruJDQSWOtr_Nfuuitx5&sz=w800",
        tag: "Nuevo"
    },
    {
        id: 10,
        name: "Sombras ELF",
        description: "Paleta compacta",
        price: 230.00,
        image: "https://drive.google.com/thumbnail?id=1ymoGffplIuWiUeqeQUcgMPqSdvBAaZmr&sz=w800"
    },
    {
        id: 11,
        name: "ELF Instant Lift Brow",
        description: "Lápiz de cejas",
        price: 130.00,
        image: "https://drive.google.com/thumbnail?id=1WpLVaVrWy7lYH-UvbjjQ48Z5mGDEZvoz&sz=w800"
    },
    {
        id: 12,
        name: "Maybelline Sky High",
        description: "Mascara lavable",
        price: 270.00,
        image: "https://drive.google.com/thumbnail?id=1Qx2sfGTuOn2wWDnR8G65NstXD5tND0rt&sz=w800",
        tag: "Popular"
    },
    {
        id: 13,
        name: "VS Mist Pure Seduction",
        description: "Fragancia corporal",
        price: 290.00,
        image: "https://drive.google.com/thumbnail?id=1LsP4Bx41qS2fAUG2BjMkjJB-sBai5-bt&sz=w800"
    },
    {
        id: 14,
        name: "VS Mist Bare Vanilla",
        description: "Con shimmer",
        price: 290.00,
        image: "https://drive.google.com/thumbnail?id=1htJZY6LLx6N9yLYhrgJ410XAcW4fleDI&sz=w800"
    },
    {
        id: 15,
        name: "Set de brochas PinkUp",
        description: "Calidad profesional",
        price: 1050.00,
        image: "https://drive.google.com/thumbnail?id=1Q9CCL1IWyx4j9vpZq9KJCw4ifoSeeZJf&sz=w800"
    },
    {
        id: 16,
        name: "StarFace Pimple Patches",
        description: "Original",
        price: 280.00,
        image: "https://drive.google.com/thumbnail?id=1MGmAyx2v-HQFG6-fqKMw2mdl6GbG21o_&sz=w800",
        tag: "Trending"
    },
    {
        id: 17,
        name: "StarFace Recovery",
        description: "Parches de recuperación",
        price: 280.00,
        image: "https://drive.google.com/thumbnail?id=1MGmAyx2v-HQFG6-fqKMw2mdl6GbG21o_&sz=w800"
    }
];

export const brands: Brand[] = [
    { id: 1, name: "ELF" },
    { id: 2, name: "L'Oréal" },
    { id: 3, name: "Maybelline" },
    { id: 4, name: "Bissu" },
    { id: 5, name: "PinkUp" },
    { id: 6, name: "Starface" },
    { id: 7, name: "Italia Deluxe" },
];