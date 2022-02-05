const defaultCatalog = {
    brands: [
        {id: 1, brand: 'Samsung'},
        {id: 2, brand: 'Apple'},
        {id: 3, brand: 'LG'},
        {id: 4, brand: 'Huawei'},
        {id: 5, brand: 'Xiaomi'}
    ],
    type: [
        {id: 1, type: 'Телефон'},
        {id: 2, type: 'Холодильник'},
        {id: 3, type: 'Телевизор'},
    ],
    activeBrand_TypeBar : 0,
    activeType_TypeBar : 0,
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
        {id: 5, type: 'Телефон', name: 'Iphone X', brand: 'Apple', price: 40000},
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
const REMOVE_BRAND = 'REMOVE_BRAND'
const ACTIVE_BRAND_TYPEBAR = 'ACTIVE_BRAND_TYPEBAR'
const ADD_TYPE = 'ADD_TYPE'
const REMOVE_TYPE = 'REMOVE_TYPE'
const ACTIVE_TYPE_TYPEBAR = 'ACTIVE_TYPE_TYPEBAR'
const RESET_FILTER = 'RESET_FILTER'
const ADD_NEW_BRAND = 'ADD_NEW_BRAND'
const ADD_NEW_TYPE = 'ADD_NEW_TYPE'
const ADD_NEW_PRODUCT = 'ADD_NEW_PRODUCT'


export const catalogReducer = (state = defaultCatalog, action) => {
    switch (action.type) {
        case ADD_BRAND:
            return {...state, brands: [...state, action.payload]}
        case REMOVE_BRAND:
            return {...state, brands: state.brands.filter(brands => brands.id !== action.payload.id)}
        case ACTIVE_BRAND_TYPEBAR:
            return {...state, activeBrand_TypeBar: action.payload}

        case ADD_TYPE:
            return {...state, type: [...state, action.payload]}
        case REMOVE_TYPE:
            return {...state, type: state.type.filter(type => type.id !== action.payload.id)}
        case ACTIVE_TYPE_TYPEBAR:
            return {...state, activeType_TypeBar: action.payload}


        case ADD_TECH :
            return {...state, tech: [...state, action.payload]}
        case REMOVE_TECH :
            return {...state, tech: state.tech.filter(tech => tech.id !== action.payload.id)}

        case ACTIVE_TECH :
            const stack = []
            const arr = state.tech.map(element => {
                if(action.payload.brand === undefined) {
                    if(state.activeBrand_TypeBar === 0) {
                        if(element.type === action.payload.type) stack.push(element)
                    }
                    if(state.activeBrand_TypeBar > 0) {
                        let nameBrand = ''
                         state.brands.map(count => {
                            if(count.id === state.activeBrand_TypeBar) {
                                nameBrand += count.brand
                            }
                        })
                        if(element.type === action.payload.type && element.brand === nameBrand) {
                            stack.push(element)
                        }
                    }
                }if(action.payload.type === undefined){
                    if(state.activeType_TypeBar === 0) if(element.brand === action.payload.brand) stack.push(element)
                    if(state.activeType_TypeBar > 0) {
                        let nameType = ''
                        state.type.map(count => {
                            if(count.id === state.activeType_TypeBar) {
                                nameType += count.type
                            }
                        })
                        if(element.brand === action.payload.brand && element.type === nameType) {
                            stack.push(element)
                        }
                    }
                }
            })
            return {...state, activeTech: stack}

        case RESET_FILTER :
            return {...state, activeBrand_TypeBar: 0, activeType_TypeBar: 0, activeTech: state.tech}
        case ADD_NEW_BRAND:
            return {...state, brands: [...state.brands, {id: action.payload.id, brand: action.payload.brands}]}
        case ADD_NEW_TYPE:
            return {...state, type: [...state.type, {id: action.payload.id, type: action.payload.type}]}
        case ADD_NEW_PRODUCT:
            return {...state, tech: [...state.tech, {
                id: action.payload.id,
                type: action.payload.type,
                name: action.payload.name,
                brand: action.payload.brand,
                price: parseInt(action.payload.price)
            }]}
        default: return state
    }
}
