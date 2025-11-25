export const data = {
    banners: [
        {
            img: "/assets/banners/banner-1.png",
            link: "",
        },
        {
            img: "/assets/banners/banner-2.png",
            link: "",
        },
        {
            img: "/assets/banners/banner-3.png",
            link: "",
        },
        {
            img: "/assets/banners/banner-4.png",
            link: "",
        },
    ],
    products: [
        {
            id: 1,
            label: "Camiseta PHP",
            price: 49.9,
            image: "/assets/products/camiseta-php.png",
            liked: false,
        },
        {
            id: 2,
            label: "Camiseta Laravel",
            price: 39.9,
            image: "/assets/products/camiseta-laravel-branca.png",
            liked: false,
        },
        {
            id: 3,
            label: "Camiseta Node",
            price: 29.9,
            image: "/assets/products/camiseta-node.png",
            liked: false,
        },
        {
            id: 4,
            label: "Camiseta React",
            price: 19.9,
            image: "/assets/products/camiseta-react-azul.png",
            liked: false,
        },
    ],
    mostSoldProducts: [
        {
            id: 1,
            label: "Camiseta Javascript",
            price: 25.5,
            image: "/assets/products/camiseta-js.png",
            liked: true,
        },
        {
            id: 2,
            label: "Boné B7 Branco",
            price: 15.99,
            image: "/assets/products/bone-b7-branco.png",
            liked: false,
        },
        {
            id: 3,
            label: "Camiseta CSS",
            price: 29.9,
            image: "/assets/products/camiseta-css.png",
            liked: false,
        },
        {
            id: 4,
            label: "Camiseta HTML",
            price: 19.9,
            image: "/assets/products/camiseta-html.png",
            liked: false,
        },
    ],
    filters: {
        tech: [
            { id: "node", label: "Node" },
            { id: "react", label: "React" },
            { id: "rn", label: "React Native" },
        ],
        color: [
            { id: "red", label: "Vermelho" },
            { id: "blue", label: "Azul" },
            { id: "green", label: "Verde" },
            { id: "black", label: "Preto" },
            { id: "white", label: "Branco" },
        ],
    },
    product: {
        id: 1,
        label: "Camisa PHP",
        images: [
            "/assets/products/camiseta-php.png",
            "/assets/products/camiseta-php-grafite.png",
        ],
        price: 19.9,
        liked: false,
        description: "Um exemplo de descrição para o produto",
    },
    addresses: [
        {
            id: 1,
            zipcode: "12345678",
            street: "Rua A",
            number: "100",
            city: "Cidade X",
            state: "Estado Y",
            country: "País Z",
        },
        {
            id: 2,
            zipcode: "87654321",
            street: "Avenida B",
            number: "200",
            city: "Cidade W",
            state: "Estado V",
            country: "País U",
        },
        {
            id: 3,
            zipcode: "11223344",
            street: "Travessa C",
            number: "300",
            city: "Cidade Q",
            state: "Estado R",
            country: "País S",
        },
    ],
};
