import {reducer, StateType, TOGGLE_COLLAPSED} from "./Reducer";

test("reducer should change value to opposite value", () => {

const state: StateType = {
    collapsed: false
}
const newState = reducer(state, {type: TOGGLE_COLLAPSED})


    expect(newState.collapsed).toBe(true)
})

test("collapsed should be false", () => {

    const state: StateType = {
        collapsed: true
    }
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})


    expect(newState.collapsed).toBe(false)
})

test("action type is not corrected", () => {

    const state: StateType = {
        collapsed: true
    }

    expect(() => {
        reducer(state, {type: "FAKE"})
    }).toThrow()

})