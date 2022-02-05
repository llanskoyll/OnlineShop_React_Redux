const defaultCatalog = {
    brands: [
        {id: 1, name: 'Samsung'},
        {id: 2, name: 'Apple'},
        {id: 3, name: 'LG'},
        {id: 4, name: 'Huawei'},
        {id: 5, name: 'Xiaomi'}
    ],
    activeBrandTypeBar : undefined,
    tech : [
        {id: 1, type: 'Телефон', name: 'Iphone 5s', brand: 'Apple', price: 25000},
        {id: 2, type: 'Телефон', name: 'Samsung s9', brand: 'Samsung', price: 19000},
        {id: 3, type: 'Телефон', name: 'Xiaomi 9', brand: 'Xiaomi', price: 15000},
        {id: 4, type: 'Телефон', name: 'LG nova 2', brand: 'LG', price: 30000},
        {id: 5, type: 'Телефон', name: 'Iphone X', brand: 'Apple', price: 400000},
        {id: 6, type: 'Холодильник', name: 'LG', brand: 'LG', price: 7400},
        {id: 7, type: 'Холодильник', name: 'Samsung', brand: 'Samsung', price: 3200},
        {id: 8, type: 'Холодильник', name: 'Xiaomi 9', brand: 'Xiaomi', price: 15000},
        {id: 9, type: 'Холодильник', name: 'LG nova 2', brand: 'LG', price: 7600},
        {id: 10, type: 'Холодильник', name: 'Samsung VC', brand: 'Samsung', price: 25000},
        {id: 11, type: 'Телевизор', name: 'Samsung SMART', brand: 'Samsung', price: 42000},
        {id: 12, type: 'Телевизор', name: 'Xiaomi SMART', brand: 'Xiaomi', price: 23000},
        {id: 13, type: 'Телевизор', name: 'Xiaomi SMART mini',brand: 'Xiaomi', price: 18000},
        {id: 14, type: 'Телевизор', name: 'LG Ultra 4K', brand: 'LG', price: 24500},
        {id: 15, type: 'Телевизор', name: 'Samsung SE2', brand: 'Samsung', price: 12500},
    ],
    activeTech: [
        {id: 1, type: 'Телефон', name: 'Iphone 5s', brand: 'Apple', price: 25000},
        {id: 2, type: 'Телефон', name: 'Samsung s9', brand: 'Samsung', price: 19000},
        {id: 3, type: 'Телефон', name: 'Xiaomi 9', brand: 'Xiaomi', price: 15000},
        {id: 4, type: 'Телефон', name: 'LG nova 2', brand: 'LG', price: 30000},
        {id: 5, type: 'Телефон', name: 'Iphone X', brand: 'Apple', price: 400000},
        {id: 6, type: 'Холодильник', name: 'LG', brand: 'LG', price: 7400},
        {id: 7, type: 'Холодильник', name: 'Samsung', brand: 'Samsung', price: 3200},
        {id: 8, type: 'Холодильник', name: 'Xiaomi 9', brand: 'Xiaomi', price: 15000},
        {id: 9, type: 'Холодильник', name: 'LG nova 2', brand: 'LG', price: 7600},
        {id: 10, type: 'Холодильник', name: 'Samsung VC', brand: 'Samsung', price: 25000},
        {id: 11, type: 'Телевизор', name: 'Samsung SMART', brand: 'Samsung', price: 42000},
        {id: 12, type: 'Телевизор', name: 'Xiaomi SMART', brand: 'Xiaomi', price: 23000},
        {id: 13, type: 'Телевизор', name: 'Xiaomi SMART mini',brand: 'Xiaomi', price: 18000},
        {id: 14, type: 'Телевизор', name: 'LG Ultra 4K', brand: 'LG', price: 24500},
        {id: 15, type: 'Телевизор', name: 'Samsung SE2', brand: 'Samsung', price: 12500}
    ],
}

const ADD_TECH = 'ADD_TECH'
const REMOVE_TECH = 'REMOVE_TECH'
const ACTIVE_TECH = 'ACTIVE_TECH'
const ADD_BRAND = 'ADD_BRAND'
const ACTIVE_BRAND_TYPEBAR = 'ACTIVE_BRAND_TYPEBAR'
const RESET_BRAND_FILTER = 'RESET_BRAND_FILTER'
export const catalogReducer = (state = defaultCatalog, action) => {
    switch (action.type) {
        case ADD_BRAND:
            return {...state, brands: [...state, action.payload]}

        case ACTIVE_BRAND_TYPEBAR:
            return {...state, activeBrandTypeBar: action.payload}

        case ADD_TECH :
            return {...state, tech: [...state, action.payload]}

        case REMOVE_TECH :
            return {...state, tech: state.tech.filter(tech => tech.id !== action.payload.id)}

        case ACTIVE_TECH :
            return {...state, activeTech: state.tech.filter(tech => tech.brand === action.payload.name)}
        case RESET_BRAND_FILTER :
            return {...state, activeBrandTypeBar: null, activeTech: state.tech}
        default: return state
    }
}