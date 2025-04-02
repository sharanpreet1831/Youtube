import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import { NavigationContainer } from "@react-navigation/native";
import BottomNavigation from "../src/Navigation/BottomNaviagtion";




// Mock react-native-gesture-handler to avoid Jest issues
jest.mock("react-native-gesture-handler", () => ({
    GestureHandlerRootView: ({ children }) => children,
    PanGestureHandler: ({ children }) => children,
}));

describe("Bottom Navigation Component", () => {
    it("navigates to Shorts screen when the Shorts tab is pressed", async () => {
        const { getByTestId, getByText, getByLabelText, findByTestId } = render(
            <NavigationContainer>
                <BottomNavigation />
            </NavigationContainer>
        );

        const shortsTab = await waitFor(() => getByLabelText("ShortsTab"));
        fireEvent.press(shortsTab);

        const shortsScreen = await waitFor(() => findByTestId("shorts-screen"));
        expect(shortsScreen).toBeTruthy();
    });
    it("navigates to Upload  screen when the Upload  tab is pressed", async () => {
        const { getByTestId, getByText, getByLabelText, findByTestId } = render(
            <NavigationContainer>
                <BottomNavigation />
            </NavigationContainer>
        );

        const uploadTab = await waitFor(() => getByLabelText("uploadTab"));
        fireEvent.press(uploadTab);

        const UploadScreen = await waitFor(() => findByTestId("upload-screen"));
        expect(UploadScreen).toBeTruthy();
    });
    it("navigate to subscription screen when the subscription button is pressed ", async () => {
        const { getByTestId, getByText, getByLabelText, findByTestId } = render(
            <NavigationContainer>
                <BottomNavigation />
            </NavigationContainer>
        );
        const subscriptionButton = await waitFor(() => getByLabelText("subscriptionButton"));
        fireEvent.press(subscriptionButton);

        const SubscriptionScreen = await waitFor(() => findByTestId("SubscriptionScreen"))
        expect(SubscriptionScreen).toBeTruthy();
    })
    it("navigate to profile screen when the profile button is clicked ", async () => {
        const { getByTestId, getByText, getByLabelText, findByTestId } = render(
            <NavigationContainer>
                <BottomNavigation />
            </NavigationContainer>
        );
        const profileTab = await waitFor(() => getByLabelText("ProfileTab"));
        fireEvent.press(profileTab)

        const ProfileScreen = await waitFor(() => findByTestId('Profile screen'));
        expect(ProfileScreen).toBeTruthy();
    })
    it("testing of home icon", () => {
        const { getByTestId } = render(
            <NavigationContainer>
                <BottomNavigation />
            </NavigationContainer>

        );

        // expect(getByTestId('shorticon')).toBeTruthy();
        // expect(getByTestId('subscriptionsIcon')).toBeTruthy();
        // expect(getByTestId('uploadIcon')).toBeTruthy();
        // expect(getByTestId('profileIcon')).toBeTruthy();

    })

});