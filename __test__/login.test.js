import React from "react";
import{fireEvent, render} from '@testing-library/react-native'
import Login from "../src/Login";



describe('Login Screen' , () => {
    it('should go to home page ', () => {
        const page = render(<Login />)
        const increaserButton = page.getByTestId("upbutton")
        const countText = page.getByTestId("countText")

       expect(countText.props.children).toBe(0);
       fireEvent.press(increaserButton);
       expect(countText.props.children).toBe(1);
    })
})