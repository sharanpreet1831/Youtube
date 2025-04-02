import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { useNavigation } from '@react-navigation/native'; // ✅ Import useNavigation
import Header from '../src/component/Header';


// Mock useNavigation globally
const mockNavigate = jest.fn();

jest.mock('@react-navigation/native', () => ({
    useNavigation: () => ({
        navigate: mockNavigate, 
    }),
    useRoute: jest.fn(() => ({
        params: {},
    })),
}));

describe('Header component tests', () => {
    it('renders CastIcon correctly', () => {
        const { getByTestId } = render(<Header />);
        expect(getByTestId('cast-icon')).toBeTruthy();
    });

    it('renders NotificationIcon correctly', () => {
        const { getByTestId } = render(<Header />);
        expect(getByTestId('notification-icon')).toBeTruthy();
    });

    it('renders SearchIcon correctly', () => {
        const { getByTestId } = render(<Header />);
        expect(getByTestId('search-button')).toBeTruthy();
    });

    it('navigates on SearchIcon press', () => {
        const { getByTestId } = render(<Header />);
        const searchIcon = getByTestId('search-button');

        fireEvent.press(searchIcon);

        expect(mockNavigate).toHaveBeenCalledWith('Search'); // ✅ Now it should work!
    });
});