export const INCREMENT = 'mycomp/INCREMENT'

export const incre = () =>{
    return dispatch =>{
        dispatch ({
            type: INCREMENT
        })
    }
}