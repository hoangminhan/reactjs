const initialState = [{
    id: 1,
    name: "iphone",
    price: 500000,
    status: true
},
{
    id: 2,
    name: "samsung",
    price: 500000,
    status: false
},
{
    id: 3,
    name: "Vivo",
    price: 700000,
    status: true
}]

const product = (state = initialState, action) => {
    switch (action.type) {
        default:
            return [...state]
    }

}
export default product