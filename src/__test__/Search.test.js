import React from "react"
import { render } from "@testing-library/react-native"
import Search from "../screen/Search"

describe("testing of search screen " ,()=> {
    it("main page test" , () => {
        const page = render(<Search/>)
        const SearchScreen = page.getByTestId("SearchScreen");
        expect(SearchScreen).toBeTruthy();
    })
})