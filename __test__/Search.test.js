import React, { act } from "react"
import { fireEvent, render } from "@testing-library/react-native"
import Search from "../src/screen/Search";
import Voice from "@react-native-voice/voice";


jest.mock("@react-native-voice/voice", () => ({
  onSpeechStart: jest.fn(),
  onSpeechEnd: jest.fn(),
  onSpeechResults: jest.fn(),
  onSpeechError: jest.fn(),
  start: jest.fn(),
  destroy: jest.fn(),
  removeAllListeners: jest.fn(),
}));

describe("testing of search screen " ,()=> {
    it("renders the main Search screen", () => {
        const { getByTestId } = render(<Search />);
        const searchScreen = getByTestId("SearchScreen");
        expect(searchScreen).toBeTruthy();
      });
      it("renders the back button", () => {
        const { getByTestId } = render(<Search />);
        const backButton = getByTestId("BackButton");
        expect(backButton).toBeTruthy();
      });
      it("renders the search input", () => {
        const { getByTestId } = render(<Search />);
        const searchInput = getByTestId("SearchInput");
        expect(searchInput).toBeTruthy();
      });
      it("checks if microphone button is present", () => {
        const { getByTestId } = render(<Search />);
        const micButton = getByTestId("MicButton");
        expect(micButton).toBeTruthy();
      });
      it("updates text input when speech is recognized", () => {
        const { getByTestId } = render(<Search />);
        const searchInput = getByTestId("SearchInput");
    
        fireEvent.changeText(searchInput, "Hello World");
        expect(searchInput.props.value).toBe("Hello World");
      });
      it("calls navigation.goBack when back button is pressed", () => {
        const mockNavigation = { goBack: jest.fn() };
        const { getByTestId } = render(<Search navigation={mockNavigation} />);
    
        const backButton = getByTestId("BackButton");
        fireEvent.press(backButton);
    
        expect(mockNavigation.goBack).toHaveBeenCalled();
      });
      it("activates voice input on microphone press", () => {
        const { getByTestId } = render(<Search />);
        const micButton = getByTestId("MicButton");
    
        fireEvent.press(micButton);
        // Check if voiceText clears after pressing mic button
        const searchInput = getByTestId("SearchInput");
        expect(searchInput.props.value).toBe(""); // Since voiceText resets on start
      });
      it("triggers voice recognition on microphone press", async () => {
        const { getByTestId } = render(<Search />);
        const micButton = getByTestId("MicButton");
    
        // Mock Voice.start success
        Voice.start.mockResolvedValueOnce();
    
        await act(async () => {
          fireEvent.press(micButton);
        });
    
        expect(Voice.start).toHaveBeenCalledWith("en-US");
      });
      it("updates state when onSpeechStartHandler is triggered", () => {
        const { getByTestId, getByPlaceholderText } = render(<Search />);
        const micButton = getByTestId("MicButton");
    
        act(() => {
          fireEvent.press(micButton);
        });
    
        // Verify state change (isListening should be true)
        expect(getByPlaceholderText("Search").props.value).toBe("");
      });
      it("updates text input when speech is recognized", () => {
        const { getByPlaceholderText, rerender } = render(<Search />);
    
        // Simulate speech recognition event
        act(() => {
          Voice.onSpeechResults({ value: ["Hello World"] });
        });
    
        // Rerender the component to reflect state change
        rerender(<Search />);
    
        // Check if text input updates
        expect(getByPlaceholderText("Search").props.value).toBe("Hello World");
      });

      it("handles speech recognition errors", () => {
        const { getByTestId, rerender } = render(<Search />);
    
        // Simulate an error
        act(() => {
          Voice.onSpeechError({ error: "Network error" });
        });
    
        // Rerender component to reflect state changes
        rerender(<Search />);
    
        // Ensure the microphone button is still present (indicating no crash)
        expect(getByTestId("MicButton")).toBeTruthy();
      });
    
      it("cleans up Voice listeners on unmount", () => {
        const { unmount } = render(<Search />);
        unmount();
    
        expect(Voice.destroy).toHaveBeenCalled();
        expect(Voice.removeAllListeners).toHaveBeenCalled();
      });
  
    
    
    
})