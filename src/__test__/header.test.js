import React from "react"
import Header from "../component/Header"
import {render} from '@testing-library/react-native'

describe("login header" , () => {
    it("testing casticon " , () => {
       const page = render(<Header />)
       const CastIcon = page.getByTestId("CastIcon")
       

       expect(CastIcon).toBeTruthy();
      
    }),
    it("testing NotificationIcon " , () => {
        const page = render(<Header />)
      
        const NotificationIcon = page.getByTestId("NotificationIcon")

        expect(NotificationIcon).toBeTruthy();
        
     }),
     it("testing Search Icon " , () => {
        const page = render(<Header />)
      
        const SearchIcon = page.getByTestId("SearchIcon")

        expect(SearchIcon).toBeTruthy();
        
     })
})