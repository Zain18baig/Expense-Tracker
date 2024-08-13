export default (state, action) => {
    switch(action.type){
        case 'DELETE_TRANSACTION':
            return{
                ...state,
                transations:  state. transations.filter( transations =>  transations.id !== action.payload)
            }
            case 'ADD_TRANSACTION':
                return{
                    ...state,
                    transations:[action.payload,...state.transations]
                }
        default : 
        return state;
    }
}